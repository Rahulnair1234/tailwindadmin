import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { CgShoppingBag } from 'react-icons/cg';
import HIghlightCard from './HIghlightCard';
import { FiUsers } from 'react-icons/fi';
import RevenueComponent from './RevenueComponent';
import ProfitComponent from './ProfitComponent';
const Ecommerce = () => {
	return (
		<div className='flex flex-col p-5 gap-10 w-full'>
			<div className='grid grid-cols-4 gap-x-14'>
				<HIghlightCard
					ArrowIcon={BiUpArrowAlt}
					MainIcon={FaRegEye}
					color={true}
					description={'Total Views'}
					rise={'0.43%'}
					value={'$3.456k'}
				/>
				<HIghlightCard
					ArrowIcon={BiUpArrowAlt}
					MainIcon={PiShoppingCartSimple}
					color={true}
					description={'Total Profit'}
					rise={'4.35%'}
					value={'$45.2k'}
				/>
				<HIghlightCard
					ArrowIcon={BiUpArrowAlt}
					MainIcon={CgShoppingBag}
					color={true}
					description={'Total Product'}
					rise={'2.59%'}
					value={'2450'}
				/>
				<HIghlightCard
					ArrowIcon={BiDownArrowAlt}
					MainIcon={FiUsers}
					color={false}
					description={'Total users'}
					rise={'0.95%'}
					value={'3456'}
				/>
			</div>
			<div className='grid grid-cols-7 gap-5'>
				<RevenueComponent />
				<ProfitComponent />
			</div>
		</div>
	);
};

export default Ecommerce;
