// Tiny localStorage helpers (safe JSON parse/stringify)
export const storage = {
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : fallback
    } catch {
      return fallback
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      console.error("Local Storage Error");
    }
  },
  remove(key) {
    localStorage.removeItem(key)
  }
}
