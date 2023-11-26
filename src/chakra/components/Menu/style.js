import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
		display: 'inline-flex',
		padding: '8px 12px',
		alignItems: 'center',
		gap: '4px',
		color: '#38485C',
		border: '2px solid #E6EBF0',
		borderRadius: '8px',
		
    _hover: {
		borderColor: '#007BC7',
		color: '#007BC7',
		textDecorationLine: 'underline',
    },
    _focus: {
		boxShadow: `0 0 0 4px #005387`,
    },
	_active: {
		bg: '#007BC7',
		borderColor: '#007BC7',
		color : 'white',
		boxShadow: `0 0 0 4px #005387`,
    },
  },
  list: {
	  // this will style the MenuList component
	  padding: 0,
    borderRadius: '.5rem',
    border: 'none',
    boxShadow: '0 0 0 2px #e6ebf0',
  },
  item: {
    // this will style the MenuItem and MenuItemOption components

		color: '#38485C',
    borderRadius: '8px',
    border: '2px solid',
    borderColor: 'transparent',
	  padding: '13px 12px',
    _hover: {
		bg: 'white',
      color: '#007BC7',
      borderColor: '#007BC7',
		
    },

  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 'wider',
    opacity: '0.7',
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: '0.8',
    fontFamily: 'Open Sans Variable',
    fontSize: 'sm',
    letterSpacing: 'tighter',
    pl: '4',
  },
  divider: {
    // this will style the MenuDivider component
    my: '4',
    borderColor: 'white',
    borderBottom: '2px dotted',
  },
})
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle })