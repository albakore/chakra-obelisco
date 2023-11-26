import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const newInput = definePartsStyle({
	// define the part you're going to style
	field: {
		fontFamily: "Open Sans Variable", // change the font family
		color: '#38485C',
		padding: "13px 16px",
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

export const inputTheme = defineMultiStyleConfig({
	variants: {
		newInput
	},
	defaultProps: {
		variant: 'newInput',
	}
});
