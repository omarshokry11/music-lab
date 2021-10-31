import React from "react";
import MainNavBar from "./Layout/Component/MainNavBar";
import HomePage from "./Layout/Pages/HomePage";
import FeaturesPage from "./Layout/Pages/FeaturesPage";
import PricingPage from "./Layout/Pages/PricingPage";
import DownloadPage from "./Layout/Pages/DownloadPage";
import BlogPage from "./Layout/Pages/BlogPage";
import ContactPage from "./Layout/Pages/ContactPage";
import MainFooter from "./Layout/Component/MainFooter";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default function App() {
  return (
    <div className="main-app-content">
        <BrowserRouter>
            <MainNavBar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/features" exact component={FeaturesPage} />
                <Route path="/pricing" exact component={PricingPage} />
                <Route path="/download" exact component={DownloadPage} />
                <Route path="/blog" exact component={BlogPage} />
                <Route path="/contact" exact component={ContactPage} />
            </Switch>
            <MainFooter />
        </BrowserRouter>
    </div>
  );
}
