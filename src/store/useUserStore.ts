import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  name: string;
};

type UserState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user: User | null) => set({ user }),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
