import React from 'react';
import StackedAreaChart from './AreaChartComponent';

const RevenueComponent = () => {
	return (
		<div className='col-span-4 bg-white p-5'>
			<div className='col-span-12  pb-5 pt-7.5  sm:px-7.5 xl:col-span-8'>
				<div className='flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap'>
					<div className='flex w-full flex-wrap gap-3 sm:gap-5'>
						<div className='flex '>
							<span className='mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary'>
								<span className='block h-2.5 w-full max-w-2.5 rounded-full bg-primary'></span>
							</span>
							<div className='w-full'>
								<p className='font-semibold text-primary'>Total Revenue</p>
								<p className='text-sm font-medium'>12.04.2022 - 12.05.2022</p>
							</div>
						</div>
						<div className='flex '>
							<span className='mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary'>
								<span className='block h-2.5 w-full max-w-2.5 rounded-full bg-secondary'></span>
							</span>
							<div className='w-full'>
								<p className='font-semibold text-secondary'>Total Sales</p>
								<p className='text-sm font-medium'>12.04.2022 - 12.05.2022</p>
							</div>
						</div>
					</div>
					<div className='flex w-full max-w-45 justify-end'>
						<div className='inline-flex items-center rounded-md bg-whiter p-1.5 '>
							<button className='rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card '>
								Day
							</button>
							<button className='rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card '>
								Week
							</button>
							<button className='rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card '>
								Month
							</button>
						</div>
					</div>
				</div>
				<div>
					<StackedAreaChart />
				</div>
			</div>
		</div>
	);
};

export default RevenueComponent;
