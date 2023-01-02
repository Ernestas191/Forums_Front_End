import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from '../Navbar';
export default function Eddit() {
  let navigate = useNavigate();

  const {id}=useParams()

  const [user, setUser] = useState({
    username: "",
    topic: "",
    forum: "",
  });

  const { username, topic, forum } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect (()=>{
    loaduser()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/add/${id}`, user);
    navigate("/Forums");
  };

  const loaduser = async ()=> {
    const result = await axios.get(`http://localhost:8080/add/${id}`)
    setUser(result.data)
  }

  return (
    <><Navbar />
    
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Eddit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"

                name="username"
                value={username}
                onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Topic
              </label>
              <input
                type={"text"}
                className="form-control"

                name="topic"
                value={topic}
                onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Text
              </label>
              <input
                type={"text"}
                className="form-control"

                name="forum"
                value={forum}
                onChange={(e) => onInputChange(e)} />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/Forums">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div></>
  );
}