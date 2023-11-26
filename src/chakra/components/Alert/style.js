import { alertAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(parts.keys);
  

const newStatus = {
	error: {
		border: "2px solid",
		borderRadius: '8px',
		borderColor: '#C93B3B',
		bg: '#FCF5F5',
		padding: '16px 24px',
		display: 'flex',
		alignItems: 'flex-start',
		gap: '12px',
	},
	success: {
		border: "2px solid #26874A",
		borderRadius: '8px',
		borderColor: '#26874A',
		bg: '#F5FCF8',
		padding: '16px 24px',
		display: 'flex',
		alignItems: 'flex-start',
		gap: '12px',
	},
	warning: {
		border: "2px solid ",
		borderRadius: '8px',
		borderColor: '#FFA82E',
		bg: '#FCF9F5',
		padding: '16px 24px',
		display: 'flex',
		alignItems: 'flex-start',
		gap: '12px',
	},
	info: {
		border: "2px solid ",
		borderRadius: '8px',
		borderColor: '#007BC7',
		bg: '#F5F9FC',
		padding: '16px 24px',
		display: 'flex',
		alignItems: 'flex-start',
		gap: '12px',
	},
}

// Defining a custom variant called mono
const mono = definePartsStyle((props) => {
	const { status, colorScheme } = props;
  
	return {
	  container: newStatus[status],
	  title: { fontFamily: "Open Sans Variable" },
	  description: {
		fontFamily: "Open Sans Variable",
	  },
	};
  });

  const variants = {
	mono,
  };

export const Alert = defineMultiStyleConfig({
	baseStyle: {
		fontFamily: 'Nunito Variable, sans-serif',
		textColor: '#38485C',
		fontWeight: 700,
		border: '2px solid',
		borderColor: 'black',
		
	},
	variants,
	defaultProps: {
		variant: "mono",
		colorScheme: "blue",
	  },
	
	
})

