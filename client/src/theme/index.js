import { extendTheme } from '@chakra-ui/react'

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

import styles from './styles'

import breakpoints from './foundations/breakpoints'
import typography from './foundations/typography'
import radii from './foundations/radii'

import Button from './components/button'

const theme = extendTheme({
	config,
	styles,
	breakpoints,
	radii,
	...typography,
	components: { Button },

	semanticTokens: {
		colors: {
			text: 'var(--text)',
			background: 'var(--background)',
			input: 'var(--input)',
			elements: 'var(--elements)',
		},
		sizes: {
			navbarH: 'var(--navbarH)',
		},
		space: {
			navbarH: 'var(--navbarH)',
		},
		shadows: {
			navbar: '0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
			button: '--var(shadow-button)',
		},
	},
})

export default theme
