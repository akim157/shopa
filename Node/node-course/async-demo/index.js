console.log('Before');
getUser(1, (user) => {
    getRepositories(user.gitHubUserName, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        });
    });
});
console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        // Kick off some async work (Начните асинхронную работу)
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUserName: 'maxim' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub Api...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 200);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    });
}