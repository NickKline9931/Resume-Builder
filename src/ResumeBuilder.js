import React, { useState } from 'react';
import NameForm from './components/NameForm';
import WorkForm from './components/WorkForm';
import EducationForm from './components/EducationForm';
import Degree from './components/Degree';
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
    const [educationFormDisplay, setEducationFormDisplay] = useState('hidden');
    const [jobSaver, setJobSaver] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [leftDate, setLeftDate] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [roleDescr, setRoleDescr] = useState('');
    const [degrees, setDegrees] = useState([]);
    const [degreeSaver, setDegreeSaver] = useState([]);
    const [school, setSchool] = useState('');
    const [schoolStartDate, setSchoolStartDate] = useState('');
    const [finishDate, setFinishDate] = useState('');
    const [field, setField] = useState('');
    const [certification, setCertification] = useState('');

    function editName() {
        setNameDisplay('showing');
    }

    function showWorkForm() {
        setWorkDisplay('showing');
        setJobSaver(jobs);
    }

    function showEducationForm() {
        setEducationFormDisplay('showing');
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
                    <div className='divHeader' id='eduHeader'>
                        <button type='button' onClick={showEducationForm} className='addItemButton'>+</button>
                        <h1>Education</h1>
                    </div>
                    <EducationForm educationFormDisplay={educationFormDisplay} setEducationFormDisplay={setEducationFormDisplay} degreeSaver={degreeSaver} school={school} setSchool={setSchool} schoolStartDate={schoolStartDate} setSchoolStartDate={setSchoolStartDate} finishDate={finishDate} setFinishDate={setFinishDate} field={field} setField={setField} certification={certification} setCertification={setCertification} degrees={degrees} setDegrees={setDegrees}/>
                    <Degree degrees={degrees} setDegrees={setDegrees} school={school} setSchool={setSchool} schoolStartDate={schoolStartDate} setSchoolStartDate={setSchoolStartDate} finishDate={finishDate} setFinishDate={setFinishDate} field={field} setField={setField} certification={certification} setCertification={setCertification} setDegreeSaver={setDegreeSaver} setEducationFormDisplay={setEducationFormDisplay}/>
                </div>
            </div>

                <div className='workDiv'>
                    <div className='divHeader'>
                        <button type='button' onClick={showWorkForm} className='addItemButton'>+</button>
                        <h1 className='workHeading'>Work Experience</h1>
                    </div>
                        <WorkForm workDisplay={workDisplay} setWorkDisplay={setWorkDisplay} jobs={jobs} setJobs={setJobs} company={company} setCompany={setCompany} jobTitle={jobTitle} setJobTitle={setJobTitle} startDate={startDate} setStartDate={setStartDate} leftDate={leftDate} setLeftDate={setLeftDate} roleDescr={roleDescr} setRoleDescr={setRoleDescr} jobSaver={jobSaver} setJobSaver={setJobSaver}/>
                        <Job jobs={jobs} setJobs={setJobs} setWorkDisplay={setWorkDisplay} company={company} setCompany={setCompany} jobTitle={jobTitle} setJobTitle={setJobTitle} startDate={startDate} setStartDate={setStartDate} leftDate={leftDate} setLeftDate={setLeftDate} roleDescr={roleDescr} setRoleDescr={setRoleDescr} setJobSaver={setJobSaver}/>
                </div>
        </div>
    )
}

export default ResumeBuilder;