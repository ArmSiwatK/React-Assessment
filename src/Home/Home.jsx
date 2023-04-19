import React, { useState, useEffect } from 'react';

import NavBar from "../NavBar/NavBar";
import Header from './Header/Header';
import Button from './Button/Button';
import AdminTable from './AdminTable/AdminTable';
import UserTable from './UserTable/UserTable';
import FormSection from './FormSection/FormSection';
import mockEmployees from './mockEmployees';

import "./Home.css";



const Home = () => {

  const [state, setState] = useState('Normal');
  const [users, setUsers] = useState(mockEmployees);



  const handleButtonClick = (section) => {
    setState(section);
  };

  const handleUserDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleUserCreate = (user) => {
    const sortedUsers = [...users].sort((a, b) => a.id - b.id);
    let newId = 0;
    for (const u of sortedUsers) {
      if (u.id === newId) {
        newId++;
      } else {
        break;
      }
    }
    const newUser = { id: newId, ...user };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };



  useEffect(() => {
    document.title = state === 'Normal' ? 'React – Assessment' : `Home – ${state} Home Section`;
  }, [state]);



  return (
    <div>
      <NavBar />
      <div className="home">

        <Header title={state === 'Normal' ? 'React – Assessment' : `Home – ${state} Home Section`} />

        <div className="big-button-container">
          <Button text="User Home Section" onClick={() => handleButtonClick('User')} />
          <Button text="Admin Home Section" onClick={() => handleButtonClick('Admin')} />
        </div>

        <div className="table-container">
          {state === 'User' ? <UserTable data={users} /> :
            state === 'Admin' ? (
              <>
                <FormSection onSubmit={handleUserCreate} />
                <AdminTable data={users} onDelete={handleUserDelete} />
              </>
            ) : null
          }
        </div>

      </div>
    </div>
  )
}

export default Home;