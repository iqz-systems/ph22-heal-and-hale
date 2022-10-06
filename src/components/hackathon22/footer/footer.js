import './footer-style.scss';
import React from "react";
import { Link } from 'react-router-dom';
export default class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className={"footer hackfooter"}>
                    <div className={`hackfooterContainer ${this.props.isHome ? 'padding5': 'paddingbottom3'}`}>
                        <div className="mt-6 hackFlexContainer">
                            <img src="/images/hackathonHealAndHaleWhite.svg" width={144} alt="" />
                            <div>
                                <span>
                                    <Link to={"/HealnHale/home"}>Home</Link>
                                </span>
                                <span>
                                    <Link to={"/HealnHale/register"}>Registration</Link>
                                </span>
                                <span>
                                    <Link to={"/HealnHale/home"} >Login</Link>
                                </span>
                            </div>
                            <div>
                                <span className="social-icons" style={{marginRight:"0"}}>
                                    <Link to={"/HealnHale/home"}>
                                        <img src="/images/twitter-square.svg" alt="" />
                                    </Link>
                                </span>
                                <span className="social-icons">
                                    <Link to={"/HealnHale/home"}>
                                        <img src="/images/linkedin.svg" alt="" />
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <p className='hackCopyRight'>
                            Copyright 2022 at Heal & Hale, All Rights Reserved.
                        </p>
                    </div>
                </footer>
            </>
        );
    }
}