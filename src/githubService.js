export const getGithubCommits = async() => {
  const repos = await fetch('https://api.github.com/users/SeHarlan/repos')
    .then(res => res.json())
    .then(res => res.map(repo => repo.name))

  const commits = repos.reduce(async(acc, repo) => {
    const commitData = await fetch(`https://api.github.com/repos/SeHarlan/${repo}/stats/commit_activity`)
      .then(res => res.json())

      let newAcc;

      if (!acc.length) acc = commitData;
      else {
        newAcc = acc.map(week => ({
        week: week.week,
        total: week.total + commitData.total,
      }))
    }
      
      console.log(newAcc)
    return newAcc
  }, [])


  return commits
}