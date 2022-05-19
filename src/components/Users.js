import { useEffect, useState } from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import axios from "axios";
import User from "./User"

function Users() {

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([]);

  const { path, url } = useRouteMatch();

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users').then(res => 
      setUsers(res.data))
      .finaly(() => setLoading(false));
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {loading && <div>loading...</div>}
      <ul>
         {users.map((user) => (
          <li key={user.id}>
            <NavLink activeClassName="active" to={`${url}/${user.id}`}>{user.name}</NavLink>
          </li>
         ))}
      </ul>
        
      <Switch>
      <Route exact path={path}>
        <h3>Please select a topic.</h3>
      </Route>
      <Route path={`${path}/:Id`} component={User} />
    </Switch>

    </div>
  );
}

export default Users