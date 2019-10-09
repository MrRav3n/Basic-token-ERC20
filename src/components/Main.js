import React from 'react'

    //Navbar with account address
    class Main extends React.Component{
        render() {
            return(
                <span>
                <h1 className="text-center mt-3">Transfer tokens from your account</h1>
                <form className="form-inline mt-5 d-flex justify-content-center" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.transfer(this.address.value, this.tokens.value);
                }}>
                <div className="form-check form-check-inline" >
                    <input type="text" ref={(input) => this.tokens = input} className="form-control mr-2" placeholder="Ammount"/>
                    <input type="text"  ref={(input) => this.address = input} className="form-control mr-2" placeholder="Address"/>
                    <button type="submit" className="btn btn-primary ">Send Tokens</button>
                </div>
                </form>
                <h1 className="text-center mt-3">Transfer tokens from someone account</h1>
                <form className="form-inline mt-5 d-flex justify-content-center" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.transferFrom(this.addressFrom.value, this.addressTo.value, this.tokenss.value);
                }}>
                <div className="form-check form-check-inline" >
                    <input type="text" ref={(input) => this.addressFrom = input} className="form-control mr-2" placeholder="Address From"/>
                    <input type="text" ref={(input) => this.tokenss = input} className="form-control mr-2" placeholder="Ammount"/>
                    <input type="text"  ref={(input) => this.addressTo = input} className="form-control mr-2" placeholder="Address To"/>
                    <button type="submit" className="btn btn-primary ">Send Tokens</button>
                </div>
                </form>
                </span>
            );

        }
    }

export default Main
