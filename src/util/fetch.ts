/* eslint-disable @typescript-eslint/no-explicit-any */
function setNewError(error: any): Error {
  return new Error(error.message || error.error.message);
}

export async function fetcher<T>(url: string, requestInit: RequestInit = {}): Promise<T> {
    let response = null;
    try {
        response = await fetch(url, requestInit);
    } catch (error: any) {
       throw setNewError(error);
    } 

    try {
        const reponseParse = (response as Response).json();
        return reponseParse;
    } catch (error: any) {
        throw setNewError(error);
    }
}