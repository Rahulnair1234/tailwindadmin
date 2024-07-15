import React, { useState } from 'react';

const ProFormLayout = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	return (
		<div className='flex flex-col p-2 px-5 w-full'>
			<div className='flex justify-between w-full h-20'>
				<h1 className='font-bold text-3xl w-1/3 '> Pro Form Layout</h1>
				<p className='font-medium  w-1/3 text-end '>
					Dashboard/ <span className='text-purple-600'>Pro Form Layout</span>{' '}
				</p>
			</div>
			<div className='grid grid-cols-2 space-x-10'>
				<div className='bg-white shadow-3 rounded-md  '>
					<h2 className='text-xl text-black p-5 border-b border-gray'>
						Contact Form 2
					</h2>
					<form
						action=''
						className='flex p-5 w-full flex-col text-black font-medium'>
						<div className='grid grid-cols-2  gap-x-5 w-full '>
							<div className='flex flex-col  gap-2  '>
								<label htmlFor='Firstname'>First name</label>
								<input
									className='border border-slate-300 rounded-sm  p-4 outline-none'
									type='text'
									placeholder='Enter your first name'
								/>
							</div>
							<div className='flex flex-col  gap-2 '>
								<label htmlFor='Lastname'>Last name</label>
								<input
									className='border border-slate-300 rounded-sm  p-4 outline-none'
									type='text'
									placeholder='Enter your last name'
								/>
							</div>
							<div className='flex flex-col  gap-2 '>
								<label htmlFor='Email'>Email</label>
								<input
									className='border border-slate-300 rounded-sm  p-4 outline-none'
									type='email'
									placeholder='yourmail@gmail.com'
								/>
							</div>
							<div className='flex flex-col  gap-2 '>
								<label htmlFor='phone'>Phone</label>
								<input
									className='border border-slate-300 rounded-sm  p-4 outline-none'
									type='number'
									placeholder='(+91) 1234-546-784'
								/>
							</div>
						</div>
						<div className='flex flex-col mt-5'>
							<h2 className='text-sm'>Select Option</h2>
							<div className='grid grid-cols-2 w-full gap-x-5'>
								<div className='flex space-x-2'>
									<input
										type='radio'
										name='field'
										id='Graphics'
									/>
									<label
										className='text-lg text-black font-medium'
										htmlFor='Graphics'>
										Graphics Design
									</label>
								</div>
								<div className='flex space-x-2'>
									<input
										type='radio'
										name='field'
										id='web'
									/>
									<label
										className='text-lg text-black font-medium'
										htmlFor='web'>
										Web Development
									</label>
								</div>
								<div className='flex space-x-2'>
									<input
										type='radio'
										name='field'
										id='logo'
									/>
									<label
										className='text-lg text-black font-medium'
										htmlFor='logo'>
										Logo Design
									</label>
								</div>
								<div className='flex space-x-2'>
									<input
										type='radio'
										name='field'
										id=''
									/>
									<label
										className='text-lg text-black font-medium'
										htmlFor='others'>
										Others
									</label>
								</div>
							</div>
						</div>
						<div className='flex flex-col my-5 gap-5'>
							<h3>Message</h3>
							<textarea
								name='message'
								id='message'
								className='p-5 rounded-sm outline-none border border-slate-200'
								rows={7}
								cols={10}
								placeholder='Type your message'></textarea>
						</div>

						<button className='bg-indigo-600 p-5 rounded-sm text-white text-lg'>
							Send Message
						</button>
					</form>
				</div>
				<div className='bg-white shadow-3 rounded-md '>
					<h2 className='text-xl text-black p-5 border-b border-gray'>
						Survey Form
					</h2>
					<form
						action=''
						className='flex p-5 w-full flex-col text-black font-medium'>
						<div className='grid grid-cols-1  gap-x-5 w-full '>
							<div className='flex flex-col  gap-2  '>
								<label htmlFor='full name'>Name</label>
								<input
									className='border border-slate-300 rounded-sm  p-4 outline-none'
									type='text'
									placeholder='Enter your full name'
								/>
							</div>
							<div className='flex flex-col  gap-2 '>
								<label htmlFor='Email'>Email</label>
								<input
									className='border border-slate-300 rounded-sm  p-4 outline-none'
									type='email'
									placeholder='Enter your email address'
								/>
							</div>
							<div className='flex flex-col  gap-2 '>
								<label htmlFor='Age'>Age</label>
								<input
									className='border border-slate-300 rounded-sm  p-4 outline-none'
									type='number'
									placeholder='Enter your age'
								/>
							</div>
							<div className='flex flex-col  gap-2 mt-5 '>
								<label htmlFor='subject'>Which option best describes you</label>
								<div
									className='group relative flex  w-full items-center justify-between gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-slate-100 '
									onClick={toggleDropdown}>
									<span className='flex gap-x-3'>Select your Subject</span>

									<span>{isDropdownOpen ? '▲' : '▼'}</span>
								</div>
							</div>
						</div>
						<div className='flex flex-col mt-5'>
							<h2 className=''>Would you recommend out site to a friend?</h2>
							<div className='grid grid-cols-1 w-full gap-x-5'>
								<div className='flex space-x-2'>
									<input
										type='radio'
										name='field'
										id='Yes'
									/>
									<label
										className='text-lg text-black font-medium'
										htmlFor='Yes'>
										Yes
									</label>
								</div>
								<div className='flex space-x-2'>
									<input
										type='radio'
										name='field'
										id='No'
									/>
									<label
										className='text-lg text-black font-medium'
										htmlFor='No'>
										No
									</label>
								</div>
								<div className='flex space-x-2'>
									<input
										type='radio'
										name='field'
										id='Maybe'
									/>
									<label
										className='text-lg text-black font-medium'
										htmlFor='Maybe'>
										Maybe
									</label>
								</div>
							</div>
						</div>
						<div className='flex flex-col my-5'>
							<h2 className=''>Which language and frameworks do you know?</h2>
							<div className='grid grid-cols-1 w-full gap-x-5'>
								<div className='flex space-x-2'>
									<input
										type='radio'
										name='field'
										id='Yes'
									/>
									<label
										className='text-lg text-black font-medium'
										htmlFor='Yes'>
										C
									</label>
								</div>
								<div className='flex space-x-2'>
									<input
										type='radio'
										name='field'
										id='No'
									/>
									<label
										className='text-lg text-black font-medium'
										htmlFor='No'>
										Nextjs
									</label>
								</div>
								<div className='flex space-x-2'>
									<input
										type='radio'
										name='field'
										id='Maybe'
									/>
									<label
										className='text-lg text-black font-medium'
										htmlFor='Maybe'>
										Java
									</label>
								</div>
							</div>
						</div>

						<button className='bg-indigo-600 p-5 rounded-sm text-white text-lg'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ProFormLayout;
