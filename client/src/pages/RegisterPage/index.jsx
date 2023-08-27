import { Form } from '../../components'

import { formFields, validationSchema } from './form-fields'

function RegisterPage() {
	const onSubmit = (data) => {
		console.log('LOGICA REGISTRO')
		console.log(data)
	}

	return (
		<Form
			heading="Registro usuarios"
			buttonLabel="Registrar"
			formFields={formFields}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		/>
	)
}
export default RegisterPage
