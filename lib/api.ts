// lib/api.ts

import axios from 'axios';

export async function fetchData() {
  try {
    const response = await axios.get('/api/fetchData');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
