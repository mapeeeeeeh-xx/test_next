// lib/interfaces.ts

interface UserLoginCreds {
    email: string;
    username: string
    password: string;
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

export function ResponseWModel(retcode: string, message: string, data: any): ResponseWModelInterface {
    return {
        retcode,
        message,
        data
    };
}

export function ResponseWoModel(retcode: string, message: string): ResponseWoModelInterface {
    return {
        retcode,
        message
    };
}
