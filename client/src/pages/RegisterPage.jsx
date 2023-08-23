import { Form } from '../components'

import * as yup from 'yup'

function RegisterPage() {
	const inputs = [
		{
			name: 'firstname',
			label: 'Firstname',
			placeholder: 'John',
		},

		{
			name: 'lastname',
			label: 'Lastname',
			placeholder: 'Doe',
		},

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

		{
			name: 'role',
			label: 'Role',
			type: 'select',
			options: [
				{ value: 'admin', label: 'Admin' },
				{ value: 'user', label: 'User' },
				{ value: 'guest', label: 'Guest' },
			],
			placeholder: 'Select a role',
		},

		{
			name: 'repeat-password',
			label: 'Repeat password',
			type: 'password',
			placeholder: '********',
		},
		{
			name: 'color',
			label: 'Color',
			type: 'color',
			placeholder: 'Select a color',
		},

		{
			name: 'accept',
			label: 'Aceptar terminos y condiciones',
			type: 'checkbox',
		},
		{
			name: 'description',
			label: 'Description',
			type: 'textarea',
			placeholder: 'Describe yourself',
		},
	]

	const validationSchema = yup.object().shape({
		firstname: yup.string().required('nombre obligatorio'),
		lastname: yup.string().required('apellido obligatorio'),
		username: yup.string().required('nombre usuario obligatorio'),
		password: yup
			.string()
			.required('Password obligatorio')
			.min(3, 'Minimo 3 caracteres para el password'),
		'repeat-password': yup
			.string()
			.required('Password obligatorio')
			.min(3, 'Minimo 3 caracteres para el password')
			.oneOf([yup.ref('password'), null], 'Passwords must match'),
	})

	const onSubmit = (data) => {
		console.log('LOGICA REGISTRO')
		console.log(data)
	}

	return (
		<Form
			heading="Registro usuarios"
			buttonLabel="Registrar"
			inputs={inputs}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		/>
	)
}
export default RegisterPage
