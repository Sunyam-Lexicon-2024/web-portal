interface IRepositoryData
{
    commitTotal: number
    diskUsage: number
    homepageUrl: string
    name: string
    url: string,
    pushedAt: string
    description: string
    // TBD
}

interface RepoElement extends React.ElementType
{
    props: IRepositoryData
}

interface IFilterUpdate
{
    filterUpdate: (f: string) => void
}

interface IDefaultBranchRef
{
    name: string
    target: ITarget
}

interface ITarget
{
    history: IHistory
}

interface IHistory
{
    totalCount: number
}

interface IPagesProps
{
    build_type: string
    cname: string | null
    custom_404: boolean
    html_url: string | null
    https_enforced: boolean
    pending_domain_unverified_at: string | null
    protected_domain_state: null
    public: boolean
    source: { branch: string; path: string }
    status: string
    url: string
}