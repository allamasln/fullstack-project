import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

function SearchBox({ query, onChange, placeholder }) {
	return (
		<Stack spacing={4} w={{ base: '100%', md: '400px' }}>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon />
				</InputLeftElement>
				<Input
					type="search"
					value={query}
					onChange={onChange}
					placeholder={placeholder}
				/>
			</InputGroup>
		</Stack>
	)
}
export default SearchBox
