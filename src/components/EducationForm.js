import React, { useState } from 'react';
import Degree from './Degree';

function EducationForm() {
    const [degrees, setDegrees] = useState([]);
    const [school, setSchool] = useState('');
    const [startDate, setStartDate] = useState('');
    const [finishDate, setFinishDate] = useState('');
    const [field, setField] = useState('');
    const [certification, setCertification] = useState('');
    const [educationFormDisplay, setEducationFormDisplay] = useState('hidden');

    function addDegree() {
        const newDegree = {
            school: school,
            startDate: startDate,
            finishDate: finishDate,
            field: field,
            certification: certification
        }
        
        setDegrees([...degrees, newDegree]);
        setSchool('');
        setStartDate('');
        setFinishDate('');
        setField('');
        setCertification('');
        setEducationFormDisplay('hidden');
    }

    function cancel() {
        setSchool('');
        setStartDate('');
        setFinishDate('');
        setField('');
        setCertification('');
        setEducationFormDisplay('hidden');
    }

    function showEducationForm() {
        setEducationFormDisplay('showing');
    }

    function changeSchool(e) {
        setSchool(e.target.value);
    }

    function changeStartDate(e) {
        setStartDate(e.target.value);
    }

    function changeFinishDate(e) {
        setFinishDate(e.target.value);
    }

    function changeField(e) {
        setField(e.target.value);
    }

    function changeCertification(e) {
        setCertification(e.target.value);
    }

    return (
        <div>
            <button type='button' onClick={showEducationForm}>+</button>
            <form className={educationFormDisplay} id='educationForm'>
                <button type='button' onClick={cancel}>Cancel</button>
                <label>
                    School Name:
                    <input type='text' value={school} onChange={changeSchool}></input>
                </label>

                <label>
                    Start Date:
                    <input type='text' value={startDate} onChange={changeStartDate}></input>
                </label>

                <label>
                    Finish Date:
                    <input type='text' value={finishDate} onChange={changeFinishDate}></input>
                </label>

                <label>
                    Field of Study:
                    <input type='text' value={field} onChange={changeField}></input>
                </label>

                <label>
                    Degree/Certification Attained:
                    <input type='text' value={certification} onChange={changeCertification}></input>
                </label>

                <button type='button' onClick={addDegree}>Submit</button>
            </form>

            <Degree degrees={degrees} setDegrees={setDegrees} />
        </div>
    )
}

export default EducationForm;