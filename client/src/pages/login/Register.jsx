import React from 'react'
import logoimg from '../../images/Login.gif'
import { FaGoogle, FaArrowRight, FaUserAlt } from 'react-icons/fa';

import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Register() {
    return (
        <div className='loginSection'>
            <div className='innerlogin'>
                <MDBContainer fluid className="p-10 my-5">

                    <MDBRow>

                        <MDBCol col='10' md='3'>
                            <img src={logoimg} class="img-fluid" alt="Phone image" />
                        </MDBCol>

                        <MDBCol col='4' md='3'>

                            <div className="info">
                                {/* Container containing all contents */}
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="">
                                            {/* White Container */}
                                            <div className="container  rounded mt- mb- px-0">
                                                {/* Main Heading */}
                                                <div className="row Heading ">
                                                    <h1><strong>Registration</strong></h1>
                                                </div>
                                                <div className="pt-2 pb-1">
                                                    <form className="form-horizontal">
                                                        {/* User Name Input */}
                                                        <div className="form-group row justify-content-center px-3 p-1">
                                                            <div className="col-9 px-0">

                                                                <input type="text" placeholder="   User name" className="form-control border-info placeicon" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row justify-content-center px-3 p-1">
                                                            <div className="col-9 px-0">

                                                                <input type="text" placeholder="   Email" className="form-control border-info placeicon" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row justify-content-center px-3 p-1">
                                                            <div className="col-9 px-0">

                                                                <input type="text" placeholder="   Mobile" className="form-control border-info placeicon" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row justify-content-center px-3 p-1">
                                                            <div className="col-9 px-0">

                                                                <input type="text" placeholder="   User" className="form-control border-info placeicon" />
                                                            </div>
                                                        </div>
                                                        {/* Password Input */}
                                                        <div className="form-group row justify-content-center px-3">
                                                            <div className="col-9 px-0">
                                                                <input type="password" placeholder="   ●●●●●●●●" className="form-control border-info placeicon" />
                                                            </div>
                                                        </div>
                                                        {/* CheckBox Remember Me*/}
                                                        <div className="form-group row justify-content-center px-3">
                                                            <div className="col-">
                                                                <div className="row">
                                                                    <div className="col-6 px-0">
                                                                        <div className="custom-control custom-checkbox mb-3">
                                                                            <input id="customCheck1" type="checkbox" className="custom-control-input checkbox-muted" />
                                                                            <label htmlFor="customCheck1" className="custom-control-label text-muted">Remember Me</label>
                                                                        </div>
                                                                    </div>
                                                                    {/* Forgot Password Link */}
                                                                    <div className="col-6 px-0 text-right">
                                                                        <span><a href="#" className="text-danger"><b>Forgot Password?</b></a></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Log in Button */}
                                                        <div className="form-group row ">
                                                            <div className="col-3 px-3 loginbutton">
                                                                <div className='buttomlogin'>
                                                                <Link to="/login">
                                                                   <button type="button" defaultValue="Login" class="btn btn-block btn-info">Registration</button>
                                                                   </Link>
                                                                </div>

                                                            </div>
                                                            <div className='googleLogin'>
                                                                    <button type="button" defaultValue="Googlelogin" class="btn btn-block btn-social btn-google">Google</button>
                                                                </div>

                                                        </div>
                                                        {/* Google Connect */}

                                                    </form>
                                                </div>
                                                {/* Alternative Login */}
                                                <div className="mx-0 px-0 bg-light">
                                                    <div className="pt-0">

                                                        {/* Social Media Login buttons */}
                                                        <div className="row justify-content-center pt-0">
                                                            <div className="col-0">
                                                                <div className="row justify-content-center">


                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Register Now */}
                                                    <div className="pt-0">
                                                        <div className="row justify-content-center">
                                                            <h6>if you have account ?<span><a href="#" className="text-info"> Login!</a></span></h6>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </MDBCol>

                    </MDBRow>

                </MDBContainer>
            </div>
        </div>
    )
}

export default Register