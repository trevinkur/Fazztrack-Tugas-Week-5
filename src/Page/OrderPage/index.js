import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"
import "./orderPage.css"


function OrderPage() {
    return(<>
        <Navbar />
        <section class="main bg-lightgray">
        <div class="row">
            <div class="col-lg-8">
                <div class="container movie-container-desc d-flex flex-column p-5">
                    <h3 class="movie-selected font-d-m bold mb-3">Movie Selected</h3>
                    <div class="container movie-title d-flex justify-content-between bg-white p-4 mb-3">
                        <h3>Spider-Man: Homecoming</h3>
                        <button class="btn btn-outline-primary">Change Movie</button>
                    </div>
                    <h3 class="font-d-m bold my-3">Choose Your Seat</h3>
                    <div class="container d-flex flex-column seat-placemen bg-white p-lg-4 py-3  mb-5 align-items-center">
                        <div class="row name mb-4 text-center w-75 align-items-center">
                            <div class="col">
                                <p class="font-s mb-3">screen</p>
                                <div class="line grayscale-1 "></div>       
                            </div>                   
                        </div>
                        <div class="row tables">
                            <div class="col table-1">
                                <div class="container d-flex">
                                    <p class="letter font-s me-3 mb-2">A</p>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div> 
                            
                            <div class="col table-2">
                                <div class="container d-flex">
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2 bg-main-color"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row tables">
                            <div class="col table-1">
                                <div class="container d-flex">
                                    <p class="letter font-s me-3 mb-2">B</p>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div> 
                            
                            <div class="col table-2">
                                <div class="container d-flex">
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row tables">
                            <div class="col table-1">
                                <div class="container d-flex">
                                    <p class="letter font-s me-3 mb-2">C</p>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div> 
                            
                            <div class="col table-2">
                                <div class=" container d-flex">
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row tables">
                            <div class="col table-1">
                                <div class="container d-flex">
                                    <p class="letter font-s me-3 mb-2">D</p>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div> 
                            
                            <div class="col table-2">
                                <div class="container d-flex">
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row tables">
                            <div class="col table-1">
                                <div class="container d-flex">
                                    <p class="letter font-s me-3 mb-2">E</p>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div> 
                            
                            <div class="col table-2">
                                <div class="container d-flex">
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row tables">
                            <div class="col table-1">
                                <div class="container d-flex">
                                    <p class="letter font-s me-3 mb-2">F</p>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div> 
                            
                            <div class="col table-2">
                                <div class="container d-flex">
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row tables">
                            <div class="col table-1">
                                <div class="container d-flex">
                                    <p class="letter font-s me-3 mb-2">G</p>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div> 
                            
                            <div class="col table-2">
                                <div class="container d-flex">
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                    <div class="seat me-2 mb-2"></div>
                                </div>
                            </div>
                        </div>

                        <div class="row table-num tables mb-4">
                            <div class="col table-1">
                                <div class="container d-flex">
                                    <p class="font-s me-3 mb-2 invisible">A</p>
                                    <div class="num me-2 mb-2">1</div>
                                    <div class="num me-2 mb-2">2</div>
                                    <div class="num me-2 mb-2">3</div>
                                    <div class="num me-2 mb-2">4</div>
                                    <div class="num me-2 mb-2">5</div>
                                    <div class="num me-2 mb-2">6</div>
                                    <div class="num me-2 mb-2">7</div>
                                </div>
                            </div> 
                            
                            <div class="col table-2">
                                <div class="container d-flex">
                                    <div class="num me-2 mb-2">8</div>
                                    <div class="num me-2 mb-2">9</div>
                                    <div class="num me-2 mb-2">10</div>
                                    <div class="num me-2 mb-2">11</div>
                                    <div class="num me-2 mb-2">12</div>
                                    <div class="num me-2 mb-2">13</div>
                                    <div class="num me-2 mb-2">14</div>
                                </div>
                            </div>
                        </div>

                        <h4 class="font-d-xs bold mb-4 mt-3 mx-4 align-self-start">Seating Key</h4>
                        <div class="row d-flex flex-wrap mb-3">
                            <div class="col-sm-3 w-50 ">
                                <div class="container d-flex">
                                    <div class="seat-available me-2"></div>
                                    <p class="font-s">Available</p>
                                </div>
                            </div>
                            <div class="col-sm-3 w-50 mb-3">
                                <div class="container d-flex">
                                    <div class="seat-selected me-2"></div>
                                    <p class="font-s">Selected</p>
                                </div>
                                
                            </div>
                            <div class="col-sm-3 w-50 mb-3">
                                <div class="container d-flex">
                                    <div class="seat-sold me-2"></div>
                                    <p class="font-s">Sold</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-around">
                        <div class="checkout col-sm-4">
                            <div class="d-grid gap-2">
                                <button class="btn btn-outline-primary p-3">Change Your Movie</button>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary p-3 shadow">Chekout Now</button>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card m-5">
                    <div class="card-header mb-3 text-center bg-white my-3">
                        <img src="./img/logo-cine-one.svg" alt="Cinema" />
                        <h3 class="font-d-m bold">CineOne 21 Cinema</h3>
                    </div>
                    <div class="card-body m-3">
                        <div class="row justify-content-between">
                            <div class="col-4 mb-3">
                                <p class="font-xs">Movie Selected</p>
                            </div>
                            <div class="col-8 mb-3 text-end">
                                <p class="font-xs bold ">Spider-Man: Homecoming</p>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-8 mb-3 ">
                                <p class="font-xs ">Tuesday, 07 July 2020</p>
                            </div>
                            <div class="col-4 mb-3 text-end">
                                <p class="font-xs bold ">02:00</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8 mb-3">
                                <p class="font-xs">One ticket price</p>
                            </div>
                            <div class="col-4 mb-3 text-end">
                                <p class="font-xs bold ">$10</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 mb-3">
                                <p class="font-xs">Seat choose</p>
                            </div>
                            <div class="col-6 mb-3 text-end">
                                <p class="font-xs bold ">C4, C5, C6</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-white p-4">
                        <div class="row justify-content-between">
                            <div class="col-6 d-flex align-items-center">
                                <p class="font-d-s bold">Total Payment</p>
                            </div>
                            <div class="col-4 text-end">
                                <p class="font-d-s bold main-color">$30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>)
}

export default OrderPage