import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
	// get datos
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(json => setItems(json));
	}, []);

	// search
	const [searchValue, setSearchValue] = useState('');

	// filtrados por titulo
	const [filteredItems, setFilteredItems] = useState([]);

	const filterItemsByTitle = (items, searchValue) => {
		return items?.filter(
			item => {
				const parseTitle = item.title.toLowerCase();
				const parsedValue = searchValue.toLowerCase();
				const filtered = parseTitle.includes(parsedValue);

				return filtered;
			}
		);
	};
	useEffect(() => {
		searchValue.length > 0
			? setFilteredItems(filterItemsByTitle(items, searchValue))
			: setFilteredItems(items);
	}, [items, searchValue]);

	// contador de shopping cart
	const [count, setCount] = useState(0);

	// abrir sidebar
	const [productDetailOpen, setProductDetailOpen] = useState(false);

	// producto a mostrar
	const [productShow, setProductShow] = useState({});

	// checkout show
	const [showCheckout, setShowCheckout] = useState(false);

	// carrito
	const [cartProducts, setCartProducts] = useState([]);

	// ordenes
	const [order, setOrder] = useState([]);

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
				setCartProducts,
				showCheckout,
				setShowCheckout,
				order,
				setOrder,
				items,
				setItems,
				searchValue,
				setSearchValue,
				filteredItems,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
