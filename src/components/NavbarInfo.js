import React from 'react'
import { Dropdown } from 'react-bootstrap';
    //Navbar with account address
    class NavbarInfo extends React.Component{
        render() {
            return(
                <span>
                <div className="container mt-3 rounded">
                <nav className="navbar navbar-dark  bg-primary rounded">
                <a className="navbar-brand d-none d-md-block"><h3>Your current balance {this.props.balance}</h3></a>
                <a className="navbar-brand d-block d-md-none"><h5 className=" text-center">Your current balance {this.props.balance}</h5></a>


                <form className="form-inline col-xl-5 justify-content-center align-items-center" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.approve(this.address.value, this.tokens.value)
                }}>
                  <input className="form-control  mb-3 mr-3 col-5" ref={(input) => this.address = input } type="search" placeholder="Address" aria-label="Address"/>
                  <input className="form-control mb-3 col-5" ref={(input) => this.tokens = input } type="search" placeholder="Tokens" aria-label="Address"/>
                  <button className="btn btn-danger mt-3 my-sm-0 col-12" type="submit">Add Permision</button>
                </form>

                </nav>
                </div>



                </span>
            );

        }
    }

export default NavbarInfo
