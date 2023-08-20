import { useContext } from 'react';
import Layout from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { Link, useParams } from 'react-router-dom';
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';

const MyOrder = () => {
	const context = useContext(ShoppingCartContext);
	const { order } = context;

	const params = useParams();
	const foundOrder = order.find(order => order.id === params.id);
	
	return (
		<Layout>
			<div className="relative flex w-80 items-center justify-center">
				<Link to="/my-orders" className="absolute left-0">
					<ChevronDoubleLeftIcon className="w-6 h-6" />
				</Link>
				<h2 className="text-l mb-4 font-semibold">My order:</h2>
			</div>
			<div className="px-2 h-full">
				{order.length > 0 ? (
					foundOrder.products.map(prod => (
						<OrderCard
							key={prod.id}
							id={prod.id}
							title={prod.title}
							img={prod.image}
							price={prod.price}
						/>
					))
				) : (
					<p>Aún no tienes una orden...</p>
				)}
			</div>
		</Layout>
	);
};

export default MyOrder;
