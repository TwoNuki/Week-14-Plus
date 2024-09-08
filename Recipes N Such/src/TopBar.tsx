//import { useState } from 'react'
import './App.css'
import 'bootstrap'

type Props = {
  setToggle: Function
  isToggled: Boolean
}


function TopBar({setToggle, isToggled}:Props) {

  const handleToggle = () => {
    setToggle(!isToggled);
}

  //creating a bootstrap menu with buttons to toggle the add new recipe and return to list options
  return (
    <>
      <div className='topBar'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <h1 className="navbar-brand">Recipes N Stuff</h1>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {/* <a className="nav-link active" aria-current="page" href="#">Home List </a> */}
                {/* <a className="nav-link" href="#">Add New Recipe</a> */}
                <button type="button" onClick={handleToggle}>{isToggled ? "Return To List" : "Add New Recipe"}</button>
              </div>
            </div>
          </div>
        </nav>
        <hr />
      </div>

    </>
  )
}

export default TopBar
