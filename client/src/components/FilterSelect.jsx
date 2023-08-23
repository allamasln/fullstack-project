import { Select } from '@chakra-ui/react'

const FilterBox = ({ selectedOption, onChange, placeholder, options }) => (
	<Select
		w="200px"
		placeholder={placeholder}
		onChange={onChange}
		defaultValue={selectedOption}
	>
		{options.map((option) => (
			<option key={option.value} value={option.value}>
				{option.label}
			</option>
		))}
	</Select>
)

export default FilterBox
