import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const [post,setPost] = useState()

    const fetchUser = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(Allpost => {
        setPost(Allpost)
      })
    }
  
    useEffect(()=>{
        fetchUser()
    },[])
  return (
    <div style={{backgroundColor:"#f2f2f2"}}>
        <h1 className='py-3'>FetchApi</h1>

        <div className="container">
            <div className="row">
                <div className="col-12 d-flex flex-wrap justify-content-center">
                    {
                        post && post.map((post,index)=>{
                            return(
                                <div className="col-4 p-2" key={index}>
                                <div className="card h-100 w-100 text-black shadow  " style={{border:"0", backgroundColor:"#c3ded6"}}>
                                    <div className="card-body">
                                        <h5>{post.id}</h5>
                                        <h5 className="card-title py-3">{post.title}</h5>
                                        <p className="card-text">{post.body}</p>
                                    </div>
                                </div>
      
                          </div>   
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default FetchApi
