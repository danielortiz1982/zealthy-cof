import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async (url) => {
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      setUsers(data);
    };

    getUsers("http://209.97.154.37/data/v1/users");
  }, []);

  console.log(users);

  return (
    <div className="Users">
      <Header />
      <h1>Users</h1>
      <div className="users-content">
        {users.map((user) => {
          return (
            <div key={user._id} className={`user`} id={user._id}>
              {user.details.flat().map((detail) => {
                return (
                  <div className="detail" key={detail._id}>
                    <div className="label">{detail.label}:</div>
                    <div className="value">{detail.value}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
