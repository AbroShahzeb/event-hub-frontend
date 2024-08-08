function FormLabel({ fieldName, label }) {
	return (
		<p className='placeholder absolute top-0 -translate-y-1/2 left-3 text-sm p-[2px] px-2 bg-secondary-light dark:bg-secondary-dark  text-white'>
			Enter {label || fieldName}
		</p>
	);
}

export default FormLabel;
