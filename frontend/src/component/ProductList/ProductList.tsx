import { FC, useContext } from "react";
import { Context } from "../../context/context";

export const ProductList: FC = () => {
    const SearchContext = useContext(Context);
    console.log(SearchContext)
    return (
        <div>{}</div>
    )
}