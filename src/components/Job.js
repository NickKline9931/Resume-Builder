

function Job({jobs, setJobs}) {
    function deleteJob(deleted) {
        setJobs((current) => {
            return current.filter(job => job !== deleted);
        });
    };

    const listItems = jobs.map(
        (job, index) => {
            return (
                <li key={index} id={index}>
                    <h4>{job.company}</h4>
                    <h4>From {job.startDate}</h4>
                    <h4>To {job.leftDate}</h4>
                    <h4>{job.jobTitle}</h4>
                    <h4>{job.roleDescr}</h4>
                    <button type='button' onClick={() => {deleteJob(job)}}>X</button>
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

export default Job;