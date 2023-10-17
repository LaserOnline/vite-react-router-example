import React, { useEffect, useState } from 'react';
import { User } from '../../module/model/User';
  
function Api() {
    const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    // * ดึงข้อมูลจาก API
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(result => {
        setData(result.data); // * ตั้งค่า state ด้วยข้อมูลที่ได้
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {/* //* ตรวจสอบว่าข้อมูลถูก load แล้วหรือยัง และแสดงผล */}
      {data ? (
        <ul>
          {data.map(user => (
            <li key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <p>{user.first_name} {user.last_name}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Api;
