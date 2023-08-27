import { Button, useColorMode, useBreakpointValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function ColorModeToggleButton() {
	const { colorMode, toggleColorMode } = useColorMode()

	const isMobile = useBreakpointValue({ base: true, md: false })
	const fontSize = useBreakpointValue({ base: '12px', md: '16px' })

	const theme = {
		icon: colorMode === 'light' ? <MoonIcon /> : <SunIcon />,
		label: colorMode === 'light' ? 'Dark' : 'Light',
	}

	return (
		<Button
			leftIcon={theme.icon}
			onClick={toggleColorMode}
			iconSpacing={isMobile ? '0' : '2'}
			fontSize={fontSize}
			variant="without-borders"
		>
			{!isMobile && theme.label + ' Mode'}
		</Button>
	)
}
export default ColorModeToggleButton
