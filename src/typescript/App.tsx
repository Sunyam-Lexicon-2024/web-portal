import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme"
import Navigation from "./Navigation"
import Github from "./Github"
import Footer from "./Footer"
import RepositoryFactory from "./RepositoryFactory"
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"

const repoFactory = new RepositoryFactory()

export default function App()
{
	const [repos, setRepos] = useState([] as RepoElement[]) as [RepoElement[], Dispatch<SetStateAction<RepoElement[]>>]

	const repoData = useRef([] as RepoElement[])

	useEffect(() =>
	{
		async function getData()
		{
			repoData.current = await repoFactory.GetGithubRepos()
			setRepos(repoData.current)
		}
		getData()
	}, [])

	const updateFilter = (filterContent: string) =>
	{
		filterRepos(filterContent)
	}

	const filterRepos = (filterContent: string) =>
	{
		if (filterContent.length == 0)
		{
			setRepos(repoData.current)
		} else
		{
			const filteredRepoData = repoData.current.filter((r: RepoElement) =>
			{
				return r.props.repository.name.match(filterContent)
			})
			setRepos(filteredRepoData)
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navigation filterUpdate={(e: string) => updateFilter(e)} />
			<Github repos={repos} />
			<Footer></Footer>
		</ThemeProvider>
	)
}
