import * as yup from 'yup'

const formFields = [
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
		defaultValue: '123123',
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

export { formFields, validationSchema }
