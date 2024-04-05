interface IRepoProps
{
    repoData:
    {
        name: string,
        html_url: string,
        has_pages: boolean
        description: string
        // TBD
    }
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