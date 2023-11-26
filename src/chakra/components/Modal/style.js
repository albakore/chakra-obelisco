import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
	createMultiStyleConfigHelpers,
	defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle((props) => {
	const { colorScheme: c } = props;
	return {
		dialog: {
			borderRadius: "md",
			border:'2px solid',
			borderColor:'#E6EBF0',
			display: "flex",
			padding: '24px',
			flexDirection: 'column',
		
		},
		header: {
			fontFamily: "Nunito Variable",
			padding: '0 0 8px',
			
			letterSpacing: "-0.19px",
			fontWeight: 800,
			
			borderBottom: '1px solid',
			borderColor: '#E6EBF0',
		},
		body: {
			marginTop:'8px',
			padding: 0,
			fontFamily: 'Open Sans Variable',
			fontSize: '16px',
			fontWeight: 400,
			lineHeight: '24px',
		},
		footer: {
			
			p: 0,
			m: '10px 0 0 0',
		}
	};
});

const xl = defineStyle({
	px: "6",
	py: "0",
	fontSize: "xl",
});

const sm = defineStyle({
	fontSize: "sm",
	py: "2",
	pt: "8",
});

const sizes = {
	xl: definePartsStyle({ header: sm, dialog: xl }),
};

export const modalTheme = defineMultiStyleConfig({
	baseStyle,
	sizes,
	
});
