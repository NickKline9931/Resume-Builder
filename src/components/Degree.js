import './../styles/Degree.css';
import pencil from './../images/pencil.png';

function Degree({degrees, setDegrees, school, setSchool, schoolStartDate, setSchoolStartDate, finishDate, setFinishDate, field, setField, certification, setCertification, setDegreeSaver, setEducationFormDisplay}) {
    function deleteDegree(deleted) {
        setDegrees((current) => {
            return current.filter(degree => degree !== deleted);
        });
    };

    function editDegree(edit) {
        setDegreeSaver(degrees);
        setSchool(edit.school);
        setSchoolStartDate(edit.startDate);
        setFinishDate(edit.finishDate);
        setField(edit.field);
        setCertification(edit.certification);
        deleteDegree(edit);
        setEducationFormDisplay('showing');
    }

     const listItems = degrees.map(
        (degree, index) => {
            return (
                <li key={index} className='degreeItem'>
                    <h4>{degree.school}</h4>
                    <div className='schoolDateDisplay'>
                        <h4 className='schoolStart'>From: {degree.startDate}</h4>
                        <h4>To: {degree.finishDate}</h4>
                    </div>
                    <h4>{degree.field}</h4>
                    <h4>{degree.certification}</h4>
                    <button type='button' onClick={() => {deleteDegree(degree)}} className='degreeDelete'>X</button>
                    <button type='button' onClick={() => {editDegree(degree)}} className='degreeEdit'><img src={pencil} alt='pencil'></img></button>
                </li>
            )
        }
     )
    return (
        <div className='degreeContainer'>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default Degree;