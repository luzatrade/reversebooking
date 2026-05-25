export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function focusAlertBells() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  window.dispatchEvent(new CustomEvent("hd-focus-alert-bells"));
}
