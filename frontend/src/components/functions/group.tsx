import { GroupInterface } from "../../models/IGroup";

export const getgroup = async (userId: any) => {
  const apiUrl = `http://localhost:5000/group/getGroup/${userId}`;
  const requestOptionsGet = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Content-Type": "application/json",
    },
  };
  return await fetch(apiUrl, requestOptionsGet)

}

export const grouplistbyId = async (userId: any) => {
  const apiUrl = "http://localhost:5000/group/getGroup/" + userId;
  const requestOptionsGet = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Content-Type": "application/json",
    },
  };
  return await fetch(apiUrl, requestOptionsGet)

}

export const creategroup = async (group: Partial<GroupInterface>) => {
  const apiUrl = "http://localhost:5000/group/createGroup";
  const requestOptionsPost = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(group),
  };
  console.log(requestOptionsPost)
  return await fetch(apiUrl, requestOptionsPost)

}


export const deleteGroup = async (groupId: any) => {
  const apiUrl = "http://localhost:5000/group/deleteGroup/"+groupId;
  const requestOptionsPost = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Content-Type": "application/json",
    },
  };
  console.log(requestOptionsPost)
  return await fetch(apiUrl, requestOptionsPost)

}

