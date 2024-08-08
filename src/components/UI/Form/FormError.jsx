function FormError({ errors, fieldName }) {
	errors[fieldName] && (
		<p className='text-end text-error text-xs'>
			{errors[fieldName]["message"]}
		</p>
	);
}

export default FormError;
