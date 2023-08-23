import { HStack, Button } from '@chakra-ui/react'
import { range } from 'lodash'

import { Link } from 'react-router-dom'

function Pagination({ pageSize, itemCount, currentPage }) {
	const pageCount = Math.ceil(itemCount / pageSize)
	const pages = range(1, pageCount + 1)

	return (
		<HStack direction="row" spacing={4} align="center">
			{pages.map((page) => (
				<Button
					variant="solid"
					key={page}
					as={Link}
					to={`?page=${page}`}
					isActive={page === currentPage}
				>
					{page}
				</Button>
			))}
		</HStack>
	)
}
export default Pagination
