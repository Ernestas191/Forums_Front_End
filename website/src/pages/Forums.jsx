import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import _ from "lodash";
import Navbar from '../Navbar';

export default function Forums() {
  
  const pageSize= 10;

  
 
  const [users, setUsers] = useState( [] );

  const [paginatedPosts, setpaginatedPosts] = useState([]);

  const [curentPage, setcurrentPage] = useState(1);

  const {id} = useParams()

  useEffect(() => {
   
       loadUsers();
       
    },[]);

      const loadUsers=async() => {
        const result=await axios.get("http://localhost:8080/Users").then((res)=>{
        
            console.log(res.data)
            setUsers(res.data)
            setpaginatedPosts(_(res.data).slice(0).take(pageSize).value());
      
          })
        
      }

    
      const deleteforum =async (id) => {
        await axios.delete(`http://localhost:8080/add/${id}`)
        loadUsers();
      }
const pageCount = users? Math.ceil(users.length/pageSize) : 0;
  if (pageCount === 1 ) return null;

  const pages = _.range(1,pageCount+1)

  const pagination = (pageNo)=>{
    setcurrentPage(pageNo);
    const startIndex = (pageNo -1) * pageSize;
    const paginatedPosts = _(users).slice(startIndex).take(pageSize).value();
    setpaginatedPosts(paginatedPosts)
  }

  return (
    <><Navbar /><div className="container">
      <div className="py-4">


        <div class="all-forums-background">
          <button className="forum_post" href="/Add"><Link className="forrum_button_text" to="/Add"> post</Link></button>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Usser</th>
                <th scope="col">Topic</th>

              </tr>
            </thead>
            <tbody>

              {paginatedPosts.map((user, index) => (
                <tr key={index}>

                  <td>{user.username}</td>
                  <td className="forum-topic">{user.topic}</td>
                  <td className="forum-click">
                    <Link className="btn-edit"
                      to={`/view/${user.id}`}
                    ><button className="btn-delete">View</button></Link>
                    <Link className="btn-delete"
                      to={`/edit/${user.id}`}
                    ><button className="btn-delete">Edit</button></Link>
                    <button className="btn-delete"
                      onClick={() => deleteforum(user.id)}
                    >Delete</button>
                  </td>

                </tr>
              ))}





            </tbody>






          </table>
          <nav className="d-flex ">
            <ul className="pagination">
              {pages.map((page) => (
                <li
                  className={page === curentPage ? "page-item active" : "page-item"}
                ><p className="page-link"
                  onClick={() => pagination(page)}
                > {page} </p></li>
              ))}


            </ul>
          </nav>








        </div>

      </div>




    </div></>
  );
}

