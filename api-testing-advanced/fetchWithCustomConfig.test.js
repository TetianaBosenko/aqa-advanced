import axios from 'axios';
import { fetchWithCustomConfig } from './fetchWithCustomConfig.js';

describe('fetchWithCustomConfig', () => {
    test('sends custom headers and params in request', async () => {
        expect.assertions(2);

        const customHeaders = { 'X-Test-Header': 'test-value' };
        const customParams = { userId: 1 };

        const interceptorId = axios.interceptors.request.use((config) => {
            expect(config.headers['X-Test-Header']).toBe('test-value');
            expect(config.params).toEqual({ userId: 1 });
            return config;
        });

        try {
            await fetchWithCustomConfig(
                'https://jsonplaceholder.typicode.com/posts',
                customHeaders,
                customParams
            );
        } finally {
            axios.interceptors.request.eject(interceptorId);
        }
    });
});
