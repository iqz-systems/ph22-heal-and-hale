import './register-style.scss';
import React from "react";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { Helmet } from 'react-helmet';

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            showembed: false
        };

        this.showembed = this.showembed.bind(this);
    }
    showembed(val) {
        this.setState({
            showembed: true
        });
    }
    render() {
        return (
            <>
                <Navbar isHome={false}></Navbar>
                <Helmet>
                    <script src='https://community.constellation.pega.io/c11n/pega-embed.js' ></script>
                </Helmet>
                <div  style={{position:"relative", backgroundImage:(!this.state.showembed ? null :"URL('/images/hackathonregbk.jpg')")}}>
                <section className='hackRegContainer'>
                    {this.state.showembed === true ?
                        <div style={{paddingBottom:"3rem"}} className={"column " + (this.state.showembed ? null : 'hidden')}>
                            <pega-embed id='theEmbed' action='createCase' caseTypeID='IQZ-HnH-Work-SMERegister'
                                casePage='' appAlias='heal--hale' pegaServerUrl='https://9cypo4ma.pegace.net/prweb/' 
                                staticContentUrl='https://community.constellation.pega.io/c11n/' authService='pega' 
                                clientId='36223693959490201549' style={{minHeight: "500px"}}
                                userIdentifier='HnHBotOperator' password='UnVsZXNAMTIzNA==' >
                            </pega-embed>
                        </div> :
                        <> 
                            <div  style={{paddingBottom:"3rem"}}>
                            <h2>Terms and conditions </h2>
                            <div className='termsContent'>
                                <p className='termsTitle'>
                                    Collection of your Personal Information
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                            <div className='termsContent'>
                                <p className='termsTitle'>
                                    Use of your Personal Information
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                            <div className='termsContent'>
                                <p className='termsTitle'>
                                    Sharing Information with Third Parties
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                            <div className='termsContent'>
                                <p className='termsTitle'>
                                    Tracking User Behavior
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                            <div className='button is-primary registerBtn' onClick={this.showembed}>
                                Register
                            </div>
                            </div>
                        </>
                    }
                </section>
            </div>
                <Footer isHome={false}></Footer>
            </>
        );
    }
}