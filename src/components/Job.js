import './../styles/Job.css';
import React, { useState } from 'react';

function Job({jobs, setJobs, company, setCompany, jobTitle, setJobTitle, startDate, setStartDate, leftDate, setLeftDate, roleDescr, setRoleDescr}) {
    const [editWorkDisplay, setEditWorkDisplay] = useState('hidden');
    
    function deleteJob(deleted) {
        setJobs((current) => {
            return current.filter(job => job !== deleted);
        });
    };

    function editCompany(e) {
        setCompany(e.target.value);
        console.log(company);
    }

    function editStartDate(e) {
        setStartDate(e.target.value);
    }

    function editLeftDate(e) {
        setLeftDate(e.target.value);
    }

    function editJobTitle(e) {
        setJobTitle(e.target.value);
    }

    function editRoleDescr(e) {
        setRoleDescr(e.target.value);
    }

    function editJob(edit) {
        setCompany(edit.company);
        setJobTitle(edit.jobTitle);
        setStartDate(edit.startDate);
        setLeftDate(edit.leftDate);
        setRoleDescr(edit.roleDescr);
        setEditWorkDisplay('showing');
    }

    function cancelEdit() {
        setEditWorkDisplay('hidden');
        setCompany('');
        setJobTitle('');
        setStartDate('');
        setLeftDate('');
        setRoleDescr('');
    }

    function submitEdit(editedJob) {
        const newJob = {
            company: company,
            startDate: startDate,
            leftDate: leftDate,
            jobTitle: jobTitle,
            roleDescr: roleDescr
        };

        setJobs(jobs => [...jobs, newJob]);
        setEditWorkDisplay('hidden');
        setCompany('');
        setJobTitle('');
        setStartDate('');
        setLeftDate('');
        setRoleDescr('');
        deleteJob(editedJob);
    }

    const listItems = jobs.map(
        (job, index) => {
            return (
                <li key={index} className='jobItem'>
                    <div className='workInfo'>
                        <div className='companyAndTitle'>
                            <h2 className='company'>{job.company}</h2>
                            <h4 className='jobTitle'>{job.jobTitle}</h4>
                        </div>
                        <div className='dates'>
                            <h4 className='startDate'>From: {job.startDate}</h4>
                            <h4 className='leftDate'>To: {job.leftDate}</h4>
                        </div>
                    </div>
                    <form className={editWorkDisplay}>
                    <div>
                    <label className='companyInput'>
                        Company:
                        <input type='text' value={company} onChange={editCompany} />
                    </label>

                    <label>
                        Job title:
                        <input type='text' value={jobTitle} onChange={editJobTitle} />
                    </label>
                </div>

                <div>
                    <label className='startDateInput'>
                        Date Started:
                        <input type='text' value={startDate} onChange={editStartDate} />
                    </label>

                <label>
                    Date left:
                    <input type='text' value={leftDate} onChange={editLeftDate} />
                </label>
            </div>


                <div className='workFormBottom'>
                    <label>
                        Description of role:
                        <textarea value={roleDescr} onChange={editRoleDescr} maxLength="100" className='role'/>
                    </label>
                    <div className='workFormButtons'>
                        <button type="button" onClick={cancelEdit} className='cancelJob'>Cancel</button>
                        <button  type='button' onClick={() => {submitEdit(job)}} className='submitJob'>Submit</button>
                    </div>
                </div>
            
                    </form>
                    <h4 className='roleDescr'>{job.roleDescr}</h4>
                    <button type='button' onClick={() => {editJob(job)}} className='jobEdit'>Edit</button>
                    <button type='button' onClick={() => {deleteJob(job)}} className='jobDelete'>X</button>
                </li>
            )
        }
    )
    

return (
    <div className='jobContainer'>
        <ul>
            {listItems}
        </ul>
    </div>
)
}

export default Job;