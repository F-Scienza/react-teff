import { useContext } from 'react';
import Card from '../../Components/Card';
import Layout from '../../Components/Layout';
import DetailProduct from '../../Components/DetailProdct';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import { ShoppingCartContext } from '../../Context';

const Home = () => {
	const context = useContext(ShoppingCartContext);
	const { setSearchValue, filteredItems } = context;

	const handleSearch = ( e )=>{
		setSearchValue(e.target.value)
	}

	return (
		<Layout>
			<div className="relative flex w-80 items-center justify-center">
				<h2 className="text-l mb-4 font-semibold">Exclusive products</h2>
			</div>
			<input
				type="text"
				placeholder="Search Products"
				className="rounded-lg border border-black w-80 p-2 mb-8 focus:outline-none"
				onChange={handleSearch}
			/>
			<div className="grid gap-4 grid-cols-3 w-full max-w-screen-lg">
				{filteredItems?.map(item => (
					<Card data={item} key={item.id} />
				))}
			</div>
			<DetailProduct />
			<CheckoutSideMenu />
		</Layout>
	);
};

export default Home;
