import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <main id="main">
          <section className="section-1">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">POTATO</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse pull-right" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">ABOUT<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">FEATURES</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">NUTRITION</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">BUY IT NOW</a>
                  </li>
                </ul>
              </div>
            </nav>

            <h1>Sweet, Nutritious, and Delicious</h1>
            <p>The Key To Happiness Is Hidden In The Potato</p>
          </section>

          <section className="section-2">

            <h1>Different shapes and sizes</h1>
            <p>The potato comes in many unique shapes and sizes</p>
            <p>Find the one that fits your personal preference</p>
          </section>

          <section className="section-3">

            <h1>Is potato healthy? Yes it is!</h1>
            <p>The majority of carbohydrates in potatoes are complex</p>
            <p>carbohydrates, your body's main energy source.</p>

          </section>

          <section className="section-4">

            <h1>Easily Transformable</h1>
            <p>Because of its unique structure, potato is easily usable</p>
            <p>and tranformable into any way you can think of</p>

          </section>

          <section className="section-5">

            <h1>100% customer satisfaction!</h1>
            <h3>I was skeptic at first, but when I tried the potato for the first time, my life was completely changed! I'm a better person now. Everything is better with the potato.</h3>
            <p>Jane Doe, single mom</p>

          </section>

          <section className="section-6">

            <h1>Order One (or more) today!</h1>
            <div className="container">
              <div class="row">
                <div class="col">
                  <h3>Potato Lite</h3>
                  <ul>
                    <li>Small and compact</li>
                    <li>Highly portable</li>
                    <li>Unapologetically delicious</li>
                  </ul>
                  <button type="button" className="btn btn-outline-success">ORDER</button>
                </div>
                <div class="col">
                  <h3>Potato pro</h3>
                  <ul>
                    <li>Highly portable</li>
                    <li>Easily sliceable</li>
                    <li>Unapologetically delicious</li>
                    <li>Very nutritious</li>
                  </ul>
                  <button type="button" className="btn btn-outline-success">ORDER</button>
                </div>
                <div class="col">
                  <h3>Potato team</h3>
                  <ul>
                    <li>Ideal for bigger groups</li>
                    <li>Easily sliceable</li>
                    <li>Unapologetically delicious</li>
                    <li>Very nutritious</li>
                  </ul>
                  <button type="button" className="btn btn-outline-success">ORDER</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
