import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
	// contador de shopping cart
	const [count, setCount] = useState(0);

	// abrir sidebar
	const [productDetailOpen, setProductDetailOpen] = useState(false);

	// producto a mostrar
	const [productShow, setProductShow] = useState({});

	//carrito
	const [cartProducts, setCartProducts] = useState([])

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				productDetailOpen,
				setProductDetailOpen,
				productShow,
				setProductShow,
				cartProducts,
				setCartProducts
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
