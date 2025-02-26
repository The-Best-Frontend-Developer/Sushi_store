import React from 'react';
import cl from './Middle.module.scss'

const Middle = ({children}) => {
    return (
        <div className={cl.container}>
            <header className={cl.header}>

            </header>
            {children}
        </div>
    );
};

export default Middle;