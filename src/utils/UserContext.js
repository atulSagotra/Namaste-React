import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Atul Sagotra",
    email: "atulsagotra@gmail.com",
  },
});
export default UserContext;
