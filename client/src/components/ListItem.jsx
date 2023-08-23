import { ListItem as ChakraListItem } from '@chakra-ui/react'

const ListItem = ({ label, children }) => (
	<ChakraListItem>
		<strong>{label}: </strong> {children}
	</ChakraListItem>
)

export default ListItem
