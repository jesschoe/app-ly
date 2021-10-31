import api from './api-config';

export const createJob = async (data) => {
  const resp = await api.post('/jobs', { job: data })
  return resp.data
}

export const readAllJobs = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/jobs`)
  return resp.data
}

export const readOneJob = async (id) => {
  const resp = await api.get(`/jobs/${id}`);
  return resp.data
}

export const updateJob = async (id, data) => {
  const resp = await api.put(`/jobs/${id}`, { job: data })
  return resp.data
}

export const destroyJob = async (id) => {
  const resp = await api.delete(`/jobs/${id}`)
  return resp.data
}