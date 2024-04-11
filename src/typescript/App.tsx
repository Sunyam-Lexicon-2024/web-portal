import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme"
import Navigation from "./Navigation"
import Github from "./Github"
import Footer from "./Footer"
import RepositoryFactory from "./RepositoryFactory"
import { useState } from "react"

const repoFactory = new RepositoryFactory()
const repoData = await repoFactory.GetGithubRepos() as RepoElement[]

export default function App()
{
	const [repos, setRepos] = useState(repoData)

	const updateFilter = (filterContent: string) =>
	{
		filterRepos(filterContent)
	}

	const filterRepos = (filterContent: string) =>
	{
		if (filterContent.length == 0)
		{
			setRepos(repoData)
		} else
		{
			const filteredRepoData = repoData.filter((r: RepoElement) =>
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
