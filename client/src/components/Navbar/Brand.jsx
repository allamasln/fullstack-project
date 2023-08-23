import { Link } from 'react-router-dom'
import { Heading } from '@chakra-ui/react'

function Brand() {
	return (
		<Heading as="h1" fontSize={{ base: '14px', md: '24px' }} noOfLines={1}>
			<Link to="/">Where in the world?</Link>
		</Heading>
	)
}
export default Brand
