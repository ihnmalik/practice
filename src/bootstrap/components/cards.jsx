import React from 'react';
import maleLogo from '../images/img1.png';
import femaleLogo from '../images/img2.png';



const Cards = () => (
    <div className="container" style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block" }}>
            <div className="card" style={{ width: 200 + 'px', float: "left", marginRight: 10 + "px" }}>
                <img className="card-img-top" src={maleLogo} />
                <div className="card-body">
                    <h4 className="card-title">Hasaan Malik</h4>
                    <p className="card-text">Some Example Text</p>
                    <a href="#" className="btn btn-primary" >See Profile</a>
                </div>
            </div>
            <div className="card" style={{ width: 200 + 'px', float: "left", marginRight: 10 + "px" }}>
                <img className="card-img-top" src={femaleLogo} />
                <div className="card-body">
                    <h4 className="card-title">Hadia</h4>
                    <p className="card-text">Some Example Text</p>
                    <a href="#" className="btn btn-primary" >See Profile</a>
                </div>
            </div>
            <div className="card" style={{ width: 200 + 'px', float: "left", marginRight: 10 + "px" }}>
                <img className="card-img-top" src={maleLogo} />
                <div className="card-body">
                    <h4 className="card-title">Faizan Malik</h4>
                    <p className="card-text">Some Example Text</p>
                    <a href="#" className="btn btn-primary" >See Profile</a>
                </div>
            </div>
            <div className="card" style={{ width: 200 + 'px', float: "left", marginRight: 10 + "px" }}>
                <img className="card-img-top" src={femaleLogo} />
                <div className="card-body">
                    <h4 className="card-title">Amirah</h4>
                    <p className="card-text">Some Example Text</p>
                    <a href="#" className="btn btn-primary" >See Profile</a>
                </div>
            </div>
        </div>
    </div>
);

export default Cards;