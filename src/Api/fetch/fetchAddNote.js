import { BASE_URL } from "../utilities";

export const fetchAddNote = async (title, list) => {
  const url = `${BASE_URL}/api/v1/notes`;
  const body = { id: new Date(), title, list };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
  const response = await fetch(url, options)
  // .then(response => {
  //   if (!response.ok) {
  //     throw Error("Note must include Title and Tasks");
  //   } else {
      return response.json();
  //   }
  // });
};
