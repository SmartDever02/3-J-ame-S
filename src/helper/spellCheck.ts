import axios from './axios';

const spellCheck = async (word: string) => {
  try {
    let response = await axios.get(`/spellcheck/${word}`);
    return response.data;
  } catch (error: any) {
    console.log('spellcheck error: ', error);
    return Promise.reject(error.response.data.message);
  }
};

export default spellCheck;
