import Repo from "./Repo"

export default class RepositoryFactory
{
	public async GetGithubRepos()
	{
		const endpoint = "https://cosmos-data-provider.azurewebsites.net/api/data"
		const json = await fetch(endpoint)
			.then(async (response) => await response.json())
			.catch(async () => await this.GetLocalData())

		const data = await this.AssembleRepos(json)
		return data
	}

	private async GetLocalData(): Promise<IRepositoryData[]>
	{
		const localEndpoint = "repositories.json"
		return await fetch(localEndpoint, { mode: "no-cors" })
			.then(async (response) => response.json())
			.catch(() => [])
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