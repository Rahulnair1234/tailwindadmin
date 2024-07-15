import React from 'react';
import logo from './assets/images/logo.svg';
import MenuItem from './MenuItem';
import { RxDashboard } from 'react-icons/rx';
import { IoCalendarOutline } from 'react-icons/io5';
import { FiUsers } from 'react-icons/fi';
import { BsListTask, BsMailbox } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa6';
import { FaTable } from 'react-icons/fa';
import { RiPagesLine } from 'react-icons/ri';
import { CiInboxIn } from 'react-icons/ci';
import { TbFileInvoice } from 'react-icons/tb';
import { FaChartBar } from 'react-icons/fa';
import { SiCodeblocks } from 'react-icons/si';
import { IoLogInSharp } from 'react-icons/io5';

const Sidebar = () => {
	return (
		<div className='bg-blue-950 min-h-screen w-[20%] text-white'>
			<div className='sticky top-0 z-10'>
				<div className='flex items-center p-5'>
					<img
						src={logo}
						alt='logo'
						className='w-[75%] h-[10%]'
					/>
				</div>
				<nav>
					<ul className='pl-7 cursor-pointer'></ul>
				</nav>
				<div>
					<h3 className='mb-4 ml-4 text-base font-medium text-bodydark2'>
						Menu
					</h3>
					<MenuItem
						title={'Dashboard'}
						drop={true}
						Icon={RxDashboard}
						items={[
							{ name: 'eCommerce', url: '/' },
							{ name: 'Analytics', url: '/' },
							{ name: 'Marketing', url: '#' },
							{ name: 'CRM', url: '#' },
							{ name: 'Stocks', url: '#' },
						]}
					/>
					<MenuItem
						title={'Calendar'}
						drop={false}
						Icon={IoCalendarOutline}
					/>
					<MenuItem
						title={'Profile'}
						drop={false}
						Icon={FiUsers}
					/>
					<MenuItem
						title={'Task'}
						drop={true}
						Icon={BsListTask}
					/>
					<MenuItem
						title={'Forms'}
						drop={true}
						Icon={FaWpforms}
						items={[
							{ name: 'Form Elements', url: '/proformlayout' },
							{ name: 'Pro Form Element', url: '/proformlayout' },
							{ name: 'Form Layout', url: '/proformlayout' },
							{ name: 'Pro Form Layout', url: '/proformlayout' },
						]}
					/>
					<MenuItem
						title={'Tables'}
						drop={false}
						Icon={FaTable}
					/>
					<MenuItem
						title={'Pages'}
						drop={true}
						Icon={RiPagesLine}
					/>
				</div>
				<div>
					<h3 className='mb-4 ml-4 text-base font-medium text-bodydark2'>
						SUPPORT
					</h3>
					<MenuItem
						title={'Messages'}
						drop={false}
						Icon={BsMailbox}
					/>
					<MenuItem
						title={'Inbox'}
						drop={false}
						Icon={CiInboxIn}
					/>
					<MenuItem
						title={'Invoice'}
						drop={false}
						Icon={TbFileInvoice}
					/>
				</div>
				<div>
					<h3 className='mb-4 ml-4 text-base font-medium text-bodydark2'>
						OTHERS
					</h3>
					<MenuItem
						title={'Chart'}
						drop={true}
						Icon={FaChartBar}
					/>
					<MenuItem
						title={'UI Elements'}
						drop={true}
						Icon={SiCodeblocks}
					/>
					<MenuItem
						title={'Authentication'}
						drop={true}
						Icon={IoLogInSharp}
					/>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
