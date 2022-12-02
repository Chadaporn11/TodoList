export const deleteTask = async (access_token: any, task_id: number) => {
    console.log('deleteTask', task_id)
    console.log(access_token, task_id)
    const apiUrl = "http://localhost:5000/task/deleteTask/" + task_id;
    const requestOptions = {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${access_token}`,
            "Content-Type": "application/json",
        },
    };
    return await fetch(apiUrl, requestOptions)

}

export const getTaskGroupByGid = async (groupId: any) => {
    const apiUrl = "http://localhost:5000/task/getTaskByGid/"+groupId;
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

  export const createTask = async (task:any) => {
    const apiUrl = "http://localhost:5000/task/createTask";
    const requestOptionsPost = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),

    };
    console.log(requestOptionsPost)
    return await fetch(apiUrl, requestOptionsPost)

  }

  export const updateTask = async (task:any) => {
    const apiUrl = "http://localhost:5000/task/updateTask";
    const requestOptionsPost = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),

    };
    console.log(requestOptionsPost)
    return await fetch(apiUrl, requestOptionsPost)

  }