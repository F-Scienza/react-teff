import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrdersCard from '../../Components/OrdersCard/index.jsx';
import { Link } from 'react-router-dom';

const MyOrders = () => {
	const context = useContext(ShoppingCartContext);
	const { orders } = context
	return (
		<Layout>
			<h2 className='text-l mb-4 font-semibold' >My orders:</h2>
			{orders.length > 0 ? (
				orders.map((orderItem, index) => (
					<Link key={index} to={`/my-orders/${orderItem.id}`}>
						<OrdersCard
							totalPrice={orderItem.totalPrice}
							totalProducts={orderItem.totalProducts}
							date={orderItem.date}
						/>
					</Link>
				))
			) : (
				<p>No hay ordenes disponibles</p>
			)}
		</Layout>
	);
};

export default MyOrders;
