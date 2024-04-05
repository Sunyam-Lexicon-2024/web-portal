import { Card, CardContent, Grid } from "@mui/material"
import { useEffect, useState } from "react"

export default function Repo({ repoData }: IRepoProps) {
	const [pagesURL, setPagesURL] = useState<string | null>(null)

	useEffect(() => {
		if (repoData.has_pages) {
			LoadPagesData()
		}
	}, [])

	async function LoadPagesData() {
		let data = (await fetch("pages.json")
			.then((response) => response.json())
			.catch((error) =>
				console.error("Error fetching JSON:", error)
			)) as IPagesProps[]

		let match = data.find((d) => {
			return d.html_url?.match(repoData.name)
		})

		if (match) setPagesURL(match.html_url)
	}

	let repoElem = () => {
		return (
			<Card sx={{ m: 1, p: 0, width: "90vw" }}>
				<CardContent sx={{ fontWeight: "bolder" }}>
					{repoData.name.replaceAll("-", " ").toUpperCase()}
				</CardContent>
				<CardContent>
					<a href={repoData.html_url}>Github Link</a>
				</CardContent>
				{pagesURL ? (
					<CardContent>
						<a href={pagesURL}>Website</a>
					</CardContent>
				) : null}
			</Card>
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
