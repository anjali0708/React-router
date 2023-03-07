import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div>
      Home page
    </div>
    <p><Link to='/products'>The List of products</Link></p>
    </>
  )
}

export default Home
