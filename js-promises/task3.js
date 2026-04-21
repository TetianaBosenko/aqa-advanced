async function getTodo () {
      const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      return data;
}

async function getUser () {
      const response =  await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      return data;
}

const promiseAll = Promise.all([getTodo(),getUser()]).then(results => console.log(results));

const promiseRace = Promise.race([getTodo(),getUser()])
      .then(results => console.log('Fulfilled: ', results))
      .catch(results => console.log('Rejected: ', results));
