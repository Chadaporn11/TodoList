import { GroupInterface } from "../../models/IGroup";

export const getgroup = async (Userid: any) => {
  const apiUrl = `http://localhost:5000/group/getGroup/${Userid}`;
  const requestOptionsGet = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Content-Type": "application/json",
    },
  };
  return await fetch(apiUrl, requestOptionsGet)

}

export const listbyId = async (userId: any) => {
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

export const getTaskGroupByGid = async (gid: any) => {
  const apiUrl = "http://localhost:5000/task/getTaskByGid/"+gid;
  const requestOptionsPost = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Content-Type": "application/json",
    },
  };
  console.log(requestOptionsPost)
  return await fetch(apiUrl, requestOptionsPost)

}
