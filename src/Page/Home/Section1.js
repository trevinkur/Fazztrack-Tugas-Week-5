import React, { useEffect, useState } from "react"
import axios from "axios"
import Loading from "./Loanding"

function Section1 () {
    const [movieSchedule, setMovieSchedule] = useState({
        loading: false,
        result: {
            data: []
        }
    })

    
    useEffect(()=> {
        setMovieSchedule((prevState) => {
            return { ...prevState, loading: true}
        })
        axios({
            method: "GET",
            url: "http://localhost:5000/api/v1/movies"
        }).then((res) => {setMovieSchedule({
            loading:false,
            result: res.data
        })})
        .catch()
    }, [])
    return(
        <section className="grayscale-4 p-5 mb-4">
        <div className="row showing my-sm-4 px-sm-5 justify-content-between">
          <div className="col-4">
            <div className="movie d-flex flex-column align-items-center text-center">
              <h4 className="main-color font-m pb-2 bold">Now Showing</h4>
              <div className="line w-50 bg-main-color"></div>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center"><a className="view font-s main-color bold " href="#">View All</a></div>
        </div>
        
        <div className="movie-scroll  my-3 p-5">
            { 
                (movieSchedule.loading ? <Loading /> : movieSchedule.result.data.map((movie) => (
                    <div className="movie-container p-4 m-2 border border-white" key={movie.id}>
                        <img className="" src={"http://localhost:5000/static/" + movie.cover} alt={movie.title} />
                    </div> 
                ))
            )}  
        </div>  
        
      </section>
    )
}



export default Section1