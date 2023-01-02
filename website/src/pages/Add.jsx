import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../Navbar';







export default function Add(props) {
  let navigate = useNavigate();

 
 
  const [user, setUser] = useState({
    username:"",
    topic: "",
    forum: "",
  });

  const { username, topic, forum } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/add", user);
    navigate("/Forums");
  };
  
  return (
    <><Navbar /><div className="container">
      <div className="row">
      
      
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Post forum</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-2">
              <label htmlFor="Name" className="form-label">
              
              
              </label>
              <select className="select-add-username" onChange={(event) =>
            setUser((prev) => ({ ...prev, username: event.target.value })) } >

              <option>{props.name}</option>
              <option>Anonymous</option>
              
              </select>  
              {username}
                
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Topic
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your topic"
                name="topic"
                value={topic}
                onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Text
              </label>
              <textarea

                type={"text"}
                className="form-control"

                name="forum"
                value={forum}
                onChange={(e) => onInputChange(e)} />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to={"/Forums"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div></>
  );
}