import create from "zustand";

interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
}

const useSidebar = create<SidebarState>((set, get) => ({
  isOpen: window.innerWidth > 520 ? true : false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebar;
