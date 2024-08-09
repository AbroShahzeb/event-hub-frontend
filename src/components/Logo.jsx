import logo from "../assets/logo.svg";

import { Link } from "react-router-dom";

function Logo() {
	return (
		<Link to='/' className='flex items-center justify-center'>
			<img src={logo} alt='Logo' className='w-12' />
		</Link>
	);
}

export default Logo;
