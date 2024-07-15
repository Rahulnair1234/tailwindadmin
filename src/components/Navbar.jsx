import React from 'react';
import SearchBox from './SearchBox';
import { CiBellOn } from 'react-icons/ci';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

const Navbar = () => {
	return (
		<div className='flex px-5 py-3 bg-white w-full sticky top-0 z-10'>
			<div className='flex w-full justify-between items-center'>
				<SearchBox />
				<div className='flex justify-end gap-x-5 w-[40%]'>
					<div className='h-12 w-12 mx-1 rounded-full bg-slate-200 flex items-center justify-center text-black '>
						<CiBellOn size={20} />
					</div>
					<div className='h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-black '>
						<IoChatbubbleEllipsesOutline size={20} />
					</div>
					<div className='flex'>
						<div className='mx-4'>
							<p className='font-bold'>Rahul Nair</p>
							<p className='text-slate-600 text-end'>Web Developer</p>
						</div>
						<div className='h-12 w-12 bg-slate-500 rounded-full flex items-center justify-center text-lg font-semibold'>
							R
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
