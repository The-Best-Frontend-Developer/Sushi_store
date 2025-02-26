import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);

    const addProduct = (id, name, amount, price) => {
        setProducts([...products, { id, name, amount, price }]);
    };

    const removeProduct = (id) => {
        // Временно
        setProducts([])

        // setProducts((prev) => prev.filter((product) => product.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts() {
    return useContext(ProductContext);
}