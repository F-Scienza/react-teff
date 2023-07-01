import { useEffect, useState } from 'react';
import Card from '../../Components/Card';
import Layout from '../../Components/Layout';
import DetailProduct from '../../Components/DetailProdct';

const Home = () => {
	const [items, setItems] = useState(null);
	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=6')
			.then(res => res.json())
			.then(json => setItems(json));
	}, []);
	return (
		<Layout>
			<div className='grid gap-4 grid-cols-3 w-full max-w-screen-lg'>
				{items?.map(item => (
					<Card data={item} key={item.id} />
				))}
			</div>
			<DetailProduct/>
		</Layout>
	);
};

export default Home;
