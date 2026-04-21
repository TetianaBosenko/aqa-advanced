class Todo {
    async getTodo () {
      const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      return data;
    }
}

class User {
    async getUser () {
      const response =  await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      return data;
    }
}
