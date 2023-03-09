import React from 'react';
import './../styles/EducationForm.css';

function EducationForm({educationFormDisplay, setEducationFormDisplay, degreeSaver, school, setSchool, schoolStartDate, setSchoolStartDate, finishDate, setFinishDate, field, setField, certification, setCertification, degrees, setDegrees}) {

    function addDegree() {
        const newDegree = {
            school: school,
            startDate: schoolStartDate,
            finishDate: finishDate,
            field: field,
            certification: certification
        }
        
        setDegrees(degrees => [...degrees, newDegree]);
        setSchool('');
        setSchoolStartDate('');
        setFinishDate('');
        setField('');
        setCertification('');
        setEducationFormDisplay('hidden');
    }

    function cancel() {
        setSchool('');
        setSchoolStartDate('');
        setFinishDate('');
        setField('');
        setCertification('');
        setEducationFormDisplay('hidden');
        setDegrees(degreeSaver);
    }

    function changeSchool(e) {
        setSchool(e.target.value);
    }

    function changeStartDate(e) {
        setSchoolStartDate(e.target.value);
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
        <div className='schoolFormContainer'>
            <form className={educationFormDisplay} id='educationForm'>
                <label>
                    School Name:
                    <input type='text' value={school} onChange={changeSchool}></input>
                </label>
                <div className='schoolDates'>
                    <label>
                        Started:
                        <input type='text' value={schoolStartDate} onChange={changeStartDate}></input>
                    </label>

                    <label>
                        Finished:
                        <input type='text' value={finishDate} onChange={changeFinishDate}></input>
                    </label>
                </div>
                <label>
                    Field of Study:
                    <input type='text' value={field} onChange={changeField}></input>
                </label>

                <label className='certification'>
                    Degree/Certification:
                    <input type='text' value={certification} onChange={changeCertification}></input>
                </label>
                <div className='schoolButtons'>
                    <button type='button' onClick={cancel} className='cancelDegree'>Cancel</button>
                    <button type='button' onClick={addDegree}>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default EducationForm;