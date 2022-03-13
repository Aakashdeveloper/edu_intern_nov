import React,{Component} from 'react';
import Header from '../../header';

class Register extends Component {

    render(){
        return(
            <>
                <Header/>
                <div className="container">
                    <br/>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Register Form
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label form="form-control" for="fname">Name</label>
                                        <input className="form-control" id="fname" required name="fname"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label form="form-control" for="lname">Phone</label>
                                        <input className="form-control" id="lname" name="lname"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label form="form-control" for="email">Email</label>
                                        <input className="form-control" id="email" type="email"
                                        name="email"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label form="form-control" for="password">Password</label>
                                        <input class="form-control" id="password" type="password"
                                        name="pwd"/>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-success">Register</button>
                        </div>
                    </div>  
                </div>
            </>
        )
    }

}

export default Register