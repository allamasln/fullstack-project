import { mode } from '@chakra-ui/theme-tools'

const styles = {
	global: (props) => ({
		':root': {
			'--text': mode('hsl(200, 15%, 8%)', 'hsl(0, 0%, 100%)')(props),
			'--background': mode('hsl(0, 0%, 98%)', 'hsl(207, 26%, 17%)')(props),
			'--input': mode('hsl(0, 0%, 52%)', 'red')(props),
			'--elements': mode('hsl(0, 0%, 100%)', 'hsl(209, 23%, 22%)')(props),
			'--navbarH': '80px',
			'--shadow-button': mode(
				'0px 0px 4px 1px rgba(0, 0, 0, 0.10)',
				'0px 0px 4px 1px rgba(17, 21, 23, 0.25)'
			)(props),
		},
		body: {
			color: 'var(--text)',
			bg: 'var(--background)',
			paddingBottom: '6rem',
		},
	}),
}

export default styles
