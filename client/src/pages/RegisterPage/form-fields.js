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
	},
	{
		name: 'repeat-password',
		label: 'Repeat password',
		type: 'password',
		placeholder: '********',
	},
]

const validationSchema = yup.object().shape({
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

export { formFields, validationSchema }
