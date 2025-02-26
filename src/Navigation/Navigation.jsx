import React from 'react';
import cl from './Navigation.module.scss'
import NavigationItems from "./NavigationItems/NavigationItems";
import {Link} from "react-router-dom";

const Navigation = () => {
    const navigationList = [
        {id: 1, name: 'Пицца', imagePath: '/images/1.svg', additions: '', URL: '/pizza'},
        {id: 2, name: 'Сеты', imagePath: '/images/2.svg', additions: '', URL: '/sets'},
        {id: 3, name: 'WOK', imagePath: '/images/3.svg', additions: '', URL: '/WOK'},
        {id: 4, name: 'Роллы', imagePath: '/images/4.svg', additions: '', URL: '/rolls'},
        {id: 5, name: 'Суши', imagePath: '/images/5.svg', additions: '', URL: '/sushi'},
        {id: 6, name: 'Салаты', imagePath: '/images/6.svg', additions: 'скоро', URL: '/salads'},
        {id: 7, name: 'Супы', imagePath: '/images/7.svg', additions: 'скоро', URL: '/soaps'},
        {id: 8, name: 'Корн доги', imagePath: '/images/8.svg', additions: '', URL: '/corn-dogs'},
        {id: 9, name: 'Напитки', imagePath: '/images/9.svg', additions: '', URL: '/drinks'},
        {id: 10, name: 'Акции', imagePath: '/images/10.svg', additions: '', URL: '/special-offers'},
    ]

    return (
        <div className={cl.container}>
            <Link className={cl.logo} to='/'>
                <img src="/images/logo.png" alt="Romsem logo" style={{width: 100, aspectRatio: 1}}/>
                <h2 className={cl.shopName}>ROMSEM</h2>
            </Link>
            <div className={cl.line}></div>
            <nav>
                <ul className={cl.navigationList}>
                    {navigationList.map((el) => (
                        <NavigationItems
                            key={el.id}
                            name={el.name}
                            imagePath={el.imagePath}
                            additions={el.additions}
                            url={el.URL}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;