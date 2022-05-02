
import React from "react";
import GitHubCard from "./GitHubCard";




test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
  const tree = render(<GitHubCard/>)
  expect(tree).toMatchSnapshot()
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName)
  })

