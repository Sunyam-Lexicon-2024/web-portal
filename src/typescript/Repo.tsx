import { Card, CardContent, Grid } from "@mui/material"
import { useEffect, useState } from "react"

interface RepoProps {
	repoData: any
}

export default function Repo({ repoData }: RepoProps) {
	const [pages, setPages] = useState<string | null>(null)

	useEffect(() => {
		if (repoData.has_pages) {
			LoadPagesData()
		}
	}, [])

	async function LoadPagesData() {
		fetch("pages.json")
			.then((response) => response.json())
			.then((data) => setPages(data.html_url))
			.catch((error) => console.error("Error fetching JSON:", error))
	}

	let repoElem = () => {
		return (
			<Card sx={{ m: 2, p: 2 }}>
				<a href={repoData.html_url}>Link</a>
				<CardContent>Name: {repoData.name}</CardContent>
				{pages ? (
					<CardContent>
						<a href={pages}>Website</a>
					</CardContent>
				) : null}
			</Card>
		)
	}

	return <Grid item>{repoElem()}</Grid>
}
