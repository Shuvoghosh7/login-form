import React from 'react';
import picture from '../img/picture.PNG'
const LoginForm = () => {
    const handealSubmit=(e)=>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
        fetch('https://reqres.in/api/login',{
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email,password })
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.error){
                alert(data.error)

            }else{
                alert("success")
            }
            
        })
        
    }
    return (
        <div className='d-lg-flex justify-content-around align-items-center gx-5 mx-5'>
            <div className='mx-5 flex-fill '>
                <h2 className='text-center'>Wellcome Back</h2>
                <form onSubmit={handealSubmit}>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" 
                        name="email"
                        class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password"
                        name="password"
                        class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remenber Password</label>
                    </div>
                </form>

            </div>
            <div className='flex-fill'>
                <img className='img-fluid' src={picture} alt="" />
            </div>
        </div>
    );
};

export default LoginForm;