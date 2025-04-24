// store.ts
import { create } from 'zustand'

interface BearState {
  bears: number
  increase: () => void
  reset: () => void
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  reset: () => set({ bears: 0 }),
}))
