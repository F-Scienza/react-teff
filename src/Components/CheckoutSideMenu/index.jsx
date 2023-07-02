import { useContext } from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext);
	const { showCheckout, setShowCheckout, cartProducts } = context;

	const handleCheckout = () => {
		setShowCheckout(!showCheckout);
	};

	return (
		<aside
			className={`${
				showCheckout ? 'flex' : 'hidden'
			} checkout-detail scrollable-cards flex-col items-center fixed right-2 border border-black rounded-lg bg-white h-4/5 z-20`}
		>
			<h2 className="text-lg font-semibold">Checkout</h2>
			<div className="flex justify-between p-4">
				<h2 className="font-medium text-m">{showCheckout?.title}</h2>
				<span
					onClick={handleCheckout}
					className="cursor-pointer right-3 top-3 absolute"
				>
					<XMarkIcon className="h-4 w-4" />
				</span>
			</div>
			<div className="px-2">
				{cartProducts.map(prod => (
					<OrderCard
						key={prod.id}
						id={prod.id}
						title={prod.title}
						img={prod.image}
						price={prod.price}
					/>
				))}
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;
