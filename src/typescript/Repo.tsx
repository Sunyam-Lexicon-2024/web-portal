import { Card, CardContent, Grid } from "@mui/material"

interface RepoProps {
	repoData: any
}

export default function Repo({ repoData }: RepoProps) {
	if (repoData.has_pages) {
		console.log(repoData.has_pages.toString())
	}

	let repoElem = () => {
		return (
			<Card sx={{ m: 2, p: 2 }}>
				<a href={repoData.html_url}>Link</a>
				<CardContent>Name: {repoData.name}</CardContent>
				<CardContent></CardContent>
			</Card>
		)
	}

	return <Grid item>{repoElem()}</Grid>
}
