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
		await octokit
			.request("GET /orgs/sunyam-lexicon-2024/repos", {
				/* anonymous fetch for now*/
			})
			.then((response) => AssembleRepos(response.data))
			.catch(() => {
				GetLocalData()
			})
	}

	async function GetLocalData() {
		await fetch("repos.json")
			.then((response) => AssembleRepos(response.json()))
			.catch((error) => console.error("Could not fetch data", error))
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
