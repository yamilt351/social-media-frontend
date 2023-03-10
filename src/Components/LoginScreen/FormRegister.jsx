import React from 'react'
import { useForm } from 'react-hook-form';
import "./login.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL } from "../../urlStore";
import axios from 'axios';

const FormRegister = (setRegisterd) => {

    const { handleSubmit, register, reset } = useForm();
    
    const submitRegister = data => {
        console.log(data);
        if (Object.values(data)[2].length >= 3) {
          axios.post(`${URL}auth/signUp`, data,{
            withCredentials: true
          })
            .then(res => {
              setRegisterd(false)
              console.log(res.data);
              toast.success("Registered user successfully!", {
                position: toast.POSITION.TOP_CENTER
              })
            })
            .catch(err => {
              console.log(err);
              toast.error("¡Sorry there was an error!", {
                position: toast.POSITION.TOP_CENTER
              })
            })
          reset({
            email: '',
            username: '',
            password: ''
          })
        }
        toast.warning("You must provide the requested data!", {
          position: toast.POSITION.TOP_CENTER
        })
      }


  return (
    <div className="form-container signUp">
    <form className="form" onSubmit={handleSubmit(submitRegister)}>
      <input placeholder="E-mail" className='form__input' type="email" name="email" {...register('email')} ></input>
      <input placeholder="Username" className='form__input' type="text" name="username" {...register('username')} ></input>
      <input placeholder="Password" className='form__input' min={4} type="password" name="password" {...register('password')} />
      <button className="action-button">Create User</button>
    </form>

  </div>
  )
}

export default FormRegister