import { ChevronDoubleRightIcon, CalendarDaysIcon,ShoppingCartIcon } from '@heroicons/react/24/outline';

const OrdersCard = props => {
	// eslint-disable-next-line react/prop-types
	const { totalPrice, totalProducts, date } = props;
	return (
		<div className="flex justify-between items-center mb-3 border border-black hover:border-cyan-300 rounded-lg p-4 w-80 transition-all ease-in-out duration-300">
			<div className="flex">
				<CalendarDaysIcon className="w-4 mr-1" />
				<span className="text-xs">{date}</span>
			</div>
			<div className="flex justify-between">
				<div className="flex flex-col text-center">
					<span className="flex flex-center text-xs"> 
						<ShoppingCartIcon className='w-4 mr-1'/>
						{totalProducts} productos 
					</span>
					<span className="font-medium text-xl"> ${totalPrice}</span>
				</div>
				<ChevronDoubleRightIcon className="ml-2 w-4" />
			</div>
		</div>
	);
};

export default OrdersCard;
