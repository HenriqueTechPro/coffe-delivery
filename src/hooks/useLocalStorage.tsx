export function useLocalStorage<T>() {
  function saveToLocalStorage(data: T, key: string) {
    if (!data) return

    const dataJSON = JSON.stringify(data)

    localStorage.setItem(key, dataJSON)
  }

  function loadLocalStorage(key: string): T | null {
    const dataJSON = localStorage.getItem(key)

    if (!dataJSON) return null

    const data = JSON.parse(dataJSON) as T

    return data
  }

  return { saveToLocalStorage, loadLocalStorage }
}
