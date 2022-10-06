import './home-style.scss';
import React from "react";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { Helmet } from 'react-helmet';

export default class Home extends React.Component {
   
    componentDidMount(){
        document.getElementById("hackathonheader").scrollIntoView({ behavior: 'smooth' });
    }
    render() {
        return (
            <>
                <section id="hackathonheader" className="hero is-primary is-fullheight hackHero">
                    <div className="hero-head topBar">
                        <Navbar isHome={true}></Navbar>
                    </div>
                    <div class="hero-body">
                        <div className='hackhero-content'>
                            <h1>Happiness You <span className='herohack-highlighted'>Deserve </span> </h1>
                            <p style={{ color: '#313131' }}>Helping users self-manage stressors by blending AI-guided listening with professional expert support. Anonymous, Available 24/7, Clinically safe.</p>
                        </div>
                        <div class="button is-small bd-show">
                            <figure className="">
                                <span onClick={() => { document.getElementById("content").scrollIntoView({ behavior: 'smooth' }); }}>
                                    <img src="/images/hackathonarrowdown.svg" alt="" />
                                </span>
                            </figure>
                        </div>
                    </div>
                </section>

                <div id="content" className="Hackathon hackAboutUs">
                    <section className="pegaSection p5">
                        <div className="columns m-0 is-vcentered" id="aboutus">
                            <div className="Hackathon column p-0 ">
                                <div className='contentContainer'>
                                    <p className='hackSectionTitle'>About Us</p>
                                    <p className="hackTitle savings-title is-size-4">Heal and Hale will boost your health condition in a better way</p>
                                    <p className="mt-3">Our program is based on cognitive behavioral therapy (CBT) using Pega AI. Since the therapy is web-based, you may access our program from throughout the world.We are a dedicated online-based team of consultant therapists, cognitive behavioral therapists, practitioners and support staff that collaboratively works to help people in need of emotional support.
                                    Making professional therapy accessible and convenient so anyone who struggles with life’s challenges can get help, anytime and anywhere.</p>
                                    <div className="buttons">
                                        <button className={"button hackSectionPrimBtn savings-button mt-5 "}>Register</button>
                                        <button className={"button hackSectionSecBtn savings-button mt-5 "}>Login</button>
                                    </div>
                                </div>
                            </div>
                            <div className="Hackathon column p-0 ">
                                <figure class="image is-1by1">
                                    <img src="/images/hackathonabout.png" alt='about-us' />
                                </figure>
                            </div>
                        </div>
                    </section>
                    <section className='pegaSection hackSolutions'>
                        <div className='columns is-vcentered'>
                            <div className='Hackathon column'>
                                <p className='hackSectionTitle'>Solutions</p>
                                <p className="hackTitle savings-title is-size-4">Everyone has different needs</p>
                            </div>
                            <div className='Hackathon column'>
                                <p className="mt-3">
                                 At Heal & Hale, we are committed to providing a unique
                                 solution tailored to your needs. We value individuality, and with the assistance of 
                                 Pega AI and experts, we provide you with solutions for a happier life.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className='pegaSection hackCardSection p5'>
                        <div className='columns is-9'>
                            <div className='Hackathon column'>
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-3by2"
                                            style={{
                                                backgroundImage: "url('/images/hackathonindividuals.png')", backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain"
                                            }}>
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="hackTitle title is-4">Individuals</p>
                                            </div>
                                        </div>

                                        <div class="content">
                                            Do you have trouble sleeping, are constantly stressed, and are exhausted? Allow us to help you live a better life.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-3by2"
                                            style={{
                                                backgroundImage: "url('/images/hackathoncouples.png')", backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain"
                                            }}>
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="hackTitle title is-4"> Couples</p>
                                            </div>
                                        </div>

                                        <div class="content">
                                            Do you feel like your relationship isn't what it used to be? Are you experiencing withdrawal, hopelessness, or mood swings? With our expert guidance give your relationship a second chance.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-3by2"
                                            style={{
                                                backgroundImage: "url('/images/hackathonchildren.png')", backgroundRepeat: "no-repeat",
                                                backgroundSize: "contain"
                                            }}>
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="hackTitle title is-4">Children</p>
                                            </div>
                                        </div>

                                        <div class="content">
                                            Does your child have low energy, little interest in things, poor concentration? Let us help your child have a better outlook on life.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='hackVideoSection'>
                        <div className='titleContainer'>
                            <h3 className='videoSecTitle'>How it works</h3>
                            <p className='description'>We’re here to boost your mental and physical condition</p>
                        </div>
                        <div class="bd-snippet bd-snippet-code  bd-highlight-full bd-is-more bd-is-more-clipped"
                            style={{
                                backgroundImage: "url('/images/hackathonhow-it-works.png')", backgroundRepeat: "no-repeat",
                                backgroundSize: "contain"
                            }}>
                            <div class="button is-small bd-show">
                                <figure className="">
                                    <iframe title='how it works' style={{ borderRadius: "2rem" }} class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameborder="0" allowfullscreen></iframe>
                                </figure>
                            </div>
                        </div>
                        {/* <div class="columns is-centered">
                            <div class="column is-half">
                                <figure className=" is-fullwidth image">
                                    <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameborder="0" allowfullscreen></iframe>
                                </figure>
                            </div>
                        </div> */}
                    </section>
                    <section className='pegaSection hackVoluteerSection'>
                        <div className="columns m-0 is-vcentered">
                            <div className="Hackathon column p-0 ">
                                <div className="">
                                    <p className='hackSectionTitle'>Volunteers</p>
                                    <p className="hackTitle savings-title is-size-4">Our Experts who you can trust</p>
                                    <p className='my-4'>
                                        <img src="/images/hackathonteam.png" alt="teams" />
                                    </p>
                                    <p className="mt-3">Heal & Hale therapists are licensed, trained, experienced, and 
                                    accredited psychologists (Ph.D. / PsyD), marriage and family therapists (MFT), clinical social
                                     workers (LCSW), or licensed professional counselors (LPC). All of them have a Master's Degree or 
                                     a Doctorate Degree in their field. They have been qualified and certified by their state
                                      professional board after successfully completing the necessary education, exams, training, and 
                                      practice. While their experiences, expertise, and background vary, they all possess at least 3 
                                      years and 1,000 hours of hands-on experience.</p>

                                </div>
                            </div>
                            <div style={{ display: 'flex' }} className="Hackathon column p-0 ">
                                <div style={{ justifyContent: 'end' }} class="tile is-ancestor">
                                    <div class="hackgrid tile is-4 is-vertical is-parent">
                                        <div class="tile is-child box">
                                            <p className="hackTitle savings-title is-size-4">200+</p>
                                            <p>Doctors</p>
                                        </div>
                                        <div class="tile is-child box">
                                            <p className="hackTitle savings-title is-size-4">250+</p>
                                            <p>Volunteers</p>
                                        </div>
                                    </div>
                                    <div class="hackgrid tile is-4 is-vertical is-parent">
                                        <div class="tile is-child box">
                                            <p className="hackTitle savings-title is-size-4">400+</p>
                                            <p>NGOs</p>
                                        </div>
                                        <div class="tile is-child box">
                                            <p className="hackTitle savings-title is-size-4">250+</p>
                                            <p>Expertise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="bottomright">
                        {/* <div class="helloText">Hi, Welcome to Heal & Hale</div> */}
                        <div class="chatIcon"></div>
                    </div>
                </div>
                <section className={'hackJoinUS'}>
                    <div>
                        <p>Want to Join Heal & Hale team?</p>
                        <span>Join With Us</span>
                    </div>
                </section>
                <Footer isHome={true}></Footer>
                <Helmet>
                    <script id="pega-wm-chat" src="https://widget.use1.chat.pega.digital/6cda1b22-d6fd-44c3-b741-c8385dca67b1/widget.js"></script>
                </Helmet>

            </>
        );
    }
}