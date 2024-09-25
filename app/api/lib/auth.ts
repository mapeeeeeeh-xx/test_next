// lib/auth.ts

import { loginAPIURL, registerAPIURL } from '@/app/api/routes';
import axios from 'axios';

export async function loginUser(identifier: string, password: string) {
  try {
    const response = await axios.post(loginAPIURL, { identifier, password });
    return response;
  } catch (error) {
    throw new Error('Login failed');
  }
}

export async function registerUser(email: string, username: string, password: string) {
  try {
    const response = await axios.post(registerAPIURL, { email, username, password });
    return response.data;
  } catch (error) {
    throw new Error('Registration failed');
  }
}
