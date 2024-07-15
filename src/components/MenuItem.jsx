import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, drop, items, Icon }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	return (
		<ul className='flex flex-col gap-1.5 px-5 py-3 w-full'>
			<li>
				{drop && (
					<button
						className='group relative flex  w-full items-center justify-between gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark '
						onClick={toggleDropdown}>
						<span className='flex gap-x-3'>
							<Icon size={20} />
							{title}
						</span>

						<span>{isDropdownOpen ? '▲' : '▼'}</span>
					</button>
				)}
				{!drop && (
					<button className='group relative flex  w-full items-center justify-between gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark '>
						<span className='flex gap-x-3'>
							<Icon size={20} />
							{title}
						</span>
					</button>
				)}
				{isDropdownOpen && (
					<div className='translate transform overflow-hidden'>
						{items &&
							items.map((item, index) => (
								<ul
									className='mb-5.5 mt-4 flex flex-col gap-2.5 pl-6'
									key={index}>
									<li>
										<Link
											className='group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white'
											to={item.url}>
											{item.name}
										</Link>
									</li>
								</ul>
							))}
					</div>
				)}
			</li>
		</ul>
	);
};

export default MenuItem;
