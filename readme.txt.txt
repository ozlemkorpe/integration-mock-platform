Run the mock server by: npm run dev


Example Azure Boards POST - Create New Issue Request:

(iwr -Method POST `
  -Uri http://localhost:4000/azureboards/workitems `
  -Body (@{
    title = "Login button not working"
    description = "Click does nothing"
    type = "Bug"
  } | ConvertTo-Json) `
  -ContentType "application/json"
).Content

Example Jira POST - Create New Issue Request:

(iwr -Method POST `
  -Uri http://localhost:4000/jira/issue `
  -Body (@{
    fields = @{
      summary = "Login button not working"
      description = "Click does nothing"
      issuetype = @{ name = "Bug" }
      project = @{ key = "QA" }
    }
  } | ConvertTo-Json -Depth 5) `
  -ContentType "application/json"
).Content

