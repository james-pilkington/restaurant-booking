import React, { useState, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Navigate, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import littlelemon_logo from "./images/littlelemon_logo.png"
import small_logo from "./images/small_logo.png"
import lemon_chicken from "./images/lemon_chicken.jpg"
import bruschettta from "./images/bruschetta.jpg"
import baklava from "./images/baklava.jpg"
import chef from "./images/lemon_chicken.jpg"


import Booking from "./components/Booking";
import ConfirmedBooking from "./components/ConfirmedBooking";



function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Hero />
      <About />
      <Footer />
    </React.Fragment>
    </div>
  );


  // return (
  //   <Router>
  //     <header>
  //       <Nav />
  //     </header>
  //     <main>
  //       <Routes>
  //         <Route path="/" element={<CallToAction />} />
  //         <Route path="/booking" element={<BookingPage />} />
  //         <Route path="/booking2" element={
  //           <BookingPage2
  //             date={date}
  //             time={time}
  //             guests={guests}
  //             occasion={occasion}
  //             availableTimes={availableTimes}
  //             setDate={setDate}
  //             setTime={setTime}
  //             setGuests={setGuests}
  //             setOccasion={setOccasion}
  //             dispatch={dispatch}
  //           />}
  //         />
  //         <Route path="/booked-times" element={<BookedTimes />} /> {/* New route */}
  //         <Route path="/confirmed" element={<ConfirmedBooking />} />
  //       </Routes>
  //     </main>
  //     <footer>
  //       <Footer2 />
  //     </footer>
  //   </Router>
  // );
}


// Nav Component
function Nav() {
  return (
    <nav>
      <img src={littlelemon_logo} alt="Little Lemon Logo" ></img>
      <ul>
      <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><a>Menu</a></li>
                <li><Link to="/Booking">Reservations</Link></li>
      </ul>
    </nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
            <section>
            <div>
                <img src={small_logo} />
            </div>
            <div>
                <h3>Document Navigation</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
                <li>123 Street Address<br />Boston, MA</li>
                <li>+1 (123) 456 7890</li>
                <li>contact@littlelemon.com</li>
            </ul>
            </div>
            </section>
        </footer>
  );
}

function Hero() {
  const dishes = [
    {
      title: "Bruschetta",
      description: "Grilled bread rubbed with garlic, topped with fresh tomatoes, olive oil, and basil.",
      image: bruschettta, // replace with actual image path
    },
    {
      title: "Lemon Herb Chicken",
      description: "Grilled chicken breast marinated with lemon and fresh herbs, served with roasted vegetables.",
      image: lemon_chicken, // replace with actual image path
    },
    {
      title: "Baklava",
      description: "Traditional Mediterranean dessert made of layers of filo pastry, filled with nuts and honey.",
      image: baklava, // replace with actual image path
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? dishes.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === dishes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <header id="hero">
      <section>
        <div>
          <h2>Hero Dishes!</h2>
          <p>Come in and try our new dishes:</p>
        </div>
        <div className="carousel-container">
          <button onClick={handlePrev} aria-label="Previous Dish">❮</button>
          <div className="carousel-content">
            <img src={dishes[currentIndex].image} alt={dishes[currentIndex].title} />
            <h4>{dishes[currentIndex].title}</h4>
            <p>{dishes[currentIndex].description}</p>
          </div>
          <button onClick={handleNext} aria-label="Next Dish">❯</button>
        </div>
      </section>
    </header>
  );
}


function About() {
  return (
    <div id="contact">
                <h3>Contact</h3>
            <ul>
                <li>123 Street Address<br />Boston, MA</li>
                <li>+1 (123) 456 7890</li>
                <li>contact@littlelemon.com</li>
            </ul>
      </div>
  );
}

// function Header2() {
//   return(
//     <header>
//         <section>
//         <div>
//         <h2>Little Lemon</h2>
//         <h3>Chicago</h3>
//         <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
//         <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
//         </div>
//         <div>
//             <img src={chef} />
//         </div>
//         </section>
//     </header>
// )
// }

// function Main2() {

//     // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

//     //Chrome was blocking running the script on the index page so I added it here. "https://chromestatus.com/feature/5629709824032768"
//     const seededRandom = function (seed) {
//         var m = 2**35 - 31;
//         var a = 185852;
//         var s = seed % m;
//         return function () {
//             return (s = s * a % m) / m;
//         };
//     }

//     const fetchAPI = function(date) {
//         let result = [];
//         let random = seededRandom(date.getDate());

//         for(let i = 17; i <= 23; i++) {
//             if(random() < 0.5) {
//                 result.push(i + ':00');
//             }
//             if(random() < 0.5) {
//                 result.push(i + ':30');
//             }
//         }
//         return result;
//     };
//     const submitAPI = function(formData) {
//         return true;
//     };

//     const initialState = {availableTimes:  fetchAPI(new Date())}
//     const [state, dispatch] = useReducer(updateTimes, initialState);

//     function updateTimes(state, date) {
//         return {availableTimes: fetchAPI(new Date(date))}
//     }
//     const navigate = useNavigate();
//     function submitForm (formData) {
//         if (submitAPI(formData)) {
//             navigate("/confirmed")
//         }
//     }

//     return(
//         <main>
//             <Routes>
//                 <Route path="/" element={<Header />} />
//                 <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
//                 <Route path="/confirmed" element={<ConfirmedBooking/> } />
//             </Routes>
//         </main>


//     )
// }

export default App;
