export enum StorageKeys {
  REMOVED_USERS = 'pp:removed-users'
}

export function useStorage() {
  function getItem(key: StorageKeys): string | null {
    return localStorage.getItem(key)
  }

  function setItem(key: StorageKeys, value: any): void {
    localStorage.setItem(key, value)
  }

  function removeItem(key: StorageKeys): void {
    localStorage.removeItem(key)
  }

  return {
    getItem,
    setItem,
    removeItem
  }
}
