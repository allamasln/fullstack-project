import {
	Heading,
	HStack,
	Spacer,
	VStack,
	Collapse,
	useDisclosure,
} from '@chakra-ui/react'

import ColorModeToggleButton from './ColorModeToggleButton'
import MenuToggleButton from './MenuToggleButton'
import { HorizontalMenu, VerticalMenu } from './Menu'
import Brand from './Brand'

function Navbar() {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<VStack
			as="header"
			bg="elements"
			pos="fixed"
			w="100%"
			top="0"
			boxShadow="navbar"
			zIndex="1"
		>
			<HStack h="navbarH" w="100%">
				<HStack>
					<Brand />

					<HorizontalMenu />
				</HStack>
				<Spacer />
				<ColorModeToggleButton />
				<MenuToggleButton onToggle={onToggle} />
			</HStack>

			<VerticalMenu isOpen={isOpen} />
		</VStack>
	)
}
export default Navbar
