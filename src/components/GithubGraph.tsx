import React, { useEffect, useState } from 'react';
import { getGithubCommits } from '../githubService';

//NOTE: Currently not in use

const GithubGraph = () => {
  
  const [commits, setCommits] = useState([{total: 0, week: 0}])
  
  useEffect(() => {
    getGithubCommits()
      .then(commits => setCommits(commits)) 
  },[])

console.log('------commits', commits)

  return (
    <>
    <aside>github graph</aside>
    </>
  );
};

export default GithubGraph;