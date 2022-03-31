import React from 'react';
import { Link } from 'react-router-dom';

/*Footer Links and Image*/
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col">
                <Link to="/"><img src="./assets/ShopLogo.png"></img></Link>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsam, eaque voluptate asperiores ullam nihil laudantium
                    reprehenderit quae corporis eos expedita voluptates molestias quis eligendi impedit consequuntur nostrum molestiae accusamus?</p>
                </div>
                </div>
                <div className="col">
                    <h3>Quick Links</h3>
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
           
        </div>
        <div className='row'>
            <div className="col">
            <hr />
                <div className="copyRights">

                    <p className='copy'>&copy; 2022.
                    Powered by Laura Andrasev</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer