import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
	const context = useContext(ShoppingCartContext);
	const { cartProducts, showCheckout, setShowCheckout } = context;
	const activeStyle = 'underline underline-offset-4';

	const count = cartProducts.length;
	const handleCheckout = () => setShowCheckout(!showCheckout);
	return (
		<nav className="bg-white/50 top-0 flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink to="/">Shopi</NavLink>
				</li>
				<li>
					<NavLink>All</NavLink>
				</li>
				<li>
					<NavLink
						to="/Clothes"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Electronics"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Toys"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Fornitures"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Fornitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/others"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						others
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
