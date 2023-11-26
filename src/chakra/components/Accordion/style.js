import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";
import { extendTheme } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  container: defineStyle({
    
  }),
});

// Defining a custom variant called outline
const outline = definePartsStyle((props) => {
  const { colorScheme: c } = props;
  return {
	  container: {
		border: 0,
		paddingBlock: '5px',
    },
    button: {
		color: "#38485C",
		padding: '12px 24px',
		border: '2px solid',
		borderColor: '#E6EBF0',
		borderRadius: '8px',
      _hover: {
		  color: "#007BC7",
		  borderColor: '#007BC7',
		  bg: 'white'
      },
      _focus: {
		  color: "#005387",
		  boxShadow: `0 0 0 4px #005387`,
      },
      _active: {
		  color: "white",
		  bg: '#007BC7',
      },
      _expanded: {
		  color: "white",
		  bg: '#007BC7',
		},
	
      fontFamily: "Nunito Variable",
    },
  };
});

const variants = {
  outline,
};

const size = {
  md: defineStyle({
    w: 5,
    h: 5,
  }),
};

const sizes = {
  md: definePartsStyle({
    icon: size.md,
  }),
};

export const accordionTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});