import { createContext, Dispatch } from "react";

export const initialState = { 
    count: 0,
    loaded: false,
    data: [],
    result: []
};

export interface State {
    count: number;
    data: Array<string>;
    loaded: boolean;
    result: any;
};

export interface Actions {
    type: 'add_todo' | 'decrement';
    loaded?: boolean;
    count?: number;
    data?: Array<string>;
    result?: any;
};

export const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "get_data": 
            return {
                data: action.data,
                loaded: action.loaded
            }
        case "add_todo":
            return { 
                state
            }
        case "increment":
            return {
                state
            }
        case "decrement":
            return {
                state
            }
        default: 
            return state;
    }
}

export interface ContextProps {
    state: State;
    dispatch: Dispatch<Actions>;
}

export const Context = createContext<ContextProps>({
    state: initialState,
    dispatch: () => {}
});