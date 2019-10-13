import axios from 'axios';

export const getArticles = async () => {
  try {
    const res = await axios.get('http://localhost:3100/articles');
    return res.data;
  } catch (error) {
    return error;
  }
};
