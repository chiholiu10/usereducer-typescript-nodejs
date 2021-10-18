import { FC, useContext, useState } from "react";
import { Context } from "../../context/context";

export const Input: FC = () => {
    const countContext = useContext(Context);
    const [text, setText] = useState("")

    const getInputValue = (value: any) => {
        setText(value)
    }
    
    return ( 
        <>
            <input type="text" onChange={(e)=> getInputValue(e.target.value)}/>
            <button onClick={() => countContext.dispatch({type: "add_todo", result: text})}>
                increment
            </button>
        </>
    )
}
