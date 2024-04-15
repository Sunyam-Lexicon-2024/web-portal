import { CssBaseline, Skeleton, Grid } from "@mui/material"
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
				return r.props.name.match(filterContent)
			})
			setRepos(filteredRepoData)
		}
	}

	const dataPlaceHolder = <Grid
		container
		sx={{ position: "relative", mt: 10, }}
		spacing={1} direction={"row"}>
		<Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
		</Grid>
		<Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
		</Grid>
		<Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
		</Grid>
		<Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
		</Grid>
		<Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
		</Grid>
		<Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
		</Grid>
		<Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
		</Grid>
		<Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
		</Grid>
		<Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Skeleton variant="rounded" sx={{ width: { xs: "90vw", md: "30vw" }, height: "50vh" }} />
		</Grid>
	</Grid>

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navigation filterUpdate={(e: string) => updateFilter(e)} />
			{repos.length > 0 ? <Github repos={repos} /> : dataPlaceHolder}
			<Footer></Footer>
		</ThemeProvider>
	)
}
