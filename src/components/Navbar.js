import React from 'react'
    //Navbar with account address
    function Navbar({account, name, symbol}) {

            return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="https://github.com/MrRav3n/starter_kit"><h3>{name} ({symbol})</h3></a>
                        <span className="text-white ml-auto ">
                            <h5 className="text-white d-none d-md-block">Your account: {account} </h5>
                        </span>
                    </div>
                </nav>
            );
    }

export default Navbar
