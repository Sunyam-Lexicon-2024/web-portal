import { Box, Card, CardContent } from "@mui/material"
import { Octokit } from "octokit"
import { useState, useEffect } from "react"

export default function Github() {
	const [repos, setRepos] = useState([])

	const octokit = new Octokit({})

	useEffect(() => {
		GetGithubRepos()
	}, [])

	async function GetGithubRepos() {
		let response = await octokit.request(
			"GET /orgs/sunyam-lexicon-2024/repos",
			{}
		)

		let repoData = await response.data

		let repoElems = await repoData.map((repo: any, index: number) => {
			return (
				<Card
					sx={{ m: 2, p: 2 }}
					key={`repo-${index}`}>
					<CardContent>Name: {repo.name}</CardContent>
					<CardContent>
						<a href={repo.html_url}>Link</a>
					</CardContent>
				</Card>
			)
		})
		setRepos(repoElems)
		console.log(repoElems)
	}

	return <Box sx={{ position: "relative", top: 50 }}>{repos}</Box>
}
