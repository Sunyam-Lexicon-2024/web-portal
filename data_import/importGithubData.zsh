#! /bin/zsh
token=$(echo $GITHUB_ADMIN_ACCESS | base64 -d)

query=$(cat query.gql | tr -d '\n')
variables=$(cat variables.gql | tr -d '\n')
data=$(jq -n \
           --arg q "$query" \
           --arg v "$variables" \
           '{ query: $q , variables: $v}')

# Send query request
response=$(curl -s -H "Authorization: bearer $token" -d "$data" https://api.github.com/graphql)

echo $response | jq '.data.search |
                    to_entries | 
                    .[1].value | 
                    map(.repository = .node | 
                    del(.node)) | 
                    map(.repository) | 
                    map(.commitTotal = .defaultBranchRef.target.history.totalCount | 
                    del(.defaultBranchRef) ) ' > ../public/repositories.json