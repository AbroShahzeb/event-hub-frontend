import Logo from "../components/Logo";
import { Icon } from "@iconify/react";

import { useEffect } from "react";

function PasswordResetSuccess() {
	useEffect(function () {
		document.title = "Password Reset Successfull | Event Hub";
	}, []);

	return (
		<main className='flex items-center justify-center relative p-6 min-h-screen'>
			<div className='absolute top-3 left-3'>
				<Logo />
			</div>

			<div className='grid gap-8 mt-8 w-full xs:w-[375px]'>
				<div>
					<div className='flex flex-col text-center gap-1'>
						<h2 className='text-heading-4 md:text-heading-3 font-bold font-headings'>
							Password Reset Successfully
						</h2>
						<p className='font-normal text-body-big leading-6 text-text-secondary-light dark:text-text-secondary-dark'>
							We have sent you new password to your provided email, you can
							login using that now and also change it to whatever you want.
						</p>
					</div>
				</div>

				<button className='p-4 self-stretch flex items-center gap-2 justify-center rounded-primary bg-btn-accent-light dark:bg-btn-accent-dark hover:bg-btn-accent-hover-light dark:hover:bg-btn-accent-hover-dark text-body font-bold'>
					<Icon
						icon='flowbite:home-outline'
						fontSize={24}
						className='text-text-light dark:text-text-dark'
					/>
					<p>Back to Home</p>
				</button>
			</div>
		</main>
	);
}

export default PasswordResetSuccess;
