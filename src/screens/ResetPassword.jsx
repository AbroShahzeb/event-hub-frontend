import Logo from "../components/Logo";

import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";

function ResetPassword() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function handleRegister(data) {}

	return (
		<main className='flex items-center justify-center relative p-6 min-h-screen'>
			<div className='absolute top-3 left-3'>
				<Logo />
			</div>

			<div className='grid gap-8 mt-8 w-full xs:w-[375px]'>
				<div>
					<div className='flex flex-col gap-1'>
						<h2 className='text-heading-4 md:text-heading-3 font-bold font-headings'>
							Reset Password
						</h2>
						<p className='font-normal text-text-secondary dark:text-text-secondary-light'>
							Enter your email and we’ll send you new password in your email.
						</p>
					</div>
				</div>

				<form
					className='flex flex-col items-start self-stretch gap-4'
					onSubmit={handleSubmit(handleRegister)}
				>
					{/* Email Input */}
					<div className='self-stretch relative flex gap-1 flex-col'>
						<div className='relative'>
							<input
								type='text'
								placeholder='Enter email'
								className={`p-4 rounded-primary bg-input-bg-light dark:bg-input-bg-dark border-[1px]  flex items-center justify-center w-full text-body focus:outline-none text-inherit inp-animation ${
									errors?.email
										? "border-red-500"
										: "focus:border-accent-light dark:focus:border-accent-dark border-input-border-light dark:border-input-border-dark"
								}`}
								{...register("email", {
									required: "Email is required",
									validate: (value) =>
										isEmail(value) || "Please enter a valid email address",
								})}
							/>
							<p className='placeholder absolute top-0 -translate-y-1/2 left-3 text-sm p-[2px] px-2 bg-secondary-light dark:bg-secondary-dark  text-white'>
								Enter email
							</p>
						</div>
						{errors?.email && (
							<p className='text-end text-error text-xs'>
								{errors.email.message}
							</p>
						)}
					</div>

					<button className='p-4 self-stretch flex items-center justify-center rounded-primary bg-btn-accent-light dark:bg-btn-accent-dark hover:bg-btn-accent-hover-light dark:hover:bg-btn-accent-hover-dark text-body font-bold'>
						Reset Password
					</button>
				</form>
			</div>
		</main>
	);
}

export default ResetPassword;
