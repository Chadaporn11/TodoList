import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import './App.css';
//pages
import UserList from './components/user/UserList';
import Menubar from './components/layouts/Menubar';
import SignIn from './components/signin/SignIn';
import CreateUser from './components/user/CreateUser';
import TodoList from './components/dolist/TodoList';
import MyGroup from './components/group/MyGroup';
import AddGroup from './components/group/AddGroup'
import EditUser from './components/user/EditUser';
import LoadingToRedirect from './components/LoadingToRedirect';

function App() {

  const [Msg, setMsg] = React.useState("");
  const role = localStorage.getItem('roles');
  console.log(role)

  useEffect(() => {
    const msg = localStorage.getItem("msg");
    if (msg === "login complete") {
      setMsg(msg)
    }
  }, []);

  if (!Msg) {
    return <SignIn></SignIn>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <BrowserRouter>
        <Menubar />
        {role === 'Admin'
          ?
          <>
            <Routes>
              <Route path="/user-list" element={<UserList />} />
              <Route path="/create-user" element={<CreateUser />} />
              <Route path="/edit-user/:id" element={<EditUser />} />
              <Route path="/todolist/:id" element={<TodoList />} />
              <Route path="/" element={<MyGroup />} />
              <Route path="/add-group" element={<AddGroup />} />
            </Routes>
          </>
          : <>
            <Routes>
            <Route path="/user-list" element={<LoadingToRedirect />} />
              <Route path="/create-user" element={<LoadingToRedirect />} />
              <Route path="/edit-user/:id" element={<LoadingToRedirect />} />
              <Route path="/todolist/:id" element={<TodoList />} />
              <Route path="/" element={<MyGroup />} />
              <Route path="/add-group" element={<AddGroup />} />
            </Routes>
          </>
        }
      </BrowserRouter >
    </div>


  );
}

export default App;
