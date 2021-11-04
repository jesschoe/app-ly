import api from './api-config';

export const createContact = async (user_id, job_id, data) => {
  const resp = await api.post(`/users/${user_id}/jobs/${job_id}/contacts`, { contact: data })
  return resp.data
}

export const readAllContacts = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/jobs`)
  return resp.data
}

export const readOneContact = async (user_id, job_id, id) => {
  const resp = await api.get(`users/${user_id}/jobs/${job_id}/contacts/${id}`);
  return resp.data
}

export const updateContact = async (user_id, job_id, id, data) => {
  const resp = await api.put(`users/${user_id}/jobs/${job_id}/contacts/${id}`, { contact: data })
  return resp.data
}

export const destroyContact = async (user_id, job_id, id) => {
  const resp = await api.delete(`users/${user_id}/jobs/${job_id}/contacts/${id}`)
  return resp.data
}

export const createNote = async (user_id, job_id, data) => {
  const resp = await api.post(`/users/${user_id}/jobs/${job_id}/notes`, { note: data })
  return resp.data
}