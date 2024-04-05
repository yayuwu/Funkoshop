import { styled } from "../../themes/stitches.config"

export const Button = styled('a',{
    textDecoration: 'none',
    '&:hover': {
        cursor: 'pointer',
    },
    variants: {
        color: {
            dark: {
                backgroundColor : '$gray300',
                color: 'white',
                border: 'none',
                borderRadius: 20,
                padding: '10px 30px',
            },
            red: {
                backgroundColor : '$red400',
                color: 'white',
                border: 'none',
                padding: '10px 30px',
            },
        },
    },
  })