export function getItem(key: string) {
  try {
    const item = localStorage.getItem(key);

    if (!item) return null;

    return item;
  } catch (e) {
    return null;
  }
}

export function setItem<T>(key: string, value: T): boolean {
  try {
    const _val = JSON.stringify(value);
    localStorage.setItem(key, _val);
    return true;
  } catch (_e) {
    return false;
  }
}

export function remove(key: string) {
  localStorage.removeItem(key);
}
