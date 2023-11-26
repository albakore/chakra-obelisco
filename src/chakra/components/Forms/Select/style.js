import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const newSelect = definePartsStyle({
	// define the part you're going to style
	field: {
		fontFamily: "Open Sans Variable", // change the font family
		color: '#38485C',
		border: "2px solid #E6EBF0",
		borderRadius: "8px",
		_focus: {
			boxShadow: '0 0 0 4px #005387',
		},
		_invalid: {
			borderColor: '#C93B3B',
		},
		_valid: {
			borderColor: '#26874A',
		},
	},
});

export const selectTheme = defineMultiStyleConfig({
	variants: {
		newSelect
	},
	defaultProps: {
		variant: 'newSelect',
	}
});
