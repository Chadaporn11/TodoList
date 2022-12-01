import { userInterface } from "../../models/IUser";

export const login = async (user: Partial<userInterface>) => {

  const apiUrl = "http://localhost:5000/api/login";
  const requestOptionsPost = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return await fetch(apiUrl, requestOptionsPost)

}
export const createUser = async (user: any) => {
  console.log(user)
  const apiUrl = "http://localhost:5000/users/createUser";
  const requestOptions = {
    method: "POST",
    Headers: { "Content-Type": "application/json" },
    body: JSON.stringify({user}),
  }
  return await fetch(apiUrl, requestOptions)

}