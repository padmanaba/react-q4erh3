import React, { useState, useEffect } from 'react';
import Data from './data';
import axios from 'axios';

function Data() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const API = 'https://jsonplaceholder.typicode.com/users';

  const fetchData = () => {
    axios.get(API).then((res) => {
      // const persons = res.data;
      setUsers(res.data);
    });
  };
  useEffect(() => {
    fetchData();
  });
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <table>
        <thead>
          <th> Id </th>
          <th> name </th>
          <th> Username </th>
          <th> Email </th>
        </thead>
        <tbody>
          {users
            .filter((user) => {
              if (search == '') {
                return true;
              } else if (
                user.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user) => (
              <tr>
                <th> {user.id} </th>
                <th> {user.name} </th>
                <th> {user.username} </th>
                <th> {user.email} </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
