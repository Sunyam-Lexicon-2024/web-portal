import { Box } from "@mui/material"
import { theme } from "./theme"

const bgColor = theme.palette.primary.main
const linkColor = theme.palette.secondary.main
const year = new Date().getFullYear()

export default function Footer() {
	return (
		<Box
			component={"footer"}
			sx={{
				p: 1,
				display: "flex",
				alignItems: "center",
				position: "fixed",
				bottom: 0,
				backgroundColor: bgColor,
				width: "100vw",
			}}>
			<Box component={"span"}>
				Design by <a style={{textDecoration: "none", color: linkColor}} href="https://github.com/suny-am"> suny-am</a> {year}
			</Box>
		</Box>
	)
}
