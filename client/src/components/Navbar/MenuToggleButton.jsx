import { IconButton, Show } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function ColorModeToggleButton({ onToggle }) {
	return (
		<Show below="md">
			<IconButton
				icon={<HamburgerIcon />}
				onClick={onToggle}
				variant="solid"
				bg="background"
			/>
		</Show>
	)
}
export default ColorModeToggleButton
