// check if url is valid
export const validateUrl = (url: string): boolean => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}