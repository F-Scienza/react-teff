import { useContext } from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext);
	const {
		showCheckout,
		setShowCheckout,
		cartProducts,
		setCartProducts,
		orders,
		setOrders,
	} = context;

	const handleCheckout = () => {
		setShowCheckout(!showCheckout);
	};
	const newId = uuidv4();

	const now = new Date();
	const formattedDate = `${now.getFullYear()}-${String(
		now.getMonth() + 1
	).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
	const formattedTime = `${String(now.getHours()).padStart(2, '0')}:${String(
		now.getMinutes()
	).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
	const dateTime = `${formattedDate} ${formattedTime}`;

	const handleSetOrder = () => {
		const orderToAdd = {
			date: dateTime,
			products: cartProducts,
			totalProducts: cartProducts.length,
			totalPrice: totalPrice(cartProducts),
			id: newId,
		};

		setOrders([...orders, orderToAdd]);
		setCartProducts([]);
	};

	const handleDeleteProduct = id => {
		const filterProducts = cartProducts.filter(prod => prod.id != id);
		setCartProducts(filterProducts);
	};

	return (
		<aside
			className={`${
				showCheckout ? 'flex' : 'hidden'
			} checkout-detail scrollable-cards flex-col justify-between fixed right-2 border border-black rounded-lg bg-white h-4/5 z-20`}
		>
			<div className="flex justify-between p-4">
				<h2 className="text-lg font-semibold">Checkout</h2>
				<h2 className="font-medium text-m">{showCheckout?.title}</h2>
				<span onClick={handleCheckout} className="cursor-pointer py-2">
					<XMarkIcon className="h-4 w-4" />
				</span>
			</div>
			<div className="px-2 h-full">
				{cartProducts.length > 0 ? (
					cartProducts.map(prod => (
						<OrderCard
							key={prod.id}
							id={prod.id}
							title={prod.title}
							img={prod.image}
							price={prod.price}
							handleDeleteProduct={handleDeleteProduct}
						/>
					))
				) : (
					<p>No products...</p>
				)}
			</div>
			<div className="w-100 flex flex-col font-bold text-center justify-evenly p-2">
				<span className="font-medium text-2xl w-50">
					Total: ${totalPrice(cartProducts)}
				</span>

				<Link to={`/my-orders/${newId}`}>
					<button
						className="mt-2 w-8/12 relative h-8 overflow-hidden rounded-lg border-solid border-2 border-green-500 hover:border-none hover:bg-green-500 text-sm font-bold hover:text-white hover:w-full transition-all ease-in-out duration-500"
						onClick={handleSetOrder}
					>
						GENERATE ORDER
						<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
					</button>
				</Link>
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;
