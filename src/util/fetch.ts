import axios, { AxiosRequestConfig } from 'axios';

/* eslint-disable @typescript-eslint/no-explicit-any */
function setNewError(error: any): Error {
  return new Error(error.message || error.error.message);
}

export async function fetcher<T>(url: string, requestInit: AxiosRequestConfig = {}): Promise<T> {
    let response: any = null;

    try {
        const { data } = await axios.request<T>({
            url,
            ...requestInit
        })
    
        response = data;
    } catch (error) {
        setNewError(error)
    }

    return response;
}