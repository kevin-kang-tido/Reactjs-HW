
import React from 'react'

export default function Footer() {
  return (
    <footer class="py-5 contianer">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>

         </a>
        </li>
        <li class="ms-3"><a class="link-body-emphasis" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 592 512"><path d="M565.7 118.1c-2.3-6.1-9.3-9.2-15.3-6.6-5.7 2.4-8.5 8.9-6.3 14.6 10.9 29 16.9 60.5 16.9 93.3 0 134.6-100.3 245.7-230.2 262.7V358.4c7.9-1.5 15.5-3.6 23-6.2v104c106.7-25.9 185.9-122.1 185.9-236.8 0-91.8-50.8-171.8-125.8-213.3-5.7-3.2-13-.9-15.9 5-2.7 5.5-.6 12.2 4.7 15.1 67.9 37.6 113.9 110 113.9 193.2 0 93.3-57.9 173.1-139.8 205.4v-92.2c14.2-4.5 24.9-17.7 24.9-33.5 0-13.1-6.8-24.4-17.3-30.5 8.3-79.5 44.5-58.6 44.5-83.9V170c0-38-87.9-161.8-129-164.7-2.5-.2-5-.2-7.6 0C251.1 8.3 163.2 132 163.2 170v14.8c0 25.3 36.3 4.3 44.5 83.9-10.6 6.1-17.3 17.4-17.3 30.5 0 15.8 10.6 29 24.8 33.5v92.2c-81.9-32.2-139.8-112-139.8-205.4 0-83.1 46-155.5 113.9-193.2 5.4-3 7.4-9.6 4.7-15.1-2.9-5.9-10.1-8.2-15.9-5-75 41.5-125.8 121.5-125.8 213.3 0 114.7 79.2 210.8 185.9 236.8v-104c7.6 2.5 15.1 4.6 23 6.2v123.7C131.4 465.2 31 354.1 31 219.5c0-32.8 6-64.3 16.9-93.3 2.2-5.8-.6-12.2-6.3-14.6-6-2.6-13 .4-15.3 6.6C14.5 149.7 8 183.8 8 219.5c0 155.1 122.6 281.6 276.3 287.8V361.4c6.8.4 15 .5 23.4 0v145.8C461.4 501.1 584 374.6 584 219.5c0-35.7-6.5-69.8-18.3-101.4zM365.9 275.5c13 0 23.7 10.5 23.7 23.7 0 13.1-10.6 23.7-23.7 23.7-13 0-23.7-10.5-23.7-23.7 0-13.1 10.6-23.7 23.7-23.7zm-139.8 47.3c-13.2 0-23.7-10.7-23.7-23.7s10.5-23.7 23.7-23.7c13.1 0 23.7 10.6 23.7 23.7 0 13-10.5 23.7-23.7 23.7z"/></svg>

         </a>
         </li>
         <li class="ms-3"><a class="link-body-emphasis" href="/">
         <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>

        </a>
        </li>
        
      </ul>
    </div>
  </footer>
  )
}
