import React from 'react'

const Headercopy = () => {
	return (
		<div>

			<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b text-sm py-2.5 sm:py-4 dark:bg-slate-900 dark:border-gray-700">
				<nav
					className="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
					aria-label="Global"
				>
					<div className="me-5 md:me-8">
						<a
							className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							href="#"
							aria-label="Brand"
						>
							CampusCollab
						</a>
					</div>
					<div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
						<div className="sm:hidden">
							<button
								type="button"
								className="inline-flex flex-shrink-0 justify-center items-center gap-2 size-[38px] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
							>
								<svg
									className="flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<circle cx={11} cy={11} r={8} />
									<path d="m21 21-4.3-4.3" />
								</svg>
							</button>
						</div>
						<div className="hidden sm:block">
							<label htmlFor="icon" className="sr-only">
								Search
							</label>
							<div className="relative">
								<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
									<svg
										className="flex-shrink-0 size-4 text-gray-500"
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<circle cx={11} cy={11} r={8} />
										<path d="m21 21-4.3-4.3" />
									</svg>
								</div>
								<input
									type="text"
									id="icon"
									name="icon"
									className="py-2 pe-4 ps-10 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
									placeholder="Search"
								/>
							</div>
						</div>
						<div className="flex flex-row items-center justify-end gap-2">
							<button
								type="button"
								className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							>
								<svg
									className="flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
									<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
								</svg>
							</button>
							<div
								className="hs-dropdown relative inline-flex"
								data-hs-dropdown-placement="bottom-right"
							>
								<button
									id="hs-dropdown-with-header"
									type="button"
									className="hs-dropdown-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								>
									<img
										className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-gray-800"
										src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
										alt="Image Description"
									/>
								</button>

							</div>
						</div>
					</div>
				</nav>
			</header>

			<main id="content" role="main">
				<nav
					className="sticky -top-px bg-white text-sm font-bold text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-6 md:pb-6 -mt-px dark:bg-slate-900 dark:border-gray-800 dark:shadow-slate-700/[.7]"
					aria-label="Jump links"
				>
					<div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900">
						<div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
							<a
								className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								href="#"
							>
								Home
							</a>
						</div>
						<div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
							<a
								className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								href="#"
							>
								Clubs
							</a>
						</div>
						<div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
							<a
								className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								href="#"
							>
								Projects
							</a>
						</div>
						<div className="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
							<a
								className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
								href="#"
							>
								Events
							</a>
						</div>
					</div>
				</nav>
			</main>

		</div>
	)
}

export default Headercopy