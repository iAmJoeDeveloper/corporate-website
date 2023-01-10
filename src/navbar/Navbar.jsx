function Navbar() {
	return (
		<>
			<nav className='min-w-full p-10 md:flex md:items-center md:justify-between bg-gray-900 text-white'>
				<div>
					<span className='text-2xl font-[Poppins] cursor-pointer'>protocol</span>
				</div>
				<input type='text' placeholder='Find something...' className='mr-24 p-1 rounded' />
				<ul className='md:flex md:items-center'>
					<li className='mx-4'>
						<a href='#'>API</a>
					</li>
					<li className='mx-4'>
						<a href='#'>Documentation</a>
					</li>
					<li className='mx-4'>
						<a href='#'>Support</a>
					</li>
					<li className='mx-4'>
						<a href='#'>Darkmode</a>
					</li>
					<li className='mx-4'>
						<a href='#'>Sign in</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navbar
