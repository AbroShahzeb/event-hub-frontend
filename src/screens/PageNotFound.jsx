import { useEffect } from "react";
import Logo from "../components/Logo";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

function PageNotFound() {
	useEffect(function () {
		document.title = "404 | Event Hub";
	}, []);

	const location = useLocation();

	return (
		<main className='flex items-center justify-center w-full relative p-6 min-h-screen'>
			<div className='absolute top-3 left-3'>
				<Logo />
			</div>

			<div className='grid gap-8 mt-8 w-full xs:w-[375px]'>
				<div>
					<div className='flex flex-col text-center gap-1'>
						<h2 className='text-heading-1 text-accent-light dark:text-accent-dark font-bold font-headings'>
							404
						</h2>
						<p className='font-normal text-body-big text-text-secondary-light dark:text-text-secondary-dark'>
							Oops! Wrong Turn. Page you request for doesn't exists.
						</p>
						<p className='font-normal text-body-big text-text-secondary-light dark:text-text-secondary-dark'>
							No match for{" "}
							<span className='text-primary-light dark:text-primary-dark font-bold'>
								{location.pathname}
							</span>
						</p>
					</div>
				</div>

				<Link
					to='/register'
					className='p-4 self-stretch flex items-center gap-2 justify-center rounded-primary bg-btn-accent-light dark:bg-btn-accent-dark hover:bg-btn-accent-hover-light dark:hover:bg-btn-accent-hover-dark text-body font-bold'
				>
					<Icon
						icon='flowbite:home-outline'
						fontSize={24}
						className='text-text-light dark:text-text-dark'
					/>
					<p>Back to Home</p>
				</Link>
			</div>
		</main>
	);
}

export default PageNotFound;
