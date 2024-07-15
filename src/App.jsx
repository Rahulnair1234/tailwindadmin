import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ecommerce from './components/eCommmerce/Ecommerce';
import Navbar from './components/Navbar';
import ProFormLayout from './components/ProFormLayout';
import Sidebar from './components/SideBar';

export default function App() {
	return (
		<>
			<BrowserRouter>
				<div className='flex'>
					<Sidebar />
					<div className='flex flex-col w-[80%]'>
						<Navbar />
						<div className='flex bg-slate-200 w-full h-full'>
							<Routes>
								<Route
									path='/'
									element={<Ecommerce />}></Route>
								<Route
									path='/proformlayout'
									element={<ProFormLayout />}></Route>
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}
