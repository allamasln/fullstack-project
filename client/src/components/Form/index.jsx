import { Button, Heading } from '@chakra-ui/react'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { getDefaultValues } from './helpers'

import fields from './fields'

const Form = ({
	heading,
	formFields,
	buttonLabel,
	onSubmit,
	validationSchema,
	defaultValues,
}) => {
	const {
		handleSubmit,
		control,
		setValue,
		clearErrors,
		formState: { errors },
	} = useForm({
		defaultValues: defaultValues || getDefaultValues(formFields),
		resolver: yupResolver(validationSchema),
	})
	console.log(errors)
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Heading as="h2">{heading}</Heading>

			{formFields.map(({ name, ...rest }) => {
				const InputForm = fields[rest.type] || fields.input

				if (rest.type === 'file') rest = { ...rest, setValue, clearErrors }

				return (
					<Controller
						key={name}
						control={control}
						name={name}
						render={({ field: { ref, ...field } }) => {
							return (
								<InputForm
									errors={errors[name]}
									name={name}
									{...rest}
									{...field}
								/>
							)
						}}
					/>
				)
			})}

			<Button mt={4} colorScheme="teal" type="submit">
				{buttonLabel}
			</Button>
		</form>
	)
}

export default Form
