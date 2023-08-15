import { useContext } from 'react';
import Layout from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';

const MyOrders = () => {
	const context = useContext(ShoppingCartContext);
	const { order } = context;
	
	return (
		<Layout>
			<h1>My orders</h1>
			<div className="px-2 h-full">
				{order.length > 0 ? (
					order.map(prod => (
						<OrderCard
							key={prod.id}
							id={prod.id}
							title={prod.title}
							img={prod.image}
							price={prod.price}
						/>
					))
				) : (
					<p>Aún no hay ordenes...</p>
				)}
			</div>
		</Layout>
	);
};

export default MyOrders;
