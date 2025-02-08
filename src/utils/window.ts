export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function isDarkThemePreferred(): boolean {
  if (isBrowser()) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
}

export function toggleClass(className: string, payload: boolean) {
  if (isBrowser()) {
    document.documentElement.classList.toggle(className, payload);
  }
}
