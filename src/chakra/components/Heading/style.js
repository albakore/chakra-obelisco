import {defineStyleConfig} from '@chakra-ui/react'

export const Heading = defineStyleConfig({
	baseStyle: {
    	color: '#38485C',
		fontFamily: 'Nunito Variable, sans-serif',
	},
	sizes: {
		'4xl': {
			fontSize: '37px',
			fontWeight: 700,
			lineHeight: '44px',
			letterSpacing: '-0.74px'
		},
		'3xl': {
			fontSize: '28px',
			fontWeight: 600,
			lineHeight: '34px',
			letterSpacing: '-0.56px'
		},
		'2xl': {
			fontSize: '21px',
			fontWeight: 600,
			lineHeight: '28px',
			letterSpacing: '-0.21px'
		},
		'xl': {
			fontSize: '19px',
			fontWeight: 700,
			lineHeight: '24px',
			letterSpacing: '-0.19px'
		},
		'lg': {
			fontSize: '17px',
			fontWeight: 600,
			lineHeight: '24px',
			letterSpacing: '-0.17px'
		},
		'md': {
			fontFamily: 'Open Sans Variable, sans-serif',
			fontSize: '16px',
			fontWeight: 700,
			lineHeight: '24px'
		},
	}
})