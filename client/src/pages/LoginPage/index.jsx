import { Form } from '../../components'

import { formFields, validationSchema } from './form-fields'

function LoginPage() {
	const onSubmit = (data) => {
		console.log('LOGICA LOGIN')
		console.log(data)
	}

	return (
		<Form
			heading="Acceso usuarios"
			buttonLabel="Acceder"
			formFields={formFields}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		/>
	)
}
export default LoginPage
