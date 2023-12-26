import React, {Suspense}from 'react'
import {Link,Outlet} from 'react-router-dom'


const NavBar = () => {
  return (
    <>
    <nav style={{display:'flex',gap:'2rem'}}> 
        <Link to='/'>Home</Link>
        <Link to='/store'>Store</Link>
        <Link to='/about'>About</Link>
    </nav>
     
  <Suspense fallback={<h1>Loading...</h1>}>  {/* It tells react that whatever is inside you has the potential to be lazy loaded whihc means it might not be available right away 
  */}
  <Outlet/>
  </Suspense>
  </>
  )
}

export default NavBar
