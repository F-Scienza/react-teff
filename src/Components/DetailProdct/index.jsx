import { useContext } from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
const DetailProduct = () => {
	const context = useContext(ShoppingCartContext);
	const { productDetailOpen, setProductDetailOpen, productShow } = context;

	const handleDetail = () => {
		setProductDetailOpen(false);
	};

	return (
		<aside
			className={`${
				productDetailOpen ? 'flex' : 'hidden'
			} product-detail flex-col items-center fixed right-2 border border-black rounded-lg bg-white h-4/5`}
		>
			<div className="flex justify-between p-4">
				<h2 className="font-medium text-m">{productShow?.title}</h2>
				<span onClick={handleDetail} className="cursor-pointer right-3 top-3 absolute" >
					<XMarkIcon className="h-4 w-4" />
				</span>
			</div>
			<figure className="h-1/2 px-8 ">
				<img
					src={productShow.image}
					alt="img product to view"
					className="h-full rounded-lg mb-2"
				/>
			</figure>
			<p className="flex flex-col p-4">
				<span className="font-medium text-2xl mb-2">${productShow.price}</span>
				<span className="font-medium text-md">{productShow.title}</span>
				<span className="font-light text-sm">{productShow.description}</span>
			</p>
		</aside>
	);
};

export default DetailProduct;
