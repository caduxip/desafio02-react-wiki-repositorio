import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

export async function getRepository(repositoryName) {
  const normalizedRepositoryName = repositoryName.trim().replace(/\s+/g, "");

  const { data } = await api.get(`/repos/${normalizedRepositoryName}`);

  return data;
}
