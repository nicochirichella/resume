import React, { Component } from 'react';
import { ResumeData } from '../../constants/resumeData';

export default class Resume extends Component {
    createJob(job) {
        return (
            <React.Fragment>
                {
                    <div className="resume-block">
                    <div className="resume-block__header">
                        <h4 className="h3">{ job.name }</h4>
                        <p className="resume-block__header-meta">
                        <span>{ job.position }</span> 
                        <span className="resume-block__header-date">
                            { job.timePeriod }
                        </span>
                        </p>
                    </div>
                    <p>
                        {job.description}
                    </p>
                    </div> 
                }
            </React.Fragment>
        )
    }

    createStudy(study){
        return (
            <React.Fragment>
                {
                   <div className="resume-block">
                   <div className="resume-block__header">
                       <h4 className="h3">{study.university}</h4>
                       <p className="resume-block__header-meta">
                       <span>{study.degree}</span> 
                       <span className="resume-block__header-date">
                           {study.timePeriod}
                       </span>
                       </p>
                   </div>
                   <p></p>
                   </div>
                }
            </React.Fragment>
        )
    }

    render(){
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                {
                    <section id="resume" className="s-resume target-section">
                    <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Career</h3>
                    </div>
                    <div className="column large-9 tab-12">
                        { resumeData.careers.map(job => this.createJob(job))}
                    </div>
                    </div> {/* s-resume__section */}
                    <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Education</h3>
                    </div>
                    <div className="column large-9 tab-12">
                        { resumeData.education.map(study => this.createStudy(study))}
                    </div>
                    </div> {/* s-resume__section */}
                    <div className="row s-resume__section">
                    <div className="column large-3 tab-12">
                        <h3 className="section-header-allcaps">Skills</h3>
                    </div>
                    <div className="column large-9 tab-12">
                        <div className="resume-block">
                     
                        <ul className="skill-bars-fat">
                            {resumeData.softwareSkills.map(skill => <React.Fragment>{
                                    <li>
                                        <div className={"progress percent" + skill.percentage }/>
                                        <strong>{skill.name}</strong>
                                    </li>
                                }</React.Fragment>
                            )}
                        </ul>
                        </div> {/* end resume-block */}
                    </div>
                    </div> {/* s-resume__section */}
                </section> 
                }
            </React.Fragment>
        );
    }
}