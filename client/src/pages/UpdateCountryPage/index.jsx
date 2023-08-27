import { Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { getCountry } from '../../services/country-service'
import { useFetch } from '../../hooks'
import { Form } from '../../components'
import { formFields, validationSchema } from './form-fields'

function UpdateCountryPage() {
	const { countryId } = useParams()

	const [country = {}, isLoading] = useFetch(getCountry, countryId)
	console.log(country)
	const onSubmit = (data) => {
		console.log('Nuevo country')
		console.log(data)
	}

	if (isLoading) return <Spinner />

	return (
		<Form
			heading={`Edit Country "Argentina"`}
			buttonLabel="Create Country"
			formFields={formFields}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			defaultValues={country}
		/>
	)
}
export default UpdateCountryPage
