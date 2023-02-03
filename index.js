const core = require('@actions/core');
const github = require('@actions/github');



(async () => {
  try {
    // const myToken = core.getInput('github-token');
    const myToken = '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';
    const octokit = github.getOctokit(myToken);
    
    console.log('github action start!!!');
    // implement awesome github actions!
    
  } catch (error) {
    core.setFailed(error.message);
  }
})();