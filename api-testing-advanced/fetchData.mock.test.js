import { jest } from '@jest/globals';

jest.unstable_mockModule('axios', () => ({
    default: {
        get: jest.fn(),
    },
}));

const { default: axios } = await import('axios');
const { fetchData } = await import('./fetchData.js');

describe('fetchData with mocked axios', () => {
    beforeEach(() => {
        axios.get.mockReset();
    });

    test('returns data when request is successful', async () => {
        axios.get.mockResolvedValue({ data: { id: 1, title: 'Mocked Todo' } });
        const result = await fetchData('https://test.com/todo/1');
        expect(result).toEqual({ id: 1, title: 'Mocked Todo' });
        expect(axios.get).toHaveBeenCalledWith('https://test.com/todo/1');
    });

    test('throws "Resource not found" when API returns 404', async () => {
        axios.get.mockRejectedValue({
            response: {
                status: 404,
            },
        });
        await expect(fetchData('https://test.com/todo/999')).rejects.toThrow(
            'Resource not found'
        );
        expect(axios.get).toHaveBeenCalledWith('https://test.com/todo/999');
    });
});
