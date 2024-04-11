import { Grid } from "@mui/material"
import { useState, useEffect, SetStateAction, Dispatch, ReactElement } from "react"
import Repo from "./Repo"

export default function Github()
{
	const [repos, setRepos] = useState([]) as [never[], Dispatch<SetStateAction<ReactElement[]>>]

	useEffect(() =>
	{
		GetGithubRepos()
	}, [])

	async function GetGithubRepos()
	{
		// TBD secure fetch with token from Azure Function Token Provider
		await fetch("web-portal/repositories.json")
			.then(async (response) => AssembleRepos(await response.json()))
			.catch(() =>
			{
				GetLocalData()
			})
	}

	async function GetLocalData()
	{
		await fetch("repositories.json")
			.then(async (response) => AssembleRepos(await response.json()))
			.catch((error) => console.error("Could not fetch data", error))
	}

	async function AssembleRepos(repoData: IRepositoryData[])
	{

		const repoElems = repoData.map((repo: IRepositoryData, index: number) =>
		{
			return (
				<Repo
					key={`Repo-${index}`}
					repository={repo.repository}
				/>
			)
		})

		setRepos(repoElems)
	}

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
