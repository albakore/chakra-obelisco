import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
	color: '#38485C',
	fontWeight: 500,
	bg: '#F3F6F9',
	borderRadius: 'lg', // disable the border radius
	border: '1px solid',
	borderColor: '#505E70',
})

const sizes = {
    xl: defineStyle({
        fontSize: 'xl'
    })
}

const customVariant = defineStyle({
	borderColor: '#505E70',
	bg: '#F3F6F9',

  })
const customPrimary = defineStyle({
	bg: '#FCF9F5',
	borderColor: '#FFA82E',
  })
const customSecondary = defineStyle({
	bg: '#F3F6F9',
	borderColor: '#505E70',
  })
const customSuccess = defineStyle({
	bg: '#F5FCF8',
	borderColor: '#26874A',
  })
const customDanger = defineStyle({
	bg: '#FCF5F5',
	borderColor: '#C93B3B',

  })
const customWarning = defineStyle({
	bg: '#FCF9F5',
	borderColor: '#FFA82E',
  })
const customInfo = defineStyle({
	bg: '#F5F9FC',
	borderColor: '#007BC7',
  })

export const badgeTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants: {
    primary: customPrimary,
    secondary: customSecondary,
    success: customSuccess,
    danger: customDanger,
    info: customInfo,
    warning: customWarning,
  },
  defaultProps: {
    colorScheme: "green", // set the default color scheme to green
  },
})