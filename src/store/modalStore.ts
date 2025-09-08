import {create} from 'zustand'

type ModalState = {
  modals: {[key:string]:boolean},
  open: (key:string) => void,
  close: (key:string) => void,
}
export const useModalStore = create<ModalState>((set) => ({
  modals:{},
  open: (key) => set((state) => ({modals: { ...state.modals, [key]: true }})),
  close: (key) => set((state) => ({modals: { ...state.modals, [key]: false }})),
}));