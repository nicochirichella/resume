import React, { Component } from 'react';

export default class About extends Component {
    render(){
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {    
                    <section id="about" className="s-about target-section">
                    <div className="row">
                      <div className="column large-3 tab-12">
                        <img className="s-about__pic" src="images/avatars/chiri_resize.PNG" alt="" />
                      </div>
                      <div className="column large-9 tab-12 s-about__content">
                        <h3>About Me</h3>
                        <p>
                          Appasionate for programming, always trying to learn new things and
                          increasing my knowledge.
                          Looking for creative and performant ways to solve new problems.
                          I am self sufficient but I love and prefer to work with a team.
                        </p>
                        <hr />
                        <div className="row s-about__content-bottom">
                          <div className="column w-1000-stack">
                            <h3>Contact Details</h3>
                            <p>
                              { resumeData.name } <br />
                              { resumeData.birthDate } <br />
                              { resumeData.location } <br />
                              <a href="tel:+5491166884975">{ resumeData.phoneNumber }</a> <br />
                              <a href="mailto:#0">{ resumeData.email }</a>
                            </p>
                          </div>
                          <div className="column w-1000-stack">
                            <a href="#0" className="btn btn--download">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                              Download CV
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> {/* end row */}
                  </section> 
                }
                <header id="home">
                    ....
                </header>
            </React.Fragment>
        );
    }
}