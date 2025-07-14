import React, { useEffect, useState } from 'react'
import NavPost from './NavPost'
import axios from 'axios'

const ViewPost = () => {
  const [post, changePost] = useState(
    [


    ]

  )
  const fetchdata = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      changePost(response.data)
    }).catch()
  }
  useEffect(() => { fetchdata() }, [])
  return (
    <div>
      <NavPost />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">UserID</th>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                  </tr>
                </thead>
                {post.map(
                  (value, index) => {
                    return (

                      <tbody>
                        <tr>
                          <th scope="row">{value.userId}</th>
                          <td>{value.id}</td>
                          <td>{value.title}</td>
                          <td>{value.body}</td>
                        </tr>

                      </tbody>

                    )
                  }
                )}
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPost