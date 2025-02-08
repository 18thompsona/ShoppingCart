import { useState } from 'react';
import { Link } from "react-router-dom";

function HomePage() {

  return (
    <div>
      <nav>
        <h1>Shop Shopi</h1>
        <ul className='nav-links'>
          <li> <Link to="Shop">Shop Page</Link> </li>
        </ul>
      </nav>
      <main>
        <div className='hero'>
          <h1>Main Shopping Page!</h1>
          <p>Buy stuff here! Good stuff... Cheap stuff... Just buy already!!!</p>
          <button className='CTA-button'><Link className='link' to="Shop">Shop Page</Link></button>
          
        </div>
        
      </main>      
      
    </div>
  )
}

export default HomePage;
