import { NavLink } from 'react-router-dom'
import { Stack, Show, Collapse } from '@chakra-ui/react'

const Menu = () => (
	<Stack
		as="nav"
		direction={{ base: 'column', md: 'row' }}
		align="center"
		pb={{ base: 4, md: 0 }}
		sx={{
			'.active': {
				fontWeight: 'bold',
			},
		}}
	>
		<NavLink to="/signin">Login</NavLink>
		<NavLink to="/signup">Register</NavLink>
	</Stack>
)

const HorizontalMenu = () => (
	<Show above="md">
		<Menu />
	</Show>
)

const VerticalMenu = ({ isOpen }) => (
	<Show below="md">
		<Collapse in={isOpen} animateOpacity>
			<Menu />
		</Collapse>
	</Show>
)

export { HorizontalMenu, VerticalMenu }
