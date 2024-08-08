function FormInput({
	register,
	validations,
	errors,
	fieldName,
	label,
	type,
	trigger,
}) {
	return (
		<input
			{...register(fieldName, {
				required: label || fieldName + " is required",
			})}
			type={type}
			placeholder={`Enter ${label || fieldName}`}
			className={`p-4 rounded-primary bg-input-bg-light dark:bg-input-bg-dark border-[1px] border-input-border-light dark:border-input-border-dark flex items-center justify-center w-full text-body focus:outline-none focus:border-accent-light dark:focus:border-accent-dark text-inherit inp-animation ${
				errors[fieldName] && "focus:border-error"
			}`}
		/>
	);
}

export default FormInput;
