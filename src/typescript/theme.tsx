import { createTheme } from "@mui/material"
import { red } from "@mui/material/colors"

export const theme = createTheme({
	palette: {
		primary: {
			main: red["A200"],
		},
		secondary: {
			main: red[100],
		},
	},
})
