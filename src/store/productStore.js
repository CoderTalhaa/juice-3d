import { data } from "@/app/data";
import { create } from "zustand";

const useProductStore = create((set) => ({
  activeData: data[0],
  condition: false,
  setActiveData: (item) => set((state) => ({ activeData: item })),
  setCondition: (value) => set((state) => ({ condition: value })),
  handleSwap: (direction) =>
    set((state) => {
      const currentIndex = data.findIndex(
        (item) => item.id === state.activeData.id
      );
      let newIndex;
      if (direction === "next") {
        newIndex = (currentIndex + 1) % data.length;
      } else if (direction === "prev") {
        newIndex = (currentIndex - 1 + data.length) % data.length;
      }
      return { activeData: data[newIndex] };
    }),
  data: data,
  modelAnimation: false,
  setmodelAnimation: (value) => set((state) => ({ modelAnimation: value })),
}));

export default useProductStore;
