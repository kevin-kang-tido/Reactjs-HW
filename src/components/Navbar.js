
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/authAction'
import { fetchProfile } from '../redux/actions/profileAction'

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const {isLogin} = useSelector(state => state.authReducer)
  const {profile} = useSelector(state => state.profReducer)
  const {auth} = useSelector(state => state.authReducer)

  useEffect(()=>{
    dispatch(fetchProfile(isLogin ? auth.access_token :""))
  },[])
  return (
    <header className="contianer d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>
        </a>
      </div>
      {/* Nav bar here! */}
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <NavLink to="/" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder":"nav-link px-2"}>Home</NavLink>
        <NavLink to="/datatable" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder":"nav-link px-2"}>DataTable</NavLink>
        <NavLink to="/read" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder":"nav-link px-2"}>Read</NavLink>
        <NavLink to="/about-us" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder":"nav-link px-2"}>FAQs</NavLink>
        <NavLink to="/about-us" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder":"nav-link px-2"}>About-Us </NavLink>
      </ul>
      <NavLink 
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          } 
          to={"/profile"}>
        <img 
          src={isLogin ? profile.avatar : "https://eduport.webestica.com/assets/images/avatar/01.jpg"}
          alt="" 
          width={40} 
          className="rounded-circle mx-3 my-2" />
      </NavLink>

      <div className="col-md-3 text-end">
        <button 
        type="button" 
        className="btn btn-outline-primary me-2"
        onClick={ () =>navigate("/create")}
        >Insert</button>
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={() => isLogin ? dispatch(logout()):navigate("/login")}
        >{ isLogin ? "Logout":"Log In"}</button>
      </div>
    </header>
  )
}
