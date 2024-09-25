import {
  ResponseWModelInterface,
  ResponseWoModelInterface,
} from "./interfaces";

export function ResponseWModel(
  retcode: string,
  message: string,
  data: any
): ResponseWModelInterface {
  return {
    retcode,
    message,
    data,
  };
}

export function ResponseWoModel(
  retcode: string,
  message: string
): ResponseWoModelInterface {
  return {
    retcode,
    message,
  };
}
