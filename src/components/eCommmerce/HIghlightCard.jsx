import React from 'react';

const HIghlightCard = ({
	MainIcon,
	value,
	description,
	rise,
	ArrowIcon,
	color,
}) => {
	return (
		<div className='p-5 bg-white h-fit rounded-sm shadow-md   '>
			<div className=' bg-slate-200 rounded-full size-14 flex items-center justify-center my-5'>
				<MainIcon size={30} />
			</div>
			<div className='flex gap-10 justify-between'>
				<div className='flex flex-col '>
					<h2 className='text-3xl font-extrabold'>{value}</h2>
					<p className='font-semibold'>{description}</p>
				</div>
				<div
					className={`flex items-end  ${
						color === true ? 'text-green-500' : 'text-blue-500'
					}`}>
					<span>{rise} </span>
					<ArrowIcon size={25} />
				</div>
			</div>
		</div>
	);
};

export default HIghlightCard;
