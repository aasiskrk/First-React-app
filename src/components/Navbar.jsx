import React from 'react'
import { Link } from 'react-router-dom'




const Navbar = () => {
  //get user from local Storage
  const user = JSON.parse(localStorage.getItem('user'))

  //logout function
  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/login'
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Forge Play</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Products</a>
              </li>
              {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              {/* <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            <form class="d-flex" role="search">
              {
                user ? (<>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Welcome, {user.firstName}
                    </button>
                    <ul class="dropdown-menu">
                      <li><Link class="dropdown-item" to={'/profile'}><i class="fas fa-user"></i> Profile</Link></li>
                      <li><a class="dropdown-item" href="#">Settings</a></li>
                      <li><button class="dropdown-item" onClick={handleLogout} >Logout</button></li>
                    </ul>
                  </div>
                </>)
                  : (<>
                    <Link to={'/register'} class="btn btn-outline-danger me-2" type="submit">Register</Link>

                    <Link to={'/login'} class="btn btn-outline-success" type="submit">Login</Link>
                  </>)
              }
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar