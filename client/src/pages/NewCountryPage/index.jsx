import { Form } from '../../components'

import { formFields, validationSchema } from './form-fields'

function NewCountryPage() {
	const onSubmit = (data) => {
		// create new country
		console.log(data)
	}

	return (
		<>
			<Form
				heading="New Country"
				buttonLabel="Create Country"
				formFields={formFields}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			/>
		</>
	)
}
export default NewCountryPage
