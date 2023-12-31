import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//pages
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			}
		],
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Navbar />
		<RouterProvider router={router} />
	</React.StrictMode>
);
