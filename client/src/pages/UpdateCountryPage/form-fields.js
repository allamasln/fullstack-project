import { regions } from '../../constants'
import * as yup from 'yup'

const formFields = [
	{ name: 'name', label: 'Argentina', placeholder: 'Argentina' },

	{ name: 'capital', label: 'Capital', placeholder: 'Buenos Aires' },
	{
		name: 'region',
		label: 'Region',
		type: 'select',
		options: regions,
		placeholder: 'Select a region',
	},
]

const validationSchema = yup
	.object()
	.shape({
		name: yup.string().required('nombre obligatorio'),
		capital: yup.string().required('capital obligatorio'),
		region: yup
			.string()
			.oneOf(regions.map((region) => region.value))
			.required('region obligatorio'),
	})
	.required()

export { formFields, validationSchema }
