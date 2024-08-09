import Logo from "../components/Logo";
import { Icon } from "@iconify/react";

import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import { Link } from "react-router-dom";

import { useEffect } from "react";

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(function () {
		document.title = "Login | Event Hub";
	}, []);

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
							Login to Event Hub
						</h2>
						<p className='font-normal text-body-big text-text-secondary-light dark:text-text-secondary-dark'>
							Welcome back, login and see what happened in your absnece
						</p>
					</div>
				</div>

				<div className='px-4 py-3 text-[1rem] leading-normal font-normal flex gap-4 self-stretch items-center justify-center border-[1px] border-input-border-light dark:border-input-border-dark rounded-primary cursor-pointer hover:bg-input-border-light dark:hover:bg-input-border-dark transition-all'>
					<Icon icon='devicon:google' fontSize={24} />
					<span>Continue with Google</span>
				</div>

				<div className="text-sm text-text-secondary-light dark:text-text-secondary-dark before:contents-[''] before:w-full before:h-[1px] before:bg-text-secondary-light before:dark:bg-text-secondary-dark after:contents-[''] after:w-full after:h-[1px] after:bg-text-secondary-light after:dark:bg-text-secondary-dark flex items-center gap-1">
					or
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

					{/* Password Input */}
					<div className='self-stretch relative flex gap-1 flex-col'>
						<div className='relative'>
							<input
								type='password'
								placeholder='Enter password'
								className={`p-4 rounded-primary bg-input-bg-light dark:bg-input-bg-dark border-[1px]  flex items-center justify-center w-full text-body focus:outline-none  text-inherit inp-animation ${
									errors?.password
										? "border-red-500"
										: "focus:border-accent-light dark:focus:border-accent-dark border-input-border-light dark:border-input-border-dark"
								}`}
								{...register("password", {
									required: "Password is required",
								})}
							/>
							<p className='placeholder absolute top-0 -translate-y-1/2 left-3 text-sm p-[2px] px-2 bg-secondary-light dark:bg-secondary-dark  text-white'>
								Enter password
							</p>
						</div>
						{errors?.password && (
							<p className='text-end text-error text-xs'>
								{errors.password.message}
							</p>
						)}
					</div>

					<button className='p-4 self-stretch flex items-center justify-center rounded-primary bg-btn-accent-light dark:bg-btn-accent-dark hover:bg-btn-accent-hover-light dark:hover:bg-btn-accent-hover-dark text-body font-bold'>
						Login
					</button>

					{/* Other input fields here... */}
				</form>

				<div className='text-body leading-normal self-stretch text-center flex flex-col gap-4'>
					<Link
						className='font-bold text-link-light dark:text-link-dark'
						to='/reset-password'
					>
						Forgot Password?
					</Link>
					<p>
						Not a member?{" "}
						<Link
							className='font-bold text-link-light dark:text-link-dark'
							to='/register'
						>
							Register
						</Link>
					</p>
				</div>
			</div>
		</main>
	);
}

export default Login;
