import React, {useEffect, useState} from 'react';
import cl from './RightAside.module.scss'
import {useProducts} from "../Context";
import EmptyCart from "./Cart/EmptyCart/EmptyCart";
import FullCart from "./Cart/FullCart/FullCart";

const RightAside = () => {
    const contextValues = useProducts()
    const [isProducts, setIsProducts] = useState(false)

    useEffect(() => {
        setIsProducts(contextValues.products.length !== 0);
    }, [contextValues.products]);

    return (
        <div className={cl.cart}>
            {isProducts
                ? <FullCart/>

                : <EmptyCart/>
            }
        </div>
    );
};

export default RightAside;