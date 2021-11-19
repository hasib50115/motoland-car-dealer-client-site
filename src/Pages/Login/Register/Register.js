import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {registerUser, isloading, user, authError} = useAuth();
    const [loginUser, setLoginUser] = useState({});

   /*  const onSubmit = data => {
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result));
        console.log(data);
    } */
    
    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        // for useState - user, setLoginUser
        const newUser = {...loginUser};
        newUser[field] = value;
        setLoginUser(newUser);

    }
    const handleLoginSubmit = (e) => {
        registerUser(loginUser.email, loginUser.password);
        e.preventDefault();
        // for second func
       
       
    }
    return (
        <div  style={{marginTop:'100px'}}>
            <h1 className="text-primary">Please Register</h1> 
            { !isloading && <form onSubmit={handleLoginSubmit} action="" className="my-5">
                <input onChange={handelOnChange} name="email" type="email" placeholder="email" className="px-2 my-3" ></input> <br/>
                <input onChange={handelOnChange} name="password" type="password" placeholder="password" className="px-2 mb-3"></input> <br/>
                <Link to="login">
                    <button className="btn btn-light">Already Registered? Please Login</button> 
                </Link> <br/>
                <button type="submit" className="btn btn-primary my-3">Register</button>
            </form>} 
            {isloading && <div class="spinner-border text-warning" role="status">
            <span class="sr-only">Loading...</span>
          </div>} 
          
          {user.email && <div style={{width: '80%', margin: 'auto'}} class="alert alert-success" role="alert">
          <h2 className="text-primary">Registration Success!</h2>
        </div>}
        {
            authError && <div style={{width: '80%', margin: 'auto'}} class="alert alert-danger" role="alert">
            <h2>Something Went Wrong! Please try again.</h2>
          </div>
        }
        </div>
    );
};

export default Register;