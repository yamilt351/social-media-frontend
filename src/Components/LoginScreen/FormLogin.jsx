import React from 'react'
import { useForm } from 'react-hook-form';
import "./login.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL } from "../../urlStore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice.js";
import axios from 'axios';

const FormLogin = () => {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);
    if (Object.values(data)[0].length > 2 && Object.values(data)[1].length > 2) {
      dispatch(loginStart());
      axios.post(`${URL}auth/signin`, data, { withCredentials: true })
        .then(res => {
          toast.success('Felicitaciones!')
          dispatch(loginSuccess(res.data));
          navigate('/')
          console.log(res.data)
        })
        .catch(err => {
          toast.error('¡Sorry there was an error!', {
            position: toast.POSITION.TOP_CENTER
          })
          console.log(err);
          dispatch(loginFailure());
        })
      reset({
        username: '',
        password: ''
      })
    } else {
      toast.warning('You must supply access credentials!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      })
    }
  }
  return (
    <div className="form-container signIn">
      <form className="form" onSubmit={handleSubmit(submit)}>
        <input placeholder="Username" type="text" className='form__input' name="username" {...register('username')} />
        <input type="password" placeholder="Password" className='form__input' name="password" {...register('password')} />
        <button className="action-button" >Login</button>
      </form>
    </div>
  )
}

export default FormLogin