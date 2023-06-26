/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";

const usetitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Exclusive`;
  }, [title]);
};
export default usetitle;
