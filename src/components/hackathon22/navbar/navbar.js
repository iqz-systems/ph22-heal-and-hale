import './navbar.scss';
import { Link } from "react-router-dom"

export default function Navbar(props) {

    return (
        <>
            <nav className={"navbar px-5 hacknavbar"} role="navigation" aria-label="main navigation">
                <div className="is-align-items-center navbar-brand">
                    {<Link to={'/HealnHale/home'}>
                        <img src="/images/hackathonHealAndHale.svg" alt="" />
                    </Link>
                    }
                </div>
                <div className="navbar-end">
                    <div className='navbar-item hackathonLink'>
                        <a href='/HealnHale/home'>
                            Home
                        </a>
                    </div>
                    <div className='navbar-item hackathonLink'>
                        <a href='/HealnHale/home#aboutus'>
                            About Us
                        </a>
                    </div>
                    <div className="navbar-item is-hidden-touch">
                        <div className="buttons">
                            {
                                <span>
                                    <Link className={"button is-primary is-family-secondary hackathonPrimBtn"} to={"/HealnHale/register"}>Register</Link>
                                    <a className={"button is-family-secondary"} href="https://9cypo4ma.pegace.net/prweb/PRAuth/app/heal--hale" target="_blank" rel="noreferrer">Login</a>
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}