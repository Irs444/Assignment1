
import React from 'react'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup';
import './Signup.css'
import { useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  name : Yup.string()
  .min(2, 'to short!')
  .max(10, 'to long!')
  .required('required'),

  email: Yup.string()
  .email('invalid email')
  .required('Required'),

  password: Yup.string()
  .required('enter the password')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must contain 8 charater"
  ),
  cpassword: Yup.string()
  .oneOf([Yup.ref('password'),null], 'password must match')
});

const Signup = () => {

  // const navigate = useNavigate();

  const signupForm = useFormik({
 initialValues:{
  name: '',
  email: '',
  password: '',
  cpassword: ''
 },
  onSubmit: async (values, {setSubmitting}) => {
    setSubmitting(true);
  console.log(values);

   const res = await fetch('http://localhost:5000/user/add',{
     method: 'POST',
     body: JSON.stringify(values),
     headers: {
      'Content-Type' : 'application/json'
     }
   });
   console.log(res.status);
   
    
   if (res.status === 200){


    Swal.fire({
      icon: 'success',
      title: 'Nice',
      text: 'you have registerd now'
    })
    // navigate('/login');
   } else{
    Swal.fire({
     icon: 'erroe',
     title: 'opps',
     text: 'somthing wrong' 
    })
   }
  },
  validationSchema :  SignupSchema
  }) ;
    return(
        <div>
  <section className="vh-100 bg-image ">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container-fluid h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{  backgroundColor: "lightgreen"}}>
            <div className="card-body p-5">
              <h2 className=" text-center mb-5">
                Create an account
              </h2>
              <form onSubmit= {signupForm.handleSubmit}>
                <div className=" mb-4">
                <label className="form-label" htmlFor="form3Example1cg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    values={signupForm.values.name}
                    onChange={signupForm.handleChange}
                    className="form-control form-control-lg"
                  />
                  <span className="text-danger">{signupForm.errors.name}</span>
                </div>
                <div className=" mb-4">
                <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    values={signupForm.values.email}
                    onChange={signupForm.handleChange}
                    className="form-control form-control-lg"
                  />
                 <span className="text-danger">{signupForm.errors.email}</span>
                </div>
                <div className=" mb-4">
                <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    values={signupForm.values.password}
                    onChange={signupForm.handleChange}
                    className="form-control form-control-lg"
                  />
                 <span className="text-danger">{signupForm.errors.password}</span>
                </div>
                <div className="f mb-4">
                <label className="form-label" htmlFor="form3Example4cdg">
                    Repeat your password
                  </label>
                  <input
                    type="password"
                    id="cpassword"
                    values={signupForm.values.cpassword}
                    onChange={signupForm.handleChange}
                    className="form-control form-control-lg"
                  />
                 <span className="text-danger">{signupForm.errors.cpassword}</span>
                </div>
                <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in{" "}
                    <a href="#!" className="text-body">
                      <u>Terms of service</u>
                    </a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    disabled={signupForm.isSubmitting}
                    
                  >
                     {signupForm.isSubmitting && <span className="spinner-border spinner-border-sm"></span>}
                     &nbsp;&nbsp;
                    Register
                  </button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <a href="#!" className="fw-bold text-body">
                    <u>Login here</u>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Signup