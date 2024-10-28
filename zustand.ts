import { create, useStore } from 'zustand'
import { useContext, createContext } from 'react'

export type Bear = {
    id: number,
    name: string,
}

type Store = {
    bears: Bear[],
    setBears: (bear: Bear[]) => void,
}

export const bearZustand = create<Store>(set => ({
    bears: null!, // Set to null initially
    setBears: (bear) => set(state => ({ bears: [...state.bears, bear] })),
}))

export const ZustandPropContext = createContext<Store["bears"] | null>(null)

export const useBearZustand = <T>(selector: (state: Store) => T): T => {
	const initialBears = useContext(ZustandPropContext)
	if (!initialBears) throw new Error()

	if (!bearZustand.getState().bears) {
		bearZustand.getState().setBears(initialBears)
	}

	return useStore(bearZustand, state => {
        // If state is null, then swap it with initial data
		const replacedState = { ...state, bears: state.bears ?? initialBears }
		return selector(replacedState)
	})
}
