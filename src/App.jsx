import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./screens/Register";
import Login from "./screens/Login";
import ResetPassword from "./screens/ResetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomCloseButton from "./components/CustomClose";
import PasswordResetSuccess from "./screens/PasswordResetSuccess";
import PageNotFound from "./screens/PageNotFound";

function App() {
	return (
		<Router>
			<ToastContainer
				closeButton={CustomCloseButton}
				toastClassName={() =>
					"relative flex p-4 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 shadow-lg"
				}
			/>

			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/reset-password' element={<ResetPassword />} />
				<Route
					path='/password-reset-success'
					element={<PasswordResetSuccess />}
				/>
				<Route path='*' element={<PageNotFound />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
