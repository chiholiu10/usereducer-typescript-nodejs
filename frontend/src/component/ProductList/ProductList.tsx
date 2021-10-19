import { FC, useContext } from "react";
import { Context } from "../../context/context";

interface Product {
    category?: string;
    description?: string;
    id?: number;
    image?: string;
    price?: number;
    rating?: {
        rate?: number, count?: number
    },
    title?: string;
}

export const ProductList: FC = () => {
    const appState = useContext(Context);
    const { loaded, data } = appState.state;
    return (
        <div>{data.map((item: any) => {
            return (
                <div key={item.id}>
                    <div>{item.category}</div>
                    <div>{item.description}</div>
                    <div>{item.image}</div>
                    <div>{item.rating.rate}</div>
                    <div>{item.rating.count}</div>
                    <div>{item.title}</div>
                </div>
            )
        })}</div>
    )
}