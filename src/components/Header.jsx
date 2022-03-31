import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



/*Header Links*/
const Header =() => {

    const state = useSelector((state) => state.HandleCart);

  return (
    <div className='header'>

       
                        
                           
       
            <div className="middle row">
                <div className="col">
                    <Link to="/"><img src="./assets/ShopLogo.png"></img></Link>
                </div>
                <div className="col">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>


                </div>
                <div className="col">
                    <div className="buttons">
                        <Link to="/login">Login</Link>
                        <Link to="/resgister">Register</Link>
                        <Link to="/cart">Cart({state.length})</Link>
                    </div>

                </div>

            </div>
        </div>
  
  );
};

export default Header
