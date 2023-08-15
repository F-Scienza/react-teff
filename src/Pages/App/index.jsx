import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import Signin from '../Signin';
import NotFound from '../NotFound';
import Navbar from '../../Components/Navbar';

const AppRoutes = () => {
	const routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/My-Account', element: <MyAccount /> },
		{ path: '/My-Order', element: <MyOrder /> },
		{ path: '/My-Orders', element: <MyOrders /> },
		{ path: '/My-Orders/last', element: <MyOrder /> },
		{ path: '/Signin', element: <Signin /> },
		{ path: '/*', element: <NotFound /> },
	]);
	return routes;
};

const App = () => {
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<Navbar />
				<AppRoutes />
			</BrowserRouter>
		</ShoppingCartProvider>
	);
};

export default App;
