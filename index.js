
//  Asyncrounous function practice

// callback function
console.log('Iam first..!');

getUser(1, displayUsers);

console.log('Iam second.!!');

function displayCommit(commits) {
    console.log(commits);
}

function displayRepos(repos) {
    getCommit(repos, displayCommit)
}

function displayUsers(user) {
    getRepository(user, displayRepos)
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: 1, name: "Dinesh"});
        }, 2000);  
    });
};

function getRepository(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);  
    });
};

function getCommit(commits) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['commit1', 'commit2', 'commit3']);
        }, 2000); 
    });
};


// Promise constructor object

// // creating promises
// const p = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         // resolve("Hello");
//         reject(new Error('message'));
//     }, 1000);
// });
// // consuming promises
// p.then(result => console.log('Result:', result)).catch(err => console.log('Error:', err.message));
