function getTodo () {
      const url = 'https://jsonplaceholder.typicode.com/todos/1';
      return fetch (url).then(response => response.json());
}

function getUser () {
      const url = 'https://jsonplaceholder.typicode.com/users/1';
      return fetch (url)
      .then(response => response.json());
}

const promiseAll = Promise.all([getTodo(),getUser()]).then(results => console.log(results));

const promiseRace = Promise.race([getTodo(),getUser()])
      .then(results => console.log('Fulfilled: ', results))
      .catch(results => console.log('Rejected: ', results));

