import Repo from "./Repo"

export default class RepositoryFactory
{
	public async GetGithubRepos()
	{

		const endpoint = "https://cosmos-data-provider.azurewebsites.net/api/data"
		const localEndpoint = "repositories.json"

		try
		{
			const cosmosData = await fetch(endpoint)
				.then((response) => response.json())
				.catch((error) =>
				{
					console.log(error)
				})
			return this.AssembleRepos(cosmosData)
		}
		catch
		{
			const repoJson = await fetch(localEndpoint, { mode: "no-cors" })
				.then(async (response) => response.json())
				.catch((error) =>
				{
					console.log(error)
				})
			return this.AssembleRepos(repoJson)
		}
	}

	private async AssembleRepos(repoData: IRepositoryData[])
	{
		const repoElems = repoData.map((repo: IRepositoryData, index: number) =>
		{
			return (
				<Repo
					key={`Repo-${index}`}
					name={repo.name}
					description={repo.description}
					url={repo.url}
					pushedAt={repo.pushedAt}
					homepageUrl={repo.homepageUrl}
					diskUsage={repo.diskUsage}
					commitTotal={repo.commitTotal}
				/>
			)
		})
		return repoElems
	}
}