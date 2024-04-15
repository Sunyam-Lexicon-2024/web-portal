import { Grid } from "@mui/material"

export default function Github({ repos })
{
	return (
		<Grid
			columns={3}
			spacing={2}
			container
			sx={{ position: "relative", mt: 10, mb: 10 }}>
			{repos}
		</Grid>
	)
}
