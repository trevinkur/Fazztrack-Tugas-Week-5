import axios from "axios"
import React, {useState, useEffect} from "react"
import Loading from "../Home/Loanding"

function Schedule(props) {
    const { setRefetch, refetch, showSchedule, setSearch, search} = props
    
    return(
        <section class="bg-lightgray p-4">
        <div class="row text-center mb-1 mt-5">
            <h4 class="font-d-m bold">Showtimes and Ticket</h4>
        </div>
        <div class="row justify-content-center mb-2 p-5">
            <div class="col-md-2">
                    <select className="form-select form-select-lg mb-3 align-self-center" aria-label=".form-select-lg example "
                        onChange={(e) => setSearch((prevState) => {console.log(search);setRefetch(!refetch); return {...prevState, schedule: e.target.value}})} 
                        >
                        <option selected>Schedule</option>
                        <option value="2022-06-25">2022-06-25</option>
                        <option value="2022-06-30">2022-06-30</option>
                        <option value="2022-06-29">2022-06-29</option>
                    </select>
            </div>
            <div class="col-md-2">
                    <select className="form-select form-select-lg mb-3 align-self-center" aria-label=".form-select-lg example "
                        onChange={(e) => setSearch((prevState) => {setRefetch(!refetch); return {...prevState, place: e.target.value}})} 
                        >
                        <option selected>place</option>
                        <option value="purwokerto">Purwokerto</option>
                        <option value="bekasi">Bekasi</option>
                    </select>
            </div>
        </div>
        <div class="row">
            <div class="container d-flex flex-wrap justify-content-center">
                {showSchedule.loading ? <Loading/> : showSchedule.result.data.map((item) => (
                    <ScheduleCard  schedule={item} key="item.schedule_id"/>
                    )
                )}
      
            </div>
        </div>
    </section>
    )
}

function ScheduleCard(props) {
    const schedule = props.schedule
    return(<div class="card m-3 ">
            <div class="row card-title py-4 px-4 border-bottom align-items-center">
                <div class="col logo  text-center">
                    <img src="./img/logo-edu.svg" alt="logo" />
                </div>
                <div class="col">
                    <h3>{schedule.cinema_name}</h3>
                    <p class="font-xs">{schedule.address}</p>
                </div>
            </div>
            <div class="row card-body">
                <div class="container-fluid d-flex flex-wrap align-items-center mb-2 px-4">
                    <p class="font-xs me-3 mb-3 ">08:30AM</p>
                    <p class="font-xs me-3 mb-3">08:30AM</p>
                    <p class="font-xs me-3 mb-3">08:30AM</p>
                    <p class="font-xs me-3 mb-3">08:30AM</p>
                    <p class="font-xs me-3 mb-3">08:30AM</p>
                    <p class="font-xs me-3 mb-3">08:30AM</p>
                    <p class="font-xs me-3 mb-3">08:30AM</p>
                </div>
            </div>
            <div class="row price mb-4 px-4 justify-content-between">
                <div class="col-3">
                    <p class="font-s">Price</p>
                </div>
                <div class="col-6">
                    <p class="font-d-xs bold">$10.00/seat</p>
                </div>
            </div>
            <div class="row mb-4 px-5">
                <button class="btn btn-primary shadow p-3">Book Now</button>
            </div>
    </div>)
}

export default Schedule