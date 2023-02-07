import { useCallback, useState } from "react"

export function useObjectState<T extends object>(initialState: T) {
    const [state, setState] = useState(initialState)
    const setPartialState = useCallback((partialState: Partial<T>) => {
        setState((prevState) => ({ ...prevState, ...partialState }))
    }, [])
    return [state, setPartialState] as const
}
