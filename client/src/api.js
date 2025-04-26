import axios from 'axios';

const API_URL = 'http://localhost:5000/feedback';

export const submitFeedback = (feedbackData) => axios.post(API_URL, feedbackData);
export const getFeedbacks = () => axios.get(API_URL);
