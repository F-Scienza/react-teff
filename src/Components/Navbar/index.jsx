import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
	const context = useContext(ShoppingCartContext);
	const {
		cartProducts,
		showCheckout,
		setShowCheckout,
		setCategoryTitle,
		categoryTitle,
	} = context;

	const activeStyle = 'underline underline-offset-4';
	const count = cartProducts.length;
	const handleCheckout = () => setShowCheckout(!showCheckout);

	return (
		<nav className="bg-white/50 top-0 flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to="/" onClick={() => setCategoryTitle('')}>
						Shopi
					</NavLink>
				</li>
				<li>
					<NavLink to="/" onClick={() => setCategoryTitle('')}>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						onClick={() => {
							setCategoryTitle("men's clothing");
						}}
						className={() =>
							categoryTitle == "men's clothing" ? activeStyle : undefined
						}
					>
						For men
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						onClick={() => setCategoryTitle("women's clothing")}
						className={() =>
							categoryTitle == "women's clothing" ? activeStyle : undefined
						}
					>
						For women
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						onClick={() => setCategoryTitle('electronics')}
						className={() =>
							categoryTitle == 'electronics' ? activeStyle : undefined
						}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						onClick={() => setCategoryTitle('jewelery')}
						className={() =>
							categoryTitle == 'jewelery' ? activeStyle : undefined
						}
					>
						Jewelery
					</NavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/60">email@mail.com</li>
				<li>
					<NavLink
						to="/My-Order"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My order
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/My-Orders"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Signin"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						signin
					</NavLink>
				</li>
				<li className="flex">
					<ShoppingCartIcon className="w-6 h-6" onClick={handleCheckout} />
					<p> {count} </p>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
