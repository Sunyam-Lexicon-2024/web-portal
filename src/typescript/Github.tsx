import { Grid } from "@mui/material"
import { Octokit } from "octokit"
import { OctokitResponse } from "@octokit/types"
import { useState, useEffect } from "react"
import Repo from "./Repo"

export default function Github() {
	const [repos, setRepos] = useState([])

	const octokit = new Octokit({})

	useEffect(() => {
		GetGithubRepos()
	}, [])

	async function GetGithubRepos() {
		let response = await octokit.request(
			"GET /orgs/sunyam-lexicon-2024/repos",
			{
				
			}
		)

		let repoData = await response.data

		AssembleRepos(repoData)
	}

	async function AssembleRepos(repoData: OctokitResponse<any, number>["data"]) {
	

		let repoElems = await repoData.map((repo: any, index: number) => {
			return (
				<Repo
					key={`Repo-${index}`}
					repoData={repo}
				/>
			)
		})
		setRepos(repoElems)
	}

	return (
		<Grid
			columns={3}
			container
			sx={{ position: "relative", top: 70 }}>
			{repos}
		</Grid>
	)
}
