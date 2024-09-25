// lib/interfaces.ts

export interface UserLoginCreds {
  id: number;
  email: string;
  username: string;
  password: string;
  token: any;
}

export interface UserRegisterCreds {
  email: string;
  username: string;
  password: string;
}

export interface ResponseWModelInterface {
  retcode: string;
  message: string;
  data: any;
}

export interface ResponseWoModelInterface {
  retcode: string;
  message: string;
}
