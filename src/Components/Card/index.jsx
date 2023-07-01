import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const Card = data => {
	const product = data.data;

	const context = useContext(ShoppingCartContext);
	const {
		setProductDetailOpen,
		setProductShow,
		cartProducts,
		setCartProducts
	} = context;


	const handleDetail = () => {
		setProductShow(product);
		setProductDetailOpen(true);
	};

	const handleAddToCart = ()=>{
		setCartProducts([...cartProducts, product])
	}

	return (
		<div
			onClick={handleDetail}
			className="bg-white cursor-pointer w-56 h-60 rounded-lg"
		>
			<figure className="relative mb-4 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{product.category}
				</span>
				<img
					className="w-full h-full object-scale-down rounded-lg"
					src={product.image}
					alt="imagen de producto"
				/>
				<div
					onClick={handleAddToCart}
					className="absolute top-0 right-0 flex justify-center items-center bg-white w-7 h-7 rounded-full m-2 p-1 z-10"
				>
					<PlusCircleIcon className="w-6 h-6" />
				</div>
			</figure>
			<p className="flex justify-between ">
				<span className="text-sm font-light">{product.title}</span>
				<span className="text-lg font-medium">${product.price}</span>
			</p>
		</div>
	);
};

export default Card;
