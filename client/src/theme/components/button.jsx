import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
	baseStyle: {
		fontWeight: 'normal',
		textTransform: 'uppercase',

		bg: 'elements',
	},

	variants: {
		default: {
			boxShadow: 'var(--shadow-button)',
			borderRadius: 'sm',
			minW: '96px',
			height: '28px',
			fontSize: { base: '12px', md: '14px' },
		},
		'with-icon': {
			borderRadius: { base: 'sm', md: 'lg' },
			minW: { base: '104px', md: '136px' },
			height: { base: '32px', md: '40px' },
			boxShadow: '0px 0px 7px 0px rgba(0, 0, 0, 0.29)',
			fontSize: { base: '14px', md: '16px' },
		},
		'without-borders': {
			padding: '0',
		},
	},

	defaultProps: {
		variant: 'default',
	},
})

export default Button
