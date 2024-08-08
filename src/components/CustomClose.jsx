function CustomCloseButton({ closeToast }) {
	return (
		<button
			className='text-text-light dark:text-text-dark hover:opacity-90'
			onClick={closeToast}
		>
			✖
		</button>
	);
}

export default CustomCloseButton;
