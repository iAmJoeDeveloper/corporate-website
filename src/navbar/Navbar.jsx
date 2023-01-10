function Navbar() {
	return (
		<>
			<nav className='min-w-full p-4 md:flex md:items-center md:justify-between bg-gray-900 text-white'>
				<div>
					<span className='text-1xl font-[Poppins] cursor-pointer'>PROTOCOL</span>
				</div>
				<button className='w-1/3 mr-24 p-1 bg-gray-700 rounded-2xl border border-gray-500'>
					<span className='text-neutral-400'>Find something...</span>
					<span className='text-neutral-400'>Ctrl K</span>
				</button>
				<ul className='md:flex md:items-center'>
					<li className='mx-4 '>
						<a href='#' className='text-sm'>
							API{' '}
						</a>
					</li>
					<li className='mx-4'>
						<a href='#' className='text-sm'>
							Documentation
						</a>
					</li>
					<li className='mx-4'>
						<a href='#' className='text-sm'>
							Support
						</a>
					</li>
					<li className='mx-4'>
						<a href='#' className='text-sm'>
							Darkmode
						</a>
					</li>

					<button className='px-3 py-1 rounded-full border border-teal-300 text-teal-300 text-sm font-semibold bg-emerald-900'>
						Sign in
					</button>
				</ul>
			</nav>
		</>
	)
}

export default Navbar
