import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from '../Navbar';
export default function View() {
  const [user, setUser] = useState({
    username: "",
    topic: "",
    forum: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/add/${id}`);
    setUser(result.data);
  };

  return (
    <><Navbar /><div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">


          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Username:</b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>topic:</b>
                  {user.topic}
                </li>
                <li className="list-group-item">
                  <b>text:</b>
                  {user.forum}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/Forums"}>
            Back
          </Link>
        </div>
      </div>
    </div></>
  );
}
