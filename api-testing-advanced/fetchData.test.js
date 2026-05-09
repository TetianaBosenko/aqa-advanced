import { fetchData } from './fetchData.js';

describe('fetchData', () => {
    test('returns data for valid URL', async () => {
        const result = await fetchData(
            'https://jsonplaceholder.typicode.com/todos/1'
        );
        expect(result).toHaveProperty('id', 1);
    });

    test('throws "Resource not found" for 404', async () => {
        await expect(
            fetchData('https://jsonplaceholder.typicode.com/ttodos/1')
        ).rejects.toThrow('Resource not found');
    });
});
