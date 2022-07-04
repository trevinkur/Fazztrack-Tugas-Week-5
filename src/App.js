import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './Page/Home';
import ListMovie from './Page/ListMovie';
import MovieDetail from './Page/MovieDetail';
import OrderPage from './Page/OrderPage';
import OrderHistory from './Page/OrderHistory';
import PaymentInfo from './Page/PaymentInfo';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-movie" element={<ListMovie />} />
      <Route path='/movie-detail'  element={<MovieDetail />}>
        <Route path=':movieId'  element={<MovieDetail />}/>
      </Route>
      <Route path="/:movieId/user/:userId/orderPage" element={<OrderPage/>} />
      <Route path='/:movieId/user/:userId/orderHistory' element={<OrderHistory/>} />
      <Route path='/:movieId/user/:userId/paymentInfo' element={<PaymentInfo/>} />
    </Routes>
  );
}

export default App;
