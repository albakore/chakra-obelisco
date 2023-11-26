'use client'
import '@fontsource-variable/open-sans';
import '@fontsource-variable/nunito';
import { extendTheme,defineStyle, defineStyleConfig  } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from './components/Button/style';
import { colors } from './colors';
import { fonts,fontSizes } from './typography';
import { Heading } from './components/Heading/style';
import { Alert } from './components/Alert/style';
import { menuTheme } from './components/Menu/style';
import { accordionTheme } from './components/Accordion/style';
import { badgeTheme } from './components/Badge/style';
import { modalTheme } from './components/Modal/style';
import { tooltipTheme } from './components/Tooltip/style';
import { inputTheme } from './components/Forms/Input/style';
import { selectTheme } from './components/Forms/Select/style';

const text = defineStyleConfig({
	baseStyle: {
    	color: '#38485C',
		fontFamily: 'Open Sans Variable, sans-serif',
	},
	fontSizes: {
		lg: {
			fontSize: '19px',
			fontWeight: 400,
			lineHeight: '28px',
			letterSpacing: '-0.19px'
		},
		base: {
			fontSize: '16px',
			fontWeight: 400,
			lineHeight: '24px'
		},
		sm: {
			fontSize: '13px',
			fontWeight: 400,
			lineHeight: '20px'
		},
	}
})




export const theme = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				
				fontFamily: 'Open Sans Variable, sans-serif',
				color : '#38485C'
			//   bg: 'gray.400',
			//   color: 'white',
			},
			// styles for the `a`
			p: {
				fontSize: '16px',
				fontWeight: 400,
				lineHeight: '24px'
			},
			small: {
				fontSize: '13px',
				fontWeight: 400,
				lineHeight: '20px'
			},
		  },
	},

	colors,

	fonts,
	fontSizes,
	components: {
		Heading,
		Text: text,
		Button,
		Alert,
		Menu: menuTheme,
		Accordion: accordionTheme,
		Badge: badgeTheme,
		Modal: modalTheme,
		Tooltip: tooltipTheme,
		Input: inputTheme,
		Select: selectTheme,
	}
})


export function Providers({ children }) {
  return (
    <CacheProvider>
		<ChakraProvider theme={theme}>
			{children}
		</ChakraProvider>
    </CacheProvider>
  )
}

