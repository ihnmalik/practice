import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';



const Home = () => (
    <div>
        <h1>This is the HomePage</h1>
    </div>
);

const Portfolio = (props) => {
    console.log(props);
    return (
        <div>
            <h1>My Work</h1>
            <p>Check Out the Following things that i have done</p>
            <Link to="/portfolio/1">Item One</Link>
            <Link to="/portfolio/2">Item two</Link>
        </div>
    );
}


const PortfolioItem = (props) => {
    console.log(props);
    return(
        <div>
            <h1>A thing i'hv done</h1>
            <p>This Page is for the item with the id of {props.match.params.id}</p> 
        </div>
    );
}

const ContactUs = () => (
    <div>
        <h1>Contact Us</h1>
        <p>Contact us - using email <a>ihnmalik@gmail.com</a></p>
    </div>
);

const NotFound = () => (
    <div>
        <h1>404! - Page not Found</h1>
    </div>
);


const Header = () => (
    <div>
        <h1>Header Area</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact Us</NavLink>
    </div>
);

const AppMain = () => (
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/portfolio" component={Portfolio} exact={true}/>
                    <Route path="/portfolio/:id" component={PortfolioItem}/>
                    <Route path="/contact" component={ContactUs} />
                    <Route component={NotFound} />
                </Switch>
        </div>
    </BrowserRouter>
);


export default AppMain;