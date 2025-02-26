import React, {useEffect, useState} from 'react';
import cl from "./App.module.scss";
import {useProducts} from "./Context";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import RightAside from "./RightAside/RightAside";
import Navigation from "./Navigation/Navigation";
import PizzaPage from "./pages/pizzaPage/PizzaPage";
import Middle from "./Middle/Middle";

const lightTheme = {
    '--orange': '#FF9846',
    '--redOrange': '#F46D40',
    '--red': '#EB5757',
    '--darkColor': '#111111',
    '--white': '#FFF',
    '--light-grey': '#F2F2F2',
    '--grey': '#A4ACAD',
    '--body': 'white',

    '--border-radius': '0.3rem',

    '--font': 'DinPro, sans-serif',
    '--fontColor': 'black',

    '--transition': '0.25s',
}

const darkTheme = {
    '--orange': '#FF7B2E',       // Более глубокий оранжевый
    '--redOrange': '#D9532A',   // Затемнённый красно-оранжевый
    '--red': '#C92B2B',         // Более тёмный красный
    '--darkColor': 'white',   // Основной фон — глубокий чёрный
    '--white': '#E5E5E5',       // Светло-серый вместо белого
    '--light-grey': '#3A3A3A',  // Тёмный вариант светло-серого
    '--grey': 'grey',        // Затемнённый серый
    '--body': '#1E1E1E',        // Цвет фона страницы

    '--border-radius': '0.3rem',

    '--font': 'DinPro, sans-serif',
    '--fontColor': '#EAEAEA',   // Светлый цвет шрифта для контраста

    '--transition': '0.25s',
};

function App() {
    const contextValues = useProducts()
    const [isDark, setIsDark] = useState(false);

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        const theme = isDark ? darkTheme : lightTheme;
        Object.entries(theme).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    }, [isDark]);

    return (
        <BrowserRouter>
            <div className={cl.container}>
                <input className={cl.checkbox} type="checkbox" onChange={() => setIsDark(!isDark)}/>
                <form className={cl.absolute}>
                    <input type="text" value={name} placeholder='Название' onChange={(e) => setName(e.target.value)}/>
                    <input type="text" value={amount} placeholder='Кол-во' onChange={(e) => setAmount(e.target.value)}/>
                    <input type="text" value={price} placeholder='Цена' onChange={(e) => setPrice(e.target.value)}/>
                    <button className={cl.add}
                            onClick={(event) => {
                                event.preventDefault();
                                contextValues.addProduct(Date.now, name, amount, price);
                                setName('')
                                setAmount('')
                                setPrice('')
                            }}
                    >
                        Добавить
                    </button>
                </form>
                <button className={cl.abso} onClick={() => contextValues.removeProduct()}>Удалить</button>

                <Navigation/>
                <Middle>
                    <Routes>
                        <Route path="/" element={<MainPage/>} exact/>
                        <Route path="/pizza" element={<PizzaPage/>}/>
                    </Routes>
                </Middle>
                <RightAside/>
            </div>
        </BrowserRouter>
  );
}

export default App;
