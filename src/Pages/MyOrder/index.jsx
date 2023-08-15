import { useContext } from 'react';
import Layout from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';

const MyOrder = () => {
	const context = useContext(ShoppingCartContext);
	const { order } = context;
	console.log(order.slice(-1)[0].products);

	return (
		<Layout>
			<h1>My order</h1>
			<div className="px-2 h-full">
				{order.length > 0 ? (
					order
						.slice(-1)[0]
						.products.map(prod => (
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
