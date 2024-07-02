import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosApi = () => {
    const [comments, setComments] = useState();
    const FetchAxios = async () => {
        let alldata = await axios.get('https://jsonplaceholder.typicode.com/comments')
        setComments(alldata.data);
        console.log(alldata.data);
    }
    useEffect(() => {
        FetchAxios();
    }, [])

    return (
        <div style={{ backgroundColor: "#fff" }}>
            <h1 className='py-3'>AxiosApi</h1>
            <div className='container'>
                <div className='row'>
                    <div className="col-12 d-flex flex-wrap justify-content-center">
                       {
                        comments && comments.map((item, index) => {
                            return(
                                <div className="col-4 p-2" key={index}>
                                <div className="card w-100 h-100 shadow" style={{backgroundColor:'#f9dada',border:"0"}}>
                                    <div className="card-body">
                                        <h4>{item.id}</h4>
                                        <h5 className="card-title">{item.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted p-3">{item.email}</h6>
                                        <p className="card-text">{item.body}</p>
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

export default AxiosApi
