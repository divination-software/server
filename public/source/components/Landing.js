import React from 'react';
import { Link } from 'react-router';
import '../styles/landing.css';

const Landing = (props) => {
  return (
    <div className='landing'>
      <div className='landingImage'>
        <div className='landingInfo'>
          <div className="learn-more">
            <p onClick={e=>window.scroll({left:0,top:window.innerHeight, behavior:'smooth'})} className="pointer">Learn More</p>
            <i onClick={e=>window.scroll({left:0,top:window.innerHeight, behavior:'smooth'})} className="material-icons pointer">keyboard_arrow_down</i>
          </div>
          <div className='landing-headers'>
            <h3>MAKE</h3>
            <h3>CONFIDENT</h3>
            <h3>DECISIONS</h3>
            <div className='landing-image-text'>Divination is an analytic tool that simulates processes and provides insight into the efficiency of those processes. Simulations are built by chaining different nodes together in specific, and customizable ways.</div>
            <Link onClick={e => props.tutorialActions.toggleTutorial()}to='/board'><div className='landing-image-button pointer'>Try It Out Now!</div></Link>
          </div>
        </div>
      </div>
      <div className="landing-article">
        <div className="landing-article-header"><h3>Business Process Simulation</h3></div>
        <div className="what">
          <div className="landing-cover"></div>
          <h4>What it does</h4>
          <p>Simulations use weighted statistical generations to recreate a business day thousands of times to ensure you find any possible bottlenecks or optimizations.</p>
          <Link to='/docs'><div className='landing-button pointer'>Getting Started</div></Link>
        </div>
        <div className="how">
          <div className="landing-cover"></div>
          <h4>How you do it</h4>
          <p>Simulations are built by chaining different nodes together. Each of these nodes affects the simulation in specific, and customizable, ways. Simply drag and drop nodes, to create simulations.</p>
          <Link onClick={e => props.loginActions.openLogin('signup')}><div className='landing-button pointer'>Sign Up</div></Link>
        </div>
      </div>
      <div className="landing-article landing-bottom">
        <div className="landing-bottom-cover"></div>
        <h3 className="landing-bottom-break">Simulation Solves the Unsolvable</h3>
        <h3 className="landing-bottom-header"></h3>
          <div className="solution">
            <h4>Identify Bottlenecks</h4>
            <i className="material-icons">search</i>
            <p>Simulation software allows you to find pressure points in your business, giving you the exact process holding you back.</p>
          </div>
          <div className="solution">
            <h4>Optimize Processes</h4>
            <i className="material-icons">tune</i>
            <p>Simulations allow optimizations of every process for any occassion. Never lose out on a single dollar.</p>
          </div>
          <div className="solution">
            <h4>Rapid Solutions</h4>
            <i className="material-icons">trending_up</i>
            <p>Aquiring resources can be expensive. Rapidly test new ventures through simulation without the risk of capital.</p>
          </div>
          <div className="landing-footer">
            <div className="solution">
                <ul>
                  <li></li>
                  <li></li>
                  <li>&copy; Divination Software 2016</li>
                </ul>
            </div>
            <div className="solution">
              <ul>
                <li></li>
                <li></li>
                <li>Email us at divinationsoftware@gmail.com</li>
              </ul>
            </div>
            <div className="solution">
              <ul>
                <li></li>
                <li></li>
                <li>github.com/divination-software</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Landing;
