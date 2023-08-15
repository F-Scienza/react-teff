import { TrashIcon } from '@heroicons/react/24/solid';

const OrderCard = props => {
	const { title, img, price, handleDeleteProduct, id } = props;

	let renderTrashIcon;
	if (handleDeleteProduct) {
		renderTrashIcon = <TrashIcon className="h-4 w-4 cursor-pointer" />;
	}

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
			<div
				className="flex items-center gap-2"
				onClick={() => handleDeleteProduct(id)}
			>
				<p className="text-lg font-medium px-2">${price}</p>
				{renderTrashIcon}
			</div>
		</div>
	);
};

export default OrderCard;
