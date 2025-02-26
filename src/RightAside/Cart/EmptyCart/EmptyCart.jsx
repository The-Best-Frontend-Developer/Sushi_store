import React from 'react';
import cl from './EmptyCart.module.scss'
import MapComponent from "../../MapComponent/MapComponent";

const EmptyCart = () => {
    return (
        <div className={cl.emptyCartContainer}>
            <div className={cl.emptyCart}>
                <div className={cl.topText}>
                    <h3 className={cl.h3}>
                        Ваша корзина пуста.
                    </h3>
                    <p className={cl.p1}>Добавьте же скорее что-нибудь!</p>
                </div>
                <div className={cl.free}>
                    <p className={cl.p2}>Бесплатная доставка от 800 рублей</p>
                </div>
            </div>

            <MapComponent/>
        </div>
    );
};

export default EmptyCart;