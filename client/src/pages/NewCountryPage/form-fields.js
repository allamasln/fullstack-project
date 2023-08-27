import { regions } from '../../constants'
import * as yup from 'yup'

const formFields = [
	{ name: 'name', label: 'Argentina', placeholder: 'Argentina' },
	{ name: 'nativeName', label: 'Native Name', placeholder: 'Native Name' },
	{ name: 'capital', label: 'Capital', placeholder: 'Buenos Aires' },
	{
		name: 'population',
		label: 'population',
		placeholder: 'Population',
	},
	{
		name: 'region',
		label: 'Region',
		type: 'select',
		mode: 'simple',
		options: regions,
		placeholder: 'Select a region',
	},
	{
		name: 'subregion',
		label: 'Subregion',
		placeholder: 'Subregion',
	},
	{
		name: 'top-level-domain',
		label: 'Top Level Domain',
		type: 'select',
		mode: 'creatable',
	},
	{
		name: 'currencies',
		label: 'Currencies',
		type: 'select',
		mode: 'creatable',
	},
	{
		name: 'languages',
		label: 'Languages',
		type: 'select',
		mode: 'creatable',
	},
	{
		name: 'borders',
		label: 'Border Countries',
		type: 'select',
		mode: 'multiple',
		options: regions,
	},
	{
		name: 'flag',
		label: 'Flag',
		type: 'file',
	},
]

const validationSchema = yup
	.object()
	.shape({
		name: yup.string().required('nombre obligatorio'),
		nativeName: yup.string().required('nombre nativo obligatorio'),
		capital: yup.string().required('capital obligatorio'),
		region: yup.object().nullable().required(),
		currencies: yup.array().nullable().required(),
		population: yup.number().required('población obligatoria'),
		languages: yup.array().nullable().required(),
		flag: yup.mixed().required('flag obligarioa'),
	})
	.required()

export { formFields, validationSchema }
