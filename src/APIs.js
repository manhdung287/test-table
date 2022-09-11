import Http from "./https";

export const getFileCsvContent = (id) => {
    const url = `tutorial/find_version/${id}`;
    return Http.get(url);
  };
  