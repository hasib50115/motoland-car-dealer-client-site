import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [logedinUser, setLogedinUser] = useState({});
    const { isloading, user, authError, loginUser} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        // for useState - user, setLoginUser
        const newUser = {...logedinUser};
        newUser[field] = value;
        setLogedinUser(newUser);

    }
    const handleLoginSubmit = e => {
        loginUser(logedinUser.email, logedinUser.password, location, history);
        e.preventDefault();
    }
    return (
        <div  style={{marginTop:'100px'}}>
            <h1>Please log in</h1> 
           { !isloading &&  <form onSubmit={handleLoginSubmit} action="" className="my-5">
                <input onChange={handelOnChange} name="email" type="email" placeholder="email" className="px-2 my-3"></input> <br/>
                <input onChange={handelOnChange} name="password" type="password" placeholder="password" className="px-2 mb-3"></input> <br/>
                <Link to="register">
                    <button className="btn btn-light">New User? <span className="text-danger">Please Register here</span></button> 
                </Link> <br/>
                <button type="submit" className="btn btn-primary my-3">Login</button>
            </form> }
            {isloading && <div class="spinner-border text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>} 
          
          {user.email && <div style={{width: '80%', margin: 'auto'}} class="alert alert-success" role="alert">
          <h2 className="text-primary">Login Success!</h2>
        </div>}  
        {
            authError && <div style={{width: '80%', margin: 'auto'}} class="alert alert-danger" role="alert">
            <h2>Email or Password wrong! Please try again.</h2>
          </div>
        }   
        </div>
    );
};

export default Login;

/* <div class="col col-12 col-md-6 col-lg-6">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="text" class="form-control" id="inputPassword2" placeholder="last name"/>
                </div> */