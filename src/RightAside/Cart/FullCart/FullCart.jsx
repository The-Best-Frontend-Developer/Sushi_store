import React, {useMemo} from 'react';
import cl from './FullCart.module.scss'
import CartItems from "./CartItems/CartItems";
import {Link} from "react-router-dom";
import {useProducts} from "../../../Context";

const FullCart = () => {
    const contextValues = useProducts()

    const calcPrice = useMemo(() => {
        return contextValues.products.reduce((acc, el) => Number(acc) + Number(el.price), 0)
    }, [contextValues.products])

    return (
        <div className={cl.fullCart}>
            <div className={cl.topText}>
                <h3 className={cl.h3}>Корзина</h3>
            </div>
            <div className={cl.cartItems}>
                <CartItems products={contextValues.products}/>
            </div>
            <div className={cl.orderActions}>
                <div className={cl.priceContainer}>
                    <p className={cl.price} title={calcPrice + ' руб'}>
                        {calcPrice}
                        &nbsp;руб
                    </p>
                </div>
                <Link className={cl.order} to="/take-order">Оформить заказ</Link>
            </div>
        </div>
    );
};

export default FullCart;