import api from './api-config';

export const createJob = async (user_id, data) => {
  const resp = await api.post(`/users/${user_id}/jobs`, { job: data })
  console.log(resp)
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

export const updateJob = async (user_id, id, data) => {
  const resp = await api.put(`users/${user_id}/jobs/${id}`, { job: data })
  return resp.data
}

export const destroyJob = async (user_id, id) => {
  const resp = await api.delete(`users/${user_id}/jobs/${id}`)
  return resp.data
}