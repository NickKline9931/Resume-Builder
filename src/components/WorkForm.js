import React, { useState } from 'react';
import Job from './Job';

function WorkForm({workDisplay, setWorkDisplay}) {
    const [jobs, setJobs] = useState([]);
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [leftDate, setLeftDate] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [roleDescr, setRoleDescr] = useState('');

    function addJob() {
        const newJob = {
            company: company,
            startDate: startDate,
            leftDate: leftDate,
            jobTitle: jobTitle,
            roleDescr: roleDescr
        };

        setJobs(jobs => [...jobs, newJob]);
        setCompany('');
        setStartDate('');
        setLeftDate('');
        setJobTitle('');
        setRoleDescr('');
        setWorkDisplay('hidden');
    }

    function showWorkForm() {
        setWorkDisplay('showing');
    }

    function changeCompany(e) {
        setCompany(e.target.value);
    }

    function changeStartDate(e) {
        setStartDate(e.target.value);
    }

    function changeLeftDate(e) {
        setLeftDate(e.target.value);
    }

    function changeJobTitle(e) {
        setJobTitle(e.target.value);
    }

    function changeRoleDescr(e) {
        setRoleDescr(e.target.value);
    }

    return (
        <div>
            <button type='button' onClick={showWorkForm}>+</button>
            <form className={workDisplay}>
                <label>
                    Company:
                    <input type='text' value={company} onChange={changeCompany} />
                </label>

                <label>
                    Date Started:
                    <input type='text' value={startDate} onChange={changeStartDate} />
                </label>

                <label>
                    Date left:
                    <input type='text' value={leftDate} onChange={changeLeftDate} />
                </label>

                <label>
                    Job title:
                    <input type='text' value={jobTitle} onChange={changeJobTitle} />
                </label>

                <label>
                    Description of role:
                    <textarea value={roleDescr} onChange={changeRoleDescr} />
                </label>

                <button  type='button' onClick={addJob}></button>
            </form>

            <Job jobs={jobs} />
        </div>
    )
}

export default WorkForm;