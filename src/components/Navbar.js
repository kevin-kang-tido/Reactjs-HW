// 
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
    <header class="contianer d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>
        </a>
      </div>
      {/* Nav bar here! */}
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="/" class="nav-link px-2 text-primary">Features</a></li>
        <li><Link to="/read" class="nav-link px-2">Read</Link></li>
        <li><a href="/" class="nav-link px-2">FAQs</a></li>
        <li><Link to="/about-us" class="nav-link px-2">About-Us</Link></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  )
}
