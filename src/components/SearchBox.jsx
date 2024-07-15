import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchBox = ({ className }) => {
	return (
		<div
			className={`relative w-[25%] py-1 h-20  bg-White focus-within:bg-white flex space-x-4 items-center max-xl:hidden ${className}`}>
			<CiSearch size={20} />
			<input
				type='text'
				placeholder='Type to Search ...'
				className='bg-transparent text-gray-400 outline-none   '
			/>
		</div>
	);
};

export default SearchBox;
