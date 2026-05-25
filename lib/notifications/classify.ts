export type NotificationRow = {
  id: string;
  title: string;
  message: string | null;
};

function notificationText(notification: NotificationRow) {
  return `${notification.title} ${notification.message ?? ""}`.toLowerCase();
}

function matchesAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

export function countNewRequestNotifications(notifications: NotificationRow[]) {
  return notifications.filter((notification) =>
    matchesAny(notificationText(notification), ["nuova richiesta", "nuova inserzione", "new request", "richiesta diretta", "direct request"]),
  ).length;
}

export function countChatNotifications(notifications: NotificationRow[]) {
  return notifications.filter((notification) =>
    matchesAny(notificationText(notification), ["nuovo messaggio", "new message"]),
  ).length;
}

export function countNewOfferNotifications(notifications: NotificationRow[]) {
  return notifications.filter((notification) =>
    matchesAny(notificationText(notification), ["nuova offerta", "new offer"]),
  ).length;
}

export function countOfferStatusNotifications(notifications: NotificationRow[]) {
  return notifications.filter((notification) =>
    matchesAny(notificationText(notification), ["accettata", "accettato", "rifiutata", "rifiutato", "accepted", "rejected"]),
  ).length;
}

export function isNewRequestNotification(notification: NotificationRow) {
  return matchesAny(notificationText(notification), ["nuova richiesta", "nuova inserzione", "new request", "richiesta diretta", "direct request"]);
}

export function isChatNotification(notification: NotificationRow) {
  return matchesAny(notificationText(notification), ["nuovo messaggio", "new message"]);
}
