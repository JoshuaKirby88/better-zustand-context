"use client"

import { bearZustand, useBearZustand } from "./zustand"

export const ExampleComponentUsage = () => {
    const bears = useBearZustand(state => state.bears)

    const deleteBears = () => {
        bearZustand.getState().setBears([])
    }
}