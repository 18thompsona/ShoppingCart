import { useState } from 'react';
import { Link } from "react-router-dom";


function ShopPage() {

  return (
    <div>
      <h1>Hello from Shop Page!</h1>
      <p>So, What Cha Buyin?</p>
      <Link to="/">Home Page</Link>
    </div>
  )
}

export default ShopPage;