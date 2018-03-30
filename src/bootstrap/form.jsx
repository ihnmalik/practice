import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dropdown, DropdownMenu, DropdownItem, Navbar } from 'reactstrap';
import { Nav, NavbarToggler, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/cards.jsx';
import NavBar from './components/navbar.jsx';
import MainForm from './components/Form.jsx';
import InfoCard from './components/infoCard.jsx';

const MainPage = () => (
    <div>
        <NavBar />
        {/* <MainForm />
        <Cards /> */}
        <InfoCard />
    </div>
);






var app = document.getElementById('content');

ReactDOM.render(<MainPage />, app)


console.log('bootstrap');








// const MainForm = () => (
//     <div>
//         <form>
//             <fieldset className="form-group">
//                 <h4 htmlFor="exampleInputEmail">Email address</h4>
//                 <input className="form-control" type="email" id="exampleInputEmail" placeholder="Enter Your Email"/>
//             </fieldset>
//         </form>
//     </div>
// );
