import React from 'react';
import picture from '../img/picture.PNG'
const LoginForm = () => {
    const handealSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        fetch('https://reqres.in/api/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    alert(data.error)

                } else {
                    alert("success")
                }
            })

    }
    return (
        <div class="container" id='navbar'>
            <div class="row d-sm-flex flex-wrap-reverse">
                <div class="col-lg-4 col-sm-12 col-md-6 gy-5 mt-lg-5">
                        <h2 className='text-center' style={{ fontFamily: 'sans-seri' }}>Wellcome Back</h2>
                        <form onSubmit={handealSubmit}>
                            <div class="mb-3">
                                <label for="email" class="form-label" style={{ fontFamily: 'sans-seri' }}>Email address</label>
                                <input type="email"
                                    name="email"
                                    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label" style={{ fontFamily: 'sans-seri' }}>Password</label>
                                <input type="password"
                                    name="password"
                                    class="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" class="btn btn-secondary w-100" style={{ fontFamily: 'sans-serif' }}>Login</button>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input " id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remenber Password</label>
                            </div>
                            
                        </form>

                   
                </div>
                <div class="col-lg-8 col-md-6 col-sm-12">
                    <img className='img-fluid' src={picture} alt="" />
                </div>
            </div>

        </div>

    );
};

export default LoginForm;