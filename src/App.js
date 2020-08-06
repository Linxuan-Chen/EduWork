import React from 'react';

import './App.scss';

import NavBar from './components/NavBar';
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Environment from './components/Environment'
import Gains from './components/Gains'
import FollowUS from './components/FollowUs'
import Advisor from './components/Advisor'
import Comparison from './components/Comparison'
import Goals from './components/Goals'
import FactToFace from './components/FactToFace'

function App() {
  return (
    <div className="App container">
      {/* Navbar starts. */}
      <nav>
        <NavBar />
      </nav>
      {/* Navbar ends.  */}

      {/* Header starts. */}
      <header className="mt-lg-4">
        <Header />
      </header>
      {/* Header ends.  */}

      {/* carousel starts. */}
      <section className="mt-lg-4">
        <Carousel />
      </section>
      {/* carousel ends.  */}

      {/* Your gains section starts. */}
      <section className="mt-4">
        <Gains />
      </section>
      {/* Your gains section ends. */}

      {/* Follow us section starts */}
      <section className="mt-4">
        <FollowUS />
      </section>
      {/* Subscribe us section ends. */}

      {/* Face-to-face teaching section starts. */}
      <section className="mt-4">
        <FactToFace />
      </section>
      {/* Face-to-face teaching section ends. */}

      {/* Internship goals section starts.  */}
      <section className="mt-4">
        <Goals />
      </section>
      {/* Internship goals section ends.  */}

      {/* You adviser section starts.  */}
      <section className="mt-4">
        <Advisor />
      </section>
      {/* You adviser section ends.  */}

      {/* Comparision section starts.  */}
      <section className="mt-4">
        <Comparison />
      </section>
      {/* Comparision section ends.  */}

      {/* Study environment seciton starts.  */}
      <section className="mt-4">
        <Environment />
      </section>
      {/* Study environment seciton ends.  */}

      {/* Footer starts.  */}
      <footer className="mt-4 footer text-light bg-dark small">
        <Footer />
      </footer>
      {/* Footer ends.  */}
    </div>
  );
}

export default App;
