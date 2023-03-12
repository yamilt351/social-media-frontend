/* eslint-disable linebreak-style */
import React from "react";
import {MdChatBubble,MdSearch,MdTipsAndUpdates} from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
/*eslint linebreak-style: ["error", "unix"]*/
import "./CreatePost.css";
import { URL } from "../../urlStore";
// import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";

function CreatePost() {
  const { currentUser } = useSelector((state) => state.user);

  const { handleSubmit, register, reset } = useForm();

  const submit = data => {
    console.log(data)
    if (Object.values(data)[0].length > 1) {
      const newObj = {
        ...data,
        userId: currentUser?._id
      }
      axios.post(`${URL}api/posts`,newObj)
        .then(res => {
          console.log(res)
          toast.success("Posted successfully!",{
            position: toast.POSITION.TOP_CENTER
          })
        })
        .catch(err => {
          console.log(err)
          toast.error(`An internal error has occurred.
          Try again!`,{
            position: toast.POSITION.TOP_CENTER
          })
        })
      reset({
        title: "",
        body: "",
        comment: ""
      })
    } else {
      toast.warn("You must enter data!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      })
    }

  }


  return (
    <section className="container">
      <ToastContainer />
      <div className="container__center">
        <h1 className="container__title">Share your Story with us!</h1>
        <form className="form-post" onSubmit={handleSubmit(submit)}>
          <label htmlFor="title">
            <MdTipsAndUpdates /> Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            {...register('title')}
          />
          <label htmlFor="description">
            <MdChatBubble /> Write your Post here!
          </label>
          <textarea
            type="textarea"
            placeholder="Write here ..."
            rows="10"
            name="description"
            {...register('description')}
          />
          <label htmlFor="comment">
            <MdSearch /> Make easy to find your post using tags!
          </label>
          <div className="form__file">
            <input type="file" name="imgUrl" {...register('imgUrl')} />
          </div>
          <button className="button-post" > Ready!</button>
        </form>
      </div>
    </section>
  );
}
export default CreatePost;
