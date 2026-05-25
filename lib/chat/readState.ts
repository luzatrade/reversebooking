export type ChatReadState = Record<string, string>;

const STORAGE_PREFIX = "hd-chat-read:";

function storageKey(userId: string) {
  return `${STORAGE_PREFIX}${userId}`;
}

export function loadChatReadState(userId: string): ChatReadState {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(storageKey(userId));
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ChatReadState;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function saveChatReadState(userId: string, state: ChatReadState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey(userId), JSON.stringify(state));
}

export function markOfferChatRead(userId: string, offerId: string, lastMessageId: string | null) {
  if (!lastMessageId) return;
  const current = loadChatReadState(userId);
  current[offerId] = lastMessageId;
  saveChatReadState(userId, current);
}

export type ChatMessageLike = {
  id: string;
  offer_id: string;
  sender_id: string;
};

export function countUnreadChatMessages(
  messages: ChatMessageLike[],
  userId: string,
  readState: ChatReadState,
) {
  const byOffer = new Map<string, ChatMessageLike[]>();
  for (const message of messages) {
    const bucket = byOffer.get(message.offer_id) ?? [];
    bucket.push(message);
    byOffer.set(message.offer_id, bucket);
  }

  let total = 0;
  for (const [offerId, offerMessages] of byOffer) {
    const lastReadId = readState[offerId];
    const lastReadIndex = lastReadId ? offerMessages.findIndex((message) => message.id === lastReadId) : -1;
    const unreadStart = lastReadIndex >= 0 ? lastReadIndex + 1 : 0;
    total += offerMessages.slice(unreadStart).filter((message) => message.sender_id !== userId).length;
  }
  return total;
}
