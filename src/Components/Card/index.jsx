import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusCircleIcon, CheckIcon } from '@heroicons/react/24/outline';

const Card = data => {
	const product = data.data;

	const context = useContext(ShoppingCartContext);
	const {
		setProductDetailOpen,
		setProductShow,
		cartProducts,
		setCartProducts,
		setShowCheckout,
	} = context;

	const handleDetail = () => {
		setProductShow(product);
		setProductDetailOpen(true);
	};

	const handleAddToCart = e => {
		setCartProducts([...cartProducts, product]);
		setShowCheckout(true);
		e.stopPropagation();
	};

	// está en el carrito?
	const renderIcon = id => {
		const isInCart = cartProducts.filter(p => p.id === id).length > 0;

		if (isInCart) {
			return (
				<div className="absolute top-0 right-0 flex justify-center items-center bg-white w-7 h-7 rounded-full m-2 p-1 z-10 transition-all duration-300 ease-in-out">
					<CheckIcon className="w-6 h-6" />
				</div>
			);
		} else {
			return (
				<div
					onClick={handleAddToCart}
					className="absolute top-0 right-0 flex justify-center items-center bg-white w-7 h-7 rounded-full m-2 p-1 hover:p-0 z-10 transition-all duration-300 ease-in-out"
				>
					<PlusCircleIcon className="w-6 h-6" />
				</div>
			);
		}
	};

	return (
		<div
			onClick={handleDetail}
			className="flex flex-col justify-center  bg-white cursor-pointer w-32 md:w-56 h-30 md:h-70 rounded-lg mb-2 mt-2"
		>
			<figure className="flex justify-center h-52 relative mb-4 ">
				<span className="z-20 absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{product.category}
				</span>
				<img
					className="max-h-52 max-w-full object-scale-down rounded-lg"
					src={product.image}
					alt="imagen de producto"
				/>
				{renderIcon(product.id)}
			</figure>
			<p className="flex flex-col">
				<span className="text-sm font-light">{product.title}</span>
				<span className="self-end text-lg font-medium">${product.price}</span>
			</p>
		</div>
	);
};

export default Card;
