import axios from 'axios';

const BASE_URL = 'https://cerulean-marlin-wig.cyclic.app/';

// get calls from the Activity Feed
export const getCalls = () => {
  return axios.get(`${BASE_URL}activities`);
};

// get a specific call detail
export const getCallDetail = (callId) => {
  return axios.get(`${BASE_URL}activities/${callId}`);
};

// update a call 
export const updateCall = (callId, data) => {
  return axios.patch(`${BASE_URL}activities/${callId}`, data);
};

// reset all calls 
export const resetCalls = () => {
  return axios.patch(`${BASE_URL}reset`);
};






