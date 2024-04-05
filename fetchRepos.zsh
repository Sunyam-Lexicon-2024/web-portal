#!/usr/bin/zsh

token=$(echo $TOKEN | base64 -d)

github_data=$(
    curl -Ls \
        -H "Accept: application/vnd.github+json" \
        -H "Authorization: Bearer $token" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        https://api.github.com/orgs/sunyam-lexicon-2024/repos
)

echo "$github_data" >./public/repos.json

repos=($(echo $github_data | jq -r '. | .[] | select(.has_pages == true)  | .name '))

### a way to filter by key value regex match ###
# echo $repos | jq '.[1] | with_entries(if (.key|test(".*url$")) then ({key: .key, value: .value}) else empty end)'

repo_array=()

for repo in "${repos[@]}"; do

    repo_data=$(curl -Ls \
        -H "Accept: application/vnd.github+json" \
        -H "Authorization: Bearer $token" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        https://api.github.com/repos/sunyam-lexicon-2024/$repo/pages)

    repo_array+=$(echo $repo_data | jq -r '.')

done

json=$(printf "%s\n" "${repo_array[@]}" | jq -s '.')

echo "$json" >./public/pages.json
