import { createContext, useReducer } from "react"
import ListReducer from "./listReducer";

const INITIAL_STATE = {
    lists: [],
    isFetching: false,
    error: false,
};

export const ListContext = createContext(INITIAL_STATE);

const ListContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

    return (
        <ListContext.Provider value={{
            lists: state.lists, 
            isFetching: state.isFetching, 
            error: state.error, 
            dispatch}}
        >
            {children}
        </ListContext.Provider>
    )
}

export default ListContextProvider;