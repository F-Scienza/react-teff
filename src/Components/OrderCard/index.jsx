import { TrashIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const OrderCard = props => {
	const context = useContext(ShoppingCartContext);
	const { cartProducts, setCartProducts } = context;

	const { title, img, price, id } = props;

	const handleDeleteProduct = () => {
		const filterProducts = cartProducts.filter(prod => prod.id != id)
		console.log(filterProducts)
		setCartProducts(filterProducts);
	};

	return (
		<div className="w-full mb-2 py-2 flex justify-between items-center">
			<div className="flex items-center gap-2">
				<figure className="w-20 h-20">
					<img
						className="w-full h-full rounded-lg object-scale-down"
						src={img}
						alt={title}
					/>
				</figure>
				<p className="text-sm font-light"> {title} </p>
			</div>
			<div className="flex items-center gap-2" onClick={handleDeleteProduct}>
				<p className="text-lg font-medium px-2">${price}</p>
				<TrashIcon className="h-4 w-4 cursor-pointer" />
			</div>
		</div>
	);
};

export default OrderCard;
