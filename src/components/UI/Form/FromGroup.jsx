import FormError from "./FormError";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";

function FormGroup({
	register,
	errors,
	fieldName,
	validations,
	label,
	type,
	trigger,
}) {
	return (
		<div className='self-stretch relative flex gap-1 flex-col'>
			<div className='relative'>
				<FormInput
					register={register}
					errors={errors}
					fieldName={fieldName}
					validations={validations}
					label={label}
					type={type}
				/>
				<FormLabel fieldName={fieldName} label={label} />
			</div>
		</div>
	);
}

export default FormGroup;
