import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Album.css"
import Dashboard from "./Dashboard"
const Album = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                console.log(res)
                setPhotos(res.data);

            })
            .catch(err => {
                console.error(err)
            }, [])


         
    })
    return (
        <div>
            <Dashboard />
            {photos.map(photo => (
                <div class="card" >
                    <img className="image" src={photo.thumbnailUrl}  class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5>Title</h5>
                        <p class="card-text">{photo.title}</p>
                    </div>
                    <button className="img__btn" onClick= {photo.url} >Preview</button>
                </div>
            ))}
        </div>
    )
}

export default Album
