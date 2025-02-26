import React from 'react';
import {Link} from "react-router-dom";
import cl from './NavigationItems.module.scss'

const NavigationItems = ({name, imagePath, additions, url}) => {
    return (
        <li className={cl.container}>
            <div>
                <img src={imagePath} alt={name}/>
            </div>
            <Link className={cl.link} to={url}>{name}</Link>
            {additions
                ?
                <div className={cl.addition}>{additions}</div>
                :
                null}
        </li>
    );
};

export default NavigationItems;