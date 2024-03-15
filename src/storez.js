import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: 'light',
  changeTheme: (color) => set(() => ({ theme: color})),
}))