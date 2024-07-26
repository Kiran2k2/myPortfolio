import React, { useState } from "react";
import "./About.css";

function About() {
  let [toggleText, setToggleText] = useState(false);
  let updatetext = () => {
    if (toggleText === false) {
      setToggleText(true);
    } else {
      setToggleText(false);
    }
    setToggleText(!toggleText);
  };

  return (
    <div className="total-about">
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3> MERN Stack Developer</h3>
          <p>
            <div className="list">
              <li>
                Hi Everyone, My name is Kiran Jena and I am from Rourkela,
                Odisha(India). I have completed my graduation in BTech
                (Electrical Engineering) from Bhubaneswar College of
                Engineering(BCE)
              </li>

              
              {toggleText && (
                <>
                <li>
                I am a hard-working and driven individual who isn't afraid to
                face a challenge. I'm passionate about my work and I know how to
                get the job done.
              </li>
                <li>
                
                  I would describe myself as an open and honest person who
                  doesn't believe in misleading other people and tries to be
                  fair in everything I do.!
                </li>
                </>
              )}
            </div>
          </p>
          <button onClick={updatetext} class="cv-link22">
            {!toggleText ? "Read More" : "Read Less"}
          </button>
        </div>
    </div>
  );
}

export default About;
