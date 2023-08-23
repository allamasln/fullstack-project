import { Box, useBreakpointValue } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { Navbar } from '../components'

function Layout() {
	const paddingX = useBreakpointValue({ base: '16px', md: '80px' })
	const gap = useBreakpointValue({ base: '24px', md: '48px' })

	return (
		<Box
			sx={{
				'& > *': {
					paddingX,
				},
			}}
		>
			<Navbar />
			<Box as="main" mt="navbarH" pt={gap}>
				<Outlet />
			</Box>
		</Box>
	)
}
export default Layout
