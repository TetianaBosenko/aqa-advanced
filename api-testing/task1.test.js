import axios from 'axios';

test('Create new post', async () => {
    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            title: 'post title',
            body: 'my new post',
            userId: 1,
        },
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    );
    expect(response.status).toBe(201);
    expect(response.data.userId).toBe(1);
    expect(response.data.id).toBeTruthy();
    expect(response.data.title).toBe('post title');
    expect(response.data.body).toBe('my new post');
});

test('Create new comment', async () => {
    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/comments',
        {
            postId: 1,
            name: 'my new comment',
            email: 'myemail@test.com',
            body: 'mycomment full text',
        },
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    );
    expect(response.status).toBe(201);
    expect(response.data.postId).toBe(1);
    expect(response.data.id).toBeTruthy();
    expect(response.data.email).toBe('myemail@test.com');
    expect(response.data.body).toBe('mycomment full text');
});

test('Verify comment 300', async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/comments/300'
    );
    expect(response.status).toBe(200);
    expect(response.data.postId).toBe(60);
    expect(response.data.name).toBe('in dolore iusto ex molestias vero');
});

test('Update comment 300', async () => {
    const response = await axios.put(
        'https://jsonplaceholder.typicode.com/comments/300',
        {
            name: 'updated comment name',
            email: 'updatedemail@test.com',
            body: 'updated comment full text',
        },
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    );
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('updated comment name');
    expect(response.data.email).toBe('updatedemail@test.com');
    expect(response.data.body).toBe('updated comment full text');
});

test('Delete comment 300', async () => {
    const response = await axios.delete(
        'https://jsonplaceholder.typicode.com/comments/300'
    );
    expect(response.status).toBe(200);
    expect(response.data).toEqual({});
});
