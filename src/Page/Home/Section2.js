import React, { useEffect, useState } from "react"
import axios from "axios"
import Loading from "./Loanding"
import {Link} from "react-router-dom"

function Section2 () {
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
        <section className="container-fluid">
        <div className="row showing px-5 my-4 justify-content-between mt-5">
          <div className="col-6">
              <h4 className="pb-2 bold">Upcoming Movie</h4>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <a className="view font-s main-color bold " href="#">View All</a>
          </div>
        </div>

        <div className="btn-scroll btn-container mx-5">
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">September</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Oktober</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">November</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Desember</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Januari</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Februari</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Maret</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">April</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Mei</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Juni</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">July</button>
              <button type="button" className="button btn btn-outline-primary text-center me-2 mb-2">Agustus</button>
        </div>

        <div class="movie-scroll  mx-5 my-5 ">
        { movieSchedule.loading ? <Loading /> : movieSchedule.result.data.map((movie) => {
            return(          
                <div class="border movie-card text-center p-4 me-4 my-3"  key={movie.movie_id}>
                    <img src={"http://localhost:5000/static/" + movie.cover} class="mb-3 img-fluid" alt="movie" />
                    <div class="">
                    <h5 class="card-title">{movie.title}</h5>
                    <p class="card-text font-xs mb-4">{movie.categories}</p>
                    <div class="d-grid gap-2">
                        <Link to={"/movie-detail/" + movie.movie_id } key={movie.movie_id}><a href="" class="btn btn-outline-primary ">Details</a></Link>
                    </div>
                    </div>
                </div>    
         )
        })}   
        </div>
        
        </section>
    )
}



export default Section2