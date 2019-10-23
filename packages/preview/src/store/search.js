import { useState } from "react";
import { createContainer } from "unstated-next";

const useSearch = (initialState = "") => {
  let [text, setText] = useState(initialState);
  return { text, setText };
};

export default createContainer(useSearch);
