import Repo from "./Repo"

export default class RepositoryFactory
{
	public async GetGithubRepos()
	{
		// TBD secure fetch with token from Azure Function Token Provider
		const repoJson: IRepositoryData[] = await fetch("web-portal/repositories.json")
			.then(async (response) => response.json())
			.catch(() =>
			{
				this.GetLocalData()
			})
		return this.AssembleRepos(repoJson)
	}

	private async GetLocalData()
	{
		await fetch("repositories.json")
			.then(async (response) => this.AssembleRepos(await response.json()))
			.catch((error) => console.error("Could not fetch data", error))
	}

	private async AssembleRepos(repoData: IRepositoryData[])
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
		return repoElems
	}
}