import React, { useState } from 'react';
import NameForm from './components/NameForm';
import WorkForm from './components/WorkForm';
import EducationForm from './components/EducationForm';
import './styles/ResumeBuilder.css';
import pencil from './images/pencil.png';
import Job from './components/Job';

function ResumeBuilder() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [nameDisplay, setNameDisplay] = useState('hidden');
    const [workDisplay, setWorkDisplay] = useState('hidden');
    const [jobs, setJobs] = useState([]);
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [leftDate, setLeftDate] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [roleDescr, setRoleDescr] = useState('');

    function editName() {
        setNameDisplay('showing');
    }

    function showWorkForm() {
        setWorkDisplay('showing');
    }

    return (
        <div className='resumeBuilder'>
            <div className='personalAndDegrees'>
                <header>
                    <h1 className='personalHeading'>Personal/Contact Info</h1>
                    <h4 className='namePlate'>Name: {name}</h4>
                    <h4 className='addressPlate'>Address: {address}</h4>
                    <h4 className='phonePlate'>Phone: {phone}</h4>
                    <h4 className='emailPlate'>Email: {email}</h4>
                    <h4 className='aboutMePlate'>About Me: <p className='personalDescr'>{aboutMe}</p></h4>
                    <button type="button" onClick={editName}><img src={pencil} alt='pencil'></img></button>
                    <NameForm name={name} address={address} phone={phone} email={email} setName={setName} setAddress={setAddress} setPhone={setPhone} setEmail={setEmail} nameDisplay={nameDisplay} setNameDisplay={setNameDisplay} aboutMe={aboutMe} setAboutMe={setAboutMe} /> 
                </header>
                <div className='educationDiv'>
                    <h1>Education</h1>
                    <EducationForm />
                </div>
            </div>

                <div className='workDiv'>
                    <div className='workDivHeader'>
                        <button type='button' onClick={showWorkForm} className='workButton'>+</button>
                        <h1 className='workHeading'>Work Experience</h1>
                    </div>
                        <WorkForm workDisplay={workDisplay} setWorkDisplay={setWorkDisplay} jobs={jobs} setJobs={setJobs} company={company} setCompany={setCompany} jobTitle={jobTitle} setJobTitle={setJobTitle} startDate={startDate} setStartDate={setStartDate} leftDate={leftDate} setLeftDate={setLeftDate} roleDescr={roleDescr} setRoleDescr={setRoleDescr}/>
                        <Job jobs={jobs} setJobs={setJobs} company={company} setCompany={setCompany} jobTitle={jobTitle} setJobTitle={setJobTitle} startDate={startDate} setStartDate={setStartDate} leftDate={leftDate} setLeftDate={setLeftDate} roleDescr={roleDescr} setRoleDescr={setRoleDescr}/>
                </div>
        </div>
    )
}

export default ResumeBuilder;