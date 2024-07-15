import React from 'react';
import BarChartComponent from './BarChartComponent';

const ProfitComponent = () => {
	return (
		<div className='col-span-3 bg-white p-5 h-fit'>
			<div className='col-span-12 rounded-sm  bg-white p-7.5  xl:col-span-4'>
				<div className='mb-4 justify-between gap-4 sm:flex'>
					<div>
						<h4 className='text-xl font-bold text-black '>Profit this week</h4>
					</div>
					<div>
						<div className='relative z-20 inline-block'>
							<select
								name='#'
								id='#'
								className='relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none'>
								<option value=''>This Week</option>
								<option value=''>Last Week</option>
							</select>
						</div>
					</div>
				</div>

				<div>
					<BarChartComponent />
				</div>
			</div>
		</div>
	);
};

export default ProfitComponent;
