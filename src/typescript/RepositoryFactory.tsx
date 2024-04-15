import Repo from "./Repo"

export default class RepositoryFactory
{
	public async GetGithubRepos()
	{

		const cosmosData = await fetch("https://cosmos-data-provider-stage.azurewebsites.net/api/data")

		console.debug(cosmosData)

		const repoJson: IRepositoryData[] = await fetch("repositories.json")
			.then(async (response) => response.json())
			.catch((error) =>
			{
				console.log(error)
			})
		return this.AssembleRepos(repoJson)
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