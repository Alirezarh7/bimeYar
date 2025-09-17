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


interface ComparisonState {
    comparisonArr: any[];
    setComparisonArr: (arr: any[]) => void;
    addToComparison: (item: any) => void;
    removeFromComparison: (id: any) => void;
}

export const useComparisonStore = create<ComparisonState>((set) => ({
    comparisonArr: JSON.parse(localStorage.getItem("ComparisonInsuranceArr") || "[]"),
    setComparisonArr: (arr) => {
        localStorage.setItem("ComparisonInsuranceArr", JSON.stringify(arr));
        set({ comparisonArr: arr });
    },
    addToComparison: (item) =>
        set((state) => {
            const updated = [...state.comparisonArr, item];
            localStorage.setItem("ComparisonInsuranceArr", JSON.stringify(updated));
            return { comparisonArr: updated };
        }),
    removeFromComparison: (id) =>
        set((state) => {
            const updated = state.comparisonArr.filter((x) => x.id !== id);
            localStorage.setItem("ComparisonInsuranceArr", JSON.stringify(updated));
            return { comparisonArr: updated };
        }),
}));