jest.mock('axios', () => ({
  mockGet: jest.fn(),
  create: jest.fn(() => ({
    get: jest.requireMock('axios').mockGet,
  })),
}));

import axios from 'axios';
import { api, getRepository } from './api';

const { mockGet } = axios;

describe('api service', () => {
  beforeEach(() => {
    mockGet.mockReset();
  });

  it('creates the api client with the GitHub base URL', () => {
    expect(api).toBeDefined();
  });

  it('normalizes the repository name before requesting the GitHub API', async () => {
    const response = { data: { id: 1, full_name: 'facebook/react' } };
    mockGet.mockResolvedValue(response);

    const result = await getRepository('  facebook /react  ');

    expect(mockGet).toHaveBeenCalledWith('/repos/facebook/react');
    expect(result).toEqual(response.data);
  });
});
