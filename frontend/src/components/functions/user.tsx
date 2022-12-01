import { access } from "fs";
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
export const createUser = async (access_token: any, user: any) => {
  console.log(user)
  const apiUrl = "http://localhost:5000/users/createUser";
  const requestOptions = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  console.log(requestOptions)
  return await fetch(apiUrl, requestOptions)

}

export const removeUser = async (access_token: any, id: number) => {
  console.log(access_token, id)
  const apiUrl = "http://localhost:5000/users/deleteUser/" + id;
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  };
  console.log(requestOptions)
  return await fetch(apiUrl, requestOptions)
}

export const getUserlist = async (access_token: any) => {
  const apiUrl = "http://localhost:5000/users/listUsers";
  const requestOptions = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  };
  console.log(requestOptions)
  return await fetch(apiUrl, requestOptions)
}

export const getUser = async (access_token: any, id: any) => {
  console.log(access_token,id)
  const apiUrl = "http://localhost:5000/users/getUser/" + id;
  const requestOptions = {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  };
  return await fetch(apiUrl, requestOptions)
}

export const updateUser = async (access_token: any, id: any, value: Partial<userInterface>) => {
  const apiUrl = "http://localhost:5000/users/updateUser/" + id;
  const requestOptions = {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  };
  return await fetch(apiUrl, requestOptions)
}