import create from "zustand";

interface AuthProps {
  token: string | null;
}

export const useAuth = create<AuthProps>((set, get) => ({
  token: null,
}));
