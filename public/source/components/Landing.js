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
            <div className='landing-image-text'>This is supposed to be some spacy text or someshit where we decribe what this simulation software does. Its actually pretty cool tbh but I really dont know how im gonna explain it to anyyyonneee.</div>
            <Link onClick={e => props.tutorialActions.toggleTutorial()}to='/board'><div className='landing-image-button pointer'>Try It Out Now!</div></Link>
          </div>
        </div>
      </div>
      <div className="landing-article">
        <div className="landing-article-header"><h3>Business Process Simulation</h3></div>
        <div className="what">
          <div className="landing-cover"></div>
          <h4>What it does</h4>
          <p>I really don't know how to expalin what this simulation software does, but other software costs a metric fuck ton of money and this is straight up cheap so thats cool. do all this for cheap yeah yeah boiii</p>
          <div className='landing-button pointer'>Getting Started</div>
        </div>
        <div className="how">
          <div className="landing-cover"></div>
          <h4>How you do it</h4>
          <p>You do it real easy ayyyyyyyyyyy. seriously you could follow our tutorial over here CLICK ME IM A TUTORIAL or you could like sign up or whatever or do anything idkkkkk i just need some filler text to get this deisng down</p>
          <div className='landing-button pointer'>Sign Up</div>
        </div>
      </div>
      <div className="landing-article-break">
        <h3>Simulation Solves the Unsolvable</h3>
      </div>
      <div className="landing-article landing-bottom">
        <div className="landing-bottom-cover"></div>
        <h3 className="landing-bottom-header">Divination Software Solutions</h3>
          <div className="solution">
            <h4>Identify Bottlenecks</h4>
            <i className="material-icons">search</i>
            <p>Blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah.</p>
          </div>
          <div className="solution">
            <h4>Optimize Processes</h4>
            <i className="material-icons">tune</i>
            <p>Blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah.</p>
          </div>
          <div className="solution">
            <h4>Rapid Solutions</h4>
            <i className="material-icons">trending_up</i>
            <p>Blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah. Blah blah blah blah blah blah blah.</p>
          </div>
          <div className="landing-footer">
            <div className="solution">
              <p>&copy; Divination Software 2016</p>
            </div>
            <div className="solution">
              <ul>
                <li><Link to='/docs'>Docs</Link></li>
                <li><Link to='/board'>Simulation</Link></li>
                <li><Link to='/board'>Tutorial</Link></li>
              </ul>
            </div>
            <div className="solution">
              <ul>
                <li><Link >Login</Link></li>
                <li><Link >Sign Up</Link></li>
                <li><Link >Contact</Link></li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Landing;
