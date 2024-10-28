import { Bear, ZustandPropContext } from "./zustand"

export const Provider = ({ children, initialBears }: { children: React.ReactNode, initialBears: Bear[] }) => { 

    return (
        <ZustandPropContext.Provider value={initialBears} >
            {children}
        </ZustandPropContext.Provider>
    )
}