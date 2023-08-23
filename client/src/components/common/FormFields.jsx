import { forwardRef } from 'react'

import {
	FormErrorMessage,
	FormControl,
	FormLabel,
	Input,
	Select,
	Checkbox,
	Textarea,
} from '@chakra-ui/react'

const input = forwardRef(({ name, label, errors, ...rest }, ref) => {
	return (
		<FormControl isInvalid={errors}>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Input name={name} id={name} {...rest} ref={ref} />

			<FormErrorMessage>{errors?.message}</FormErrorMessage>
		</FormControl>
	)
})

const select = forwardRef(({ name, label, errors, options, ...rest }, ref) => {
	return (
		<FormControl>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Select name={name} id={name} {...rest} ref={ref}>
				{options.map((option) => (
					<option key={option.value} value={option.label}>
						{option.label}
					</option>
				))}
			</Select>
		</FormControl>
	)
})

const color = forwardRef(({ name, label, errors, ...rest }, ref) => {
	return (
		<FormControl>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Input type="color" name={name} id={name} {...rest} ref={ref} w="100px" />
			<FormErrorMessage>{errors?.message}</FormErrorMessage>
		</FormControl>
	)
})

const checkbox = forwardRef(({ name, label, errors, ...rest }, ref) => {
	return (
		<FormControl>
			<Checkbox name={name} id={name} {...rest} ref={ref}>
				{label}
			</Checkbox>
			<FormErrorMessage>{errors?.message}</FormErrorMessage>
		</FormControl>
	)
})

const textarea = forwardRef(({ name, label, errors, ...rest }, ref) => {
	return (
		<FormControl>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Textarea name={name} id={name} {...rest} ref={ref} />
			<FormErrorMessage>{errors?.message}</FormErrorMessage>
		</FormControl>
	)
})

export default { input, select, color, checkbox, textarea }
