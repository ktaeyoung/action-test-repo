const core = require('@actions/core');
const github = require('@actions/github');

const token = core.getInput('github-token');
const octokit = github.getOctokit(token);


(async function main() {
    commits = await getCommitsFromPayload();
    console.log(`commits : ${commits}`)

})().catch(e=>{
    core.setFailed(e);
});

async function getCommitsFromPayload() {
    const payload = github.context.payload;
    const owner = payload.repository.owner.login;
    const repo = payload.repository.name;

    const res = await Promise.all(payload.commits.map(commit=>{
        octokit.repos.getCommit({owner, repo, ref: commit.id});
    }));

    return res.map(res=>res.data);
}
