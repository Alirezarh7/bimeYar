import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "dark",
  setTheme: (newTheme) => {
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
    set({ theme: newTheme });
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
      return { theme: newTheme };
    }),
}));
