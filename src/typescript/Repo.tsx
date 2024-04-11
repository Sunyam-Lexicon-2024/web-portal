import { Box, Button, Card, CardContent, Grid } from "@mui/material"
import { theme } from "./theme"

const linkColor = theme.palette.secondary.main

const dateTimeOptions = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", } as DateTimeFormatOptions

export default function Repo({ repository }: IRepositoryData)
{
	const formatDiskUsage = (diskUsage: number) =>
	{
		if (diskUsage / 1000 > 1)
		{
			return (repository.diskUsage / 1000) + " MB"
		}
		return diskUsage + " KB"
	}

	console.debug(repository.diskUsage / 1000 > 1)

	const repoElem = () =>
	{
		return (
			<Card sx={{ m: 1, p: 0, width: "90vw" }}>
				<CardContent sx={{ fontWeight: "bolder" }}>
					{repository.name.replaceAll("-", " ").toUpperCase()}
				</CardContent>
				<CardContent>
					{repository.description}
				</CardContent>
				<CardContent>
					<span>
						<strong>Last updated:{" "}</strong>
						{new Date(repository.pushedAt).toLocaleDateString("en-US", dateTimeOptions)}
					</span>
				</CardContent>
				<CardContent>
					<span>
						<strong>Disk usage:{" "}</strong>
						{formatDiskUsage(repository.diskUsage)}
					</span>
				</CardContent>
				<Box sx={{ display: "flex" }}>
					<CardContent>
						<Button variant="contained">
							<a style={{ textDecoration: "none", color: linkColor }} href={repository.url}>Github Link</a>
						</Button>
					</CardContent>
					{repository.homepageUrl ? (
						<CardContent>
							<Button variant="contained">
								<a style={{ textDecoration: "none", color: linkColor }} href={repository.homepageUrl}>Website</a>
							</Button>
						</CardContent>
					) : null}
				</Box>
			</Card >
		)
	}

	return (
		<Grid
			item
			sm={3}
			md={1}
			sx={{ display: "flex", justifyContent: "center" }}>
			{repoElem()}
		</Grid>
	)
}
