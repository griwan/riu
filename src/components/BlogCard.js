import "../styles/blog.css"
import { useEffect,useState } from "react";
import api from '../axios'
import Moment from 'react-moment';
import 'moment-timezone';


export const BlogCard = ({blogObject}) => {

    //excerpt trimmer
    const excerptLength = 130;//characters
    const truncateString = (string = '', maxLength = 50) => 
  string.length > maxLength 
    ? `${string.substring(0, maxLength)}<b>....</b>`
    : string

    const [authorDetails,setAuthorDetails] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get( `users/${blogObject.author}`)
            setAuthorDetails(response.data)
           //console.log("comp.author: ",response.data)
        }
        
        fetchData()
    }, [])


    return (
        <div className="blog-card">
            <div className="blog-card__feature-image">
                <img src={blogObject.acf.feature_image.url} alt={blogObject.title.rendered}/>
            </div>

            <div className="blog-card__body">     
                <h2>{blogObject.title.rendered}</h2>
                <p dangerouslySetInnerHTML={{__html: truncateString(blogObject.excerpt.rendered, excerptLength)}} />
                <div className="blog-card__body-author">
                   Author: {authorDetails!=null? authorDetails.name : "Loading.."}
                    <small>
                     <Moment format="D MMM YYYY hh:mm a" tz="Asia/Kathmandu" date={blogObject.date} /></small>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;