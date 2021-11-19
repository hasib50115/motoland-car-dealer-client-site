import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://hidden-reaches-55205.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                setSuccess(true);
                console.log(data);
            }
            
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="my-5">Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input style={{width:'40%', margin:'auto'}} onBlur={handleOnBlur} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-warning my-3">Make Admin</button>
            </form>
            {
                success && alert('Made Admin Successfully')
            }
        </div>
    );
};

export default MakeAdmin;