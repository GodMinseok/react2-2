import axios from "axios";
import { useState, useEffect } from "react";

export default async function RestApi() {
  const [users, setUsers] = useState(null); // 상태관리
  const [loading, setLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios("http://localhost:3001/test");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching dta", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <h1>Loading ...</h1>;
  if (!users) return <h1>No User Found!</h1>;

  //   const res = await axios("http://localhost:3001/test");
  const res = await axios("https://jsonplaceholder.typicode.com/users");

  return (
    <ul>
      {users.map((user, id) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h3>{user.id}</h3>
          <h3>{user.address.city}</h3>
          <h3>{user.address}</h3>
        </div>
      ))}
    </ul>
  );
}
