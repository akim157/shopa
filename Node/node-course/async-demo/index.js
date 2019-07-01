console.log('Before');
// getUser(1, (user) => {
//     getRepositories(user.gitHubUserName, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         });
//     });
// });

// getUser(1)
// 	.then(user => getRepositories(user.gitHubUserName))
// 	.then(repos => getCommits(repos[0]))
// 	.then(commits => console.log('Commits', commits))
// 	.catch(err => console.log('Error', err.message));

//Async and Await	approach
async function displayCommits() {
	try {
		const user = await getUser(1);
		const repos = await getRepositories(user.gitHubUserName);
		const commits = await getCommits(repos[0]);
		console.log(commits);
	}
	catch(err) {
		console.log('Error', err.message);
	}
}

displayCommits();

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
			// resolve(['repo1', 'repo2', 'repo3']);
			reject(new Error('error repositories...'));
		}, 2000);
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