import { BASE_URL } from "../utilities";

export const fetchAllNotes = async () => {
  const response = await fetch(`${BASE_URL}/api/v1/notes`)
  // .then(response => {
  //   if (!response.ok) {
  //     throw Error("Failed to get notes");
  //   } else {
      return response.json();
  //   }
  // });
};
