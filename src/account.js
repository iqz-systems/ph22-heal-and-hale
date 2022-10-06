import "./styles/account-style.scss";
import React from "react";
import Navbar from "./components/common/navbar/navbar";
import Footer from "./components/common/footer/footer";
import AccountDetails from "./components/account/account-details/account-details";
// import AdsFeedback from "./components/account/ads-feedback/ads-feedback";

export default class Account extends React.Component {
    render() {
        return (
            <>
                <Navbar isLoggedIn={true}></Navbar>
                <AccountDetails ></AccountDetails>
                {/* <AdsFeedback></AdsFeedback> */}
                <Footer></Footer>
            </>
        );
    }
}