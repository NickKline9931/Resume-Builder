function Degree({degrees, setDegrees}) {
    function deleteDegree(deleted) {
        setDegrees((current) => {
            return current.filter(degree => degree !== deleted);
        });
    };

     const listItems = degrees.map(
        (degree, index) => {
            return (
                <li key={index}>
                    <h4>{degree.school}</h4>
                    <h4>From {degree.startDate}</h4>
                    <h4>To {degree.finishDate}</h4>
                    <h4>Field: {degree.field}</h4>
                    <h4>Certification: {degree.certification}</h4>
                    <button type='button' onClick={() => {deleteDegree(degree)}}>X</button>
                </li>
            )
        }
     )
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default Degree;