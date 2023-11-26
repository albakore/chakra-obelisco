import { extendTheme, defineStyle, defineStyleConfig, use } from '@chakra-ui/react'

const buttonPrimary = props => {
	const { colorScheme: c, isDisabled: disabled } = props
	return {
		color: c == 'primary' ? `#38485C` :  c == 'link' ? `#007BC7`: 'white',
		_hover: {
			background: !disabled,
			boxShadow: !disabled && `0 0 0 4px var(--chakra-colors-${c}-500);`,
		},
		_focus: {
			background: !disabled,
			boxShadow: !disabled &&  `0 0 0 4px #005387`,
		}
			
	}
	
	
}

const buttonPrimaryOutline = props => {
	const {colorScheme: c} = props
	return {
		borderColor: c == 'primary' ? `${c}.500` : c == 'link' ? `${c}.main` : `${c}.500`,
		color: c == 'primary' ? `#38485C` : c == 'link' ? `${c}.main` : `${c}.500`,
		border: '2px solid',
		_hover: {
			bg: `${c}.500`,
			color: c == 'primary' ? `#38485C` : c == 'link' ? `${c}.main` : `white`,
			boxShadow: c == 'link' ? `0 0 0 4px var(--chakra-colors-${c}-main);` : `0 0 0 4px var(--chakra-colors-${c}-500);`,
		},
		_focus: {
			boxShadow: `0 0 0 4px #005387`,
		},

	}
}

const buttonDisabled = {
	color: '#9EAAB8',
	opacity: '1.0',
	bg: '#E6EBF0',
	_hover: {
		background: '#E6EBF0',
	},
	_focus: {
		background: '#E6EBF0',
	},
	_active: {
		background: '#E6EBF0',
	},
	_disabled: {
		opacity: '1.0',
	},
}

export const Button = defineStyleConfig({
	baseStyle: {
		fontFamily: 'Nunito Variable, sans-serif',
		textColor: '#38485C',
		fontWeight: 700,
		borderRadius: '8px',
	},
	variants: {
		solid: buttonPrimary ,
		outline: buttonPrimaryOutline,
		disabled: buttonDisabled
	},
	defaultProps: {
		variant: 'solid',
		colorScheme: 'primary'
	}
	
	
})

