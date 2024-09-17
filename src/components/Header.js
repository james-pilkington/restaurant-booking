import React from "react";
import food1 from "../images/chef.jpg"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <p>Come try our authentic greek flavors!</p>
            <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img src={food1} />
            </div>
            </section>
        </header>
    )
}

export default Header;