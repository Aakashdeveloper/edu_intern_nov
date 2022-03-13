import React,{Component} from 'react';
import Header from '../../header';

class Login extends Component {

    render(){
        return(
            <>
                <Header/>
                <div class="container">
                    <br/>
                    <div class="panel panel-danger">
                        <div class="panel-heading">
                            Login Form
                        </div>
                        <div class="panel-body">
                        <div className="row">
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
                        <button className="btn btn-info">Login</button>
                        </div>
                    </div>  
                </div>
            </>
        )
    }

}

export default Login