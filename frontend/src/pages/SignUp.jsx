import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "Axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Signup = () => {

  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);


  const initialValues = {
    email: '',
    password: '',
    username: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    username: Yup.string().required('Username is required'),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    console.log('Signed Up');
    try {
      const { data } = await axios.post('http://localhost:5555/signup', values, {
        withCredentials: true,
      });
      const { success, message } = data;
      if (success) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setErrors({ general: message });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="h-[calc(100vh-64px)] bg-gray-100 flex items-center">
      <div className="p-8 rounded-xl shadow-md w-96 m-auto bg-blue-500" style={{ backgroundColor: '#0C3154'}}>
        <h2 className="text-white text-3xl font-bold mb-6 text-center select-none">
          Sign Up
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <span className='flex items-end justify-between'>
              <label
                htmlFor="email"
                className="block text-white text-sm font-bold mb-2 select-none"
              >
              Email:
              </label>
              {formik.touched.email && formik.errors.email && (<div className="error text-red-600 text-sm">{formik.errors.email}</div>)}
            </span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              id='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              {...formik.getFieldProps('email')}
            />
          </div>
          <div className="mb-4">
            <span className='flex items-end justify-between'>
              <label
                htmlFor="username"
                className="block text-white text-sm font-bold mb-2 select-none"
              >
                Username:
              </label>
              {formik.touched.username && formik.errors.username && (<div className="error text-red-600 text-sm">{formik.errors.username}</div>)}
            </span>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              id='username'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              {...formik.getFieldProps('username')}
            />
          </div>
          <div className="mb-6">
            <span className='flex items-end justify-between'>
              <label
                htmlFor="password"
                className="block text-white text-sm font-bold mb-2 select-none"
              >
                Password:
              </label>
              {formik.touched.password && formik.errors.password && (<div className="error text-red-600 text-sm">{formik.errors.password}</div>)}
            </span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
              id='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              {...formik.getFieldProps('password')}
            />
          </div>
          {formik.errors.general ? (<div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 text-red-600 text-sm text-center">{formik.errors.general}</div>) : success ? <h1 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 text-white text-sm text-center">Creating Account ...</h1> : <h1 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 text-white text-sm text-center"></h1>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 mt-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue select-none"
          >
            Sign Up
          </button>
          <span className="block text-white mt-2">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-200">
              Log In
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
