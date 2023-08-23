import { Form } from '../components'

import * as yup from 'yup'

function LoginPage() {
	const inputs = [
		{
			name: 'username',
			label: 'Username',
			placeholder: 'John Doe',
		},
		{
			name: 'password',
			label: 'Password',
			type: 'password',
			placeholder: '********',
		},
	]

	const validationSchema = yup
		.object()
		.shape({
			username: yup.string().required('nombre usuario obligatorio'),
			password: yup
				.string()
				.required('Password obligatorio')
				.min(3, 'Minimo 3 caracteres para el password'),
		})
		.required()

	const onSubmit = (data) => {
		console.log('LOGICA LOGIN')
		console.log(data)
	}

	return (
		<Form
			heading="Acceso usuarios"
			buttonLabel="Acceder"
			inputs={inputs}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		/>
	)
}
export default LoginPage
