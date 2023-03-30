import React,{useState} from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import homeicon from '@mui/icons-material/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { Badge } from '@mui/material'
import { Button } from 'react-bootstrap'

export const Hero = ({ movies }) => {
const [bg, setbg] = useState(0)
let navigate=useNavigate()
  
const review=(id)=>{
    navigate(`/reviews/${id}`)
}
    return (
        <div className="movie-carousel-container" >
            <Carousel
                IndicatorIcon={<homeicon />}
                indicatorIconButtonProps={{
                    style: {
                        padding: '6px',    // 1
                        marginRight: '5px',
                        backgroundColor: 'grey'       // 3
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        backgroundColor: 'orange' // 2
                    }
                }}
                indicatorContainerProps={{
                    style: {
                        marginTop: '50px', // 5
                        // textAlign: 'center' // 4
                    }

                }}
                stopAutoPlayOnHover={true}
                interval={5000}
                animation={"slide"}
                duration={1100}
                
                // autoPlay={false}
                navButtonsAlwaysVisible={true}
                
            >
                {
                    movies.map((movie) => {
                        return (
                            <Paper>
                                <div className="movie-card-container" >
                                    <div className="movie-card" style={{ "--img": `url(${movie.backdrops[0]})` }}>
                                        <div className="movie-detail">
                                            <div className="movie-poster ">
                                            
                                                {/* <img src={movie.backdrops[7]} className="w-100 h-100 background-type-cover" style={{"backgroundSize":"100% 100%"}} alt="" /> */}
                                                <img src={movie.poster} alt=""  />
                                            </div>
                                            <div className="movie-title w-25">
                                                <h3>{movie.title}</h3>
                                                <div className="d-flex w-100 flex-wrap mt-2 justify-content-evenly">
                                                {
                                                    movie.genres.map((genre) =>{
                                                        return (
                                                    <Badge badgeContent={genre} color="secondary"
                                                     anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'right',
                                                        }} 
                                                    className="px-3 "
                                        
                                                        />
                                                        )
                                                    })
                                                }
                                                </div>
                                                <div className="mt-4 w-75 p-1 rounded" style={{"border":"2px solid yellow"}}>
                                                <Carousel
                                                animation='slide'
                                                indicators={false}
                                                interval={1600}
                                                >
                                                    {
                                                        movie.backdrops.map((img)=>{
                                                            return(
                                                            <Paper>
                                                                <div className="w-100 ">
                                                                    <img src={img} style={{"width":"100%"}}  className="rounded shadow-lg" alt="" />
                                                                </div>
                                                            </Paper>)
                                                        })
                                                    }
                                                </Carousel>
                                                </div>
                                            </div>
                                            <div className="movie-buttons-container">
                                                <Link to={`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                    <div className="play-button-icon-container">

                                                        <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay} />
                                                    </div>
                                                </Link>
                                            <div className="movie-review-button">
                                                <Button variant ="light" style={{"backgroundColor":"#363636"}} onClick={() =>review(movie.imdbId)} >Reviews</Button>
                                                
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
