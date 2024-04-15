import { Box, Button, Card, CardContent, Grid } from "@mui/material"
import { theme } from "./theme"

const linkColor = theme.palette.secondary.main

const dateTimeOptions = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", } as DateTimeFormatOptions

export default function Repo({ name, description, url, pushedAt, homepageUrl, diskUsage, commitTotal }: IRepositoryData)
{
	const formatDiskUsage = (diskUsage: number) =>
	{
		if (diskUsage / 1000 > 1)
		{
			return (diskUsage / 1000) + " MB"
		}
		return diskUsage + " KB"
	}

	const repoElem = () =>
	{
		return (
			<Card sx={{ m: 1, p: 0, width: "90vw" }}>
				<CardContent sx={{ fontWeight: "bolder" }}>
					{name.replaceAll("-", " ").toUpperCase()}
				</CardContent>
				<CardContent>
					{description}
				</CardContent>
				<CardContent>
					<span>
						<strong>Last updated:{" "}</strong>
						{new Date(pushedAt).toLocaleDateString("en-US", dateTimeOptions)}
					</span>
				</CardContent>
				<CardContent>
					<span>
						<strong>Commit count:{" "}</strong>
						{commitTotal}
					</span>
				</CardContent>
				<CardContent>
					<span>
						<strong>Disk usage:{" "}</strong>
						{formatDiskUsage(diskUsage)}
					</span>
				</CardContent>
				<Box sx={{ display: "flex" }}>
					<CardContent>
						<Button variant="contained">
							<a style={{ textDecoration: "none", color: linkColor }} href={url}>Github Link</a>
						</Button>
					</CardContent>
					{homepageUrl ? (
						<CardContent>
							<Button variant="contained">
								<a style={{ textDecoration: "none", color: linkColor }} href={homepageUrl}>Website</a>
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
