import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom0';

function User() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => setUser(set.data))
    .finally(() => setLoading(false));
  },[])

  return (
  <div>
    <h1>User Detail</h1>
    {loading && <div>Loading...</div>}
    {!loading && <code>{JSON.stringify(user)}</code>}

    <Link to={`/user/${parseint(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
  </div>
  );
}

export default User;


