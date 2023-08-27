import { useState } from 'react'

import {
	FormErrorMessage,
	FormControl,
	FormLabel,
	Input,
	Box,
	Text,
	Stack,
	Image,
} from '@chakra-ui/react'

import { useDropzone } from 'react-dropzone'

import { CreatableSelect, Select } from 'chakra-react-select'

const FieldWrapper = ({ name, label, errors, children }) => (
	<FormControl isInvalid={errors}>
		<FormLabel htmlFor={name}>{label}</FormLabel>
		{children}
		<FormErrorMessage>{errors?.message}</FormErrorMessage>
	</FormControl>
)

const InputField = ({ name, label, errors, value, ...rest }) => {
	return (
		<FieldWrapper errors={errors} name={name} label={label}>
			<Input id={name} {...rest} value={value || ''} />
		</FieldWrapper>
	)
}

const SelectField = ({ mode, name, label, errors, options, ...rest }) => {
	const SelectComponent = mode === 'creatable' ? CreatableSelect : Select
	const isMulti = mode !== 'simple'

	return (
		<FieldWrapper errors={errors} name={name} label={label}>
			<SelectComponent isMulti={isMulti} {...rest} options={options} />
		</FieldWrapper>
	)
}

const FileField = ({
	name,
	label,
	errors,
	onChange,
	value,
	setValue,
	clearErrors,
	...rest
}) => {
	const [preview, setPreview] = useState('')

	const { getRootProps, getInputProps, isDragActive, isDragReject } =
		useDropzone({
			multiple: false,
			accept: {
				'image/jpeg': ['.jpeg', '.jpg'],
				'image/png': ['.png'],
			},
			onDropAccepted: function (acceptedFiles) {
				setPreview(URL.createObjectURL(acceptedFiles[0]))
				setValue(name, acceptedFiles[0])
				clearErrors(name)
			},
		})

	return (
		<FieldWrapper errors={errors} name={name} label={label}>
			<Stack direction="row">
				<Box
					{...getRootProps()}
					lineHeight="100px"
					border={'1px dashed ' + (errors ? 'red' : 'gray')}
					w="100%"
				>
					<Input
						id={name}
						{...rest}
						{...getInputProps()}
						value={value?.filename}
						onChange={(e) => {
							onChange(e.target.files[0])
						}}
					/>

					<Text align="center" color="gray" fontSize="2rem">
						{!isDragActive
							? '+'
							: isDragReject
							? 'Bad type file'
							: 'Drop here...'}
					</Text>
				</Box>
				{preview && <Image src={preview} h="100px" width="30%" fit="cover" />}
			</Stack>
		</FieldWrapper>
	)
}

export default { input: InputField, select: SelectField, file: FileField }
