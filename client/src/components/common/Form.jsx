import { Button, Heading } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import fields from './FormFields'

const Form = ({
	heading,
	inputs,
	buttonLabel,
	onSubmit,
	validationSchema,
	defaultValues,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues,
		resolver: yupResolver(validationSchema),
	})

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Heading as="h2">{heading}</Heading>

			{inputs.map(({ name, ...rest }) => {
				const InputForm = fields[rest.type] || fields.input

				return (
					<InputForm
						key={name}
						{...register(name)}
						errors={errors[name]}
						{...rest}
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
