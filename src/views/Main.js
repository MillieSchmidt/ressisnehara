import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Home from "./Home";
import BookPage from "./BookPage";
import PublishBook from "./PublishBook";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Main = () => {
    return(
        <div>
            <div>
                <Navigation />
                <Header />
            </div>
            
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/book/:id' component={BookPage} />
                <Route path='/publish' component={PublishBook} />
                <Route path='/contact' component={Contact} />
            </Switch>

            <Footer />
        </div>
    )
}

export default Main;