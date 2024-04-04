import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme"
import Navigation from "./Navigation"
import Github from "./Github"
import Footer from "./Footer"

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navigation />
			<Github/>
			<Footer></Footer>
		</ThemeProvider>
	)
}
