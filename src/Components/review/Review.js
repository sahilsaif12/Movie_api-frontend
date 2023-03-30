import React,{useEffect,useRef,useState,forwardRef} from 'react'
import api from '../../Api/axiosConfig';

import { Col,Row,Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ReviewFrom } from '../reviewForm/ReviewFrom';
export const Review = () => {
    
    const revText= useRef(null)
    const [movie, setmovie] = useState(null)
    const [reviews, setreviews] = useState(null)
    let params = useParams()
    let imdbId=params.imdbId
    const  singleMovieData=async(imdbId)=> {
        try {
          const response=await api.get(`/api/v1/movies/${imdbId}`);
          setmovie(response.data)
          setreviews(response.data.reviewIds)
          console.log(response.data);
    
        } catch (error) {
          console.log(error);
        }
      }
    useEffect(() => {
        singleMovieData(imdbId)
}, [])
   
const  handleSubmit=async(e)=> {
    e.preventDefault();
    let rev=revText.current
    console.log(revText);
    try {
        const response=await api.post(`/api/v1/reviews`,{reviewBody:rev.value,imdbId:imdbId});
        let updatedReview=[...reviews,{body:rev.value}]
        rev.value=""
        setreviews(updatedReview)
  
      } catch (error) {
        console.log(error);
      }
}
  return (
    <Container>
        <Row  style={{"height":"92vh"}}>
            <Col className='h-100'>
            <div className="d-flex h-100 justify-content-center align-items-center">
        <img className="h-75"  src={movie?.poster}alt="" />
            </div>
            </Col>
            <Col>
                <Col>
                <ReviewFrom revText={revText} labelText="Write a Review" handleSubmit={handleSubmit}/>
                </Col>
                <Col>
                    <hr />
                    {
                        reviews?.map((review)=>(
                            <Col>🖋  {review.body}
                                <Col><hr /></Col>
                            </Col>

                        ))
                    }
                </Col>
            </Col>
        </Row>
    </Container>
  )
}
