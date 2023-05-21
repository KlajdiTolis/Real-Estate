import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';

const EditPost = () => {
  const { idpost } = useParams();

  console.log(idpost,"idpost")

  return (
    <div>EditPost</div>
  )
}

export default EditPost