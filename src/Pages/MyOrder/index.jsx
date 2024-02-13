import { useContext } from 'react';
import Layout from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { Link, useParams } from 'react-router-dom';
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';

const MyOrder = () => {
	const context = useContext(ShoppingCartContext);
	const { orders, handleDeleteOrderProduct } = context;

	const params = useParams();
	const foundOrder = orders.find(order => order.id === params.id);

	return (
		<Layout>
			<div className="relative flex w-80 items-center justify-center">
				<Link to="/my-orders" className="absolute left-0">
					<ChevronDoubleLeftIcon className="w-6 h-6" />
				</Link>
				<h2 className="text-l mb-4 font-semibold">My order:</h2>
			</div>
			<div className="flex flex-col items-center px-2 h-full">
				{orders.length > 0 ? (
					foundOrder.products.map(prod => (
						<OrderCard
							key={prod.id}
							id={prod.id}
							title={prod.title}
							img={prod.image}
							price={prod.price}
							handleDeleteOrderProduct={handleDeleteOrderProduct}
						/>
					))
				) : (
					<p>Aún no tienes una orden...</p>
				)}
				{orders.length > 0 && (
					<Link to={`/my-orders/`}>
						<button className="mt-2 w-60 relative h-8 overflow-hidden rounded-lg border-solid border-2 border-cyan-500 hover:border-none hover:bg-cyan-500 text-sm font-bold hover:text-white hover:w-80 transition-all ease-in-out duration-500">
							PAYMENT
							<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
						</button>
					</Link>
				)}
			</div>
		</Layout>
	);
};

export default MyOrder;
