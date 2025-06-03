import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState<{ id: number; name: string; email: string }[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Failed to fetch users", err));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} – {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
