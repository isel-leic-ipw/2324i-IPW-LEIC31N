curl --request POST \
--url "https://api.github.com/applications/YOUR_CLIENT_ID/token" \
--user "YOUR_CLIENT_ID:YOUR_CLIENT_SECRET" \
--header "Accept: application/vnd.github+json" \
--header "X-GitHub-Api-Version: 2022-11-28"
--data '{
  "access_token": "ACCESS_TOKEN_TO_CHECK"
}'


/* More examples
https://docs.github.com/pt/rest/overview/authenticating-to-the-rest-api?apiVersion=2022-11-28 (2023)*/

Exemplo basico IBM (2023) https://www.ibm.com/docs/pt-br/ibm-mq/9.1?topic=security-using-http-basic-authentication-rest-api */