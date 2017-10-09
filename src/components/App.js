import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div>
      <header>
        <h2><a href='#'>Mountain Travel</a></h2>
        <nav>
          <li><a href='#'>Tours</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </nav>
      </header>
      <section className='hero'>
        <div className='background-image' />
        <div className='hero-content-area'>
          <h1>Mountain Travel</h1>
          <h3>Unmissable Adventure Tours Around The World</h3>
          <a href='#' className='btn'>Contact Us Now</a>
        </div>
      </section>
      <section className='destinations'>
        <h3 className='title'>Some Of Our Destinations:</h3>
        <p>Tired of the ocean. Are the plains too plain? Come along with us on a mountain adventure.
        Here are some of the pictures from the people who have had elevated experiences with us</p>
        <hr />
        <ul className='grid'>
          <li className='small'><img src='http://mountain.org/wp-content/uploads/Andes-Mountains.jpg' alt='' /></li>
          <li className='large'><img src='http://mountain.org/wp-content/uploads/Andes-Mountains.jpg' alt='' /></li>
          <li className='small'><img src='http://mountain.org/wp-content/uploads/Andes-Mountains.jpg' alt='' /></li>
          <li className='large'><img src='http://mountain.org/wp-content/uploads/Andes-Mountains.jpg' alt='' /></li>
        </ul>
      </section>
      <section className='packages'>
        <h3 className='title'>Tour Packages</h3>
        <p>We offer a variety of mountain packages. Whether youve climbed Everest or dont even know what a
        mountain is, we've got tht perfect vacation for you</p>
        <hr />
        <ul className='grid'>
          <li>
            <i className='fa fa-compass fa-5px' />
            <h4>Guided Trips</h4>
            <p>Looking for a complete experience. Take a tour with one of our experts. They will show you secrets that you would otherwise miss</p>
          </li>
          <li>
            <i className='fa fa-camera-retro fa-4x' />
            <h4>Photo Trips</h4>
            <p>Want to experience natures beauty without all that annoying exercise. Take a photo tour</p>
          </li>
          <li>
            <i className='fa fa-bicycle fa-4x' />
            <h4>Biking Trips</h4>
            <p>If bicycles are more your speed, consider a biking tour through one of our mountain biking paths</p>
          </li>
          <li>
            <i className='fa fa-flag-checkered fa-4x' />
            <h4>Racing Trips</h4>
            <p>Got a competitive spirit. Sign up for our mountain marathons</p>
          </li>
        </ul>
      </section>
      <section className='testimonials'>
        <h3 className='title'>Testimonials from our adventurers:</h3>
        <hr />
        <p className='quote'>I love mountains I love mountains I love mountains I love mountains I love mountains I love mountains</p>
        <p className='author'>-Colt Steele</p>
        <p className='quote'>I love mountains I love mountains I love mountains I love mountains I love mountains I love mountains</p>
        <p className='author'>-Colt Steele</p>
        <p className='quote'>I love mountains I love mountains I love mountains I love mountains I love mountains I love mountains</p>
        <p className='author'>-Colt Steele</p>
      </section>
      <section className='contact'>
        <h3 className='title'>Learn More</h3>
        <p>Want to know more about our upcoming mountain related events, or come to one of our mixers</p>
        <hr />
        <form>
          <input type='email' placeholder='Email' />
          <a href='#' className='btn'>Subscribe Now</a>
        </form>
      </section>
      <footer>
        <p>Images courtesy of <a href='http://unsplash.com/'> unsplash</a></p>
        <p>Why are you reading this? There is never anything interesting in the footer</p>
        <ul>
          <li><a href='#'><i className='fa fa-twitter-square fa-2x' /></a></li>
          <li><a href='#'><i className='fa fa-facebook-square fa-2x' /></a></li>
          <li><a href='#'><i className='fa fa-snapchat-square fa-2x' /></a></li>
        </ul>
      </footer>
    </div>
  }
}

export default App
