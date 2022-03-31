import React from 'react'
import Products from './Products'

/* Home Background Image*/
const Home = () => {
  return (
    <div className='home'>
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="./assets/background.jpg" alt="hero" />
                        <div className='content'>
                            <h5 className="title">New Collection</h5>
                            <p className="subtitle">
                                Check Out!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Products />
    </div>
  )
}

export default Home