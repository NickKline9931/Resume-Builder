import './../styles/Job.css';

function Job({jobs, setJobs}) {
    function deleteJob(deleted) {
        setJobs((current) => {
            return current.filter(job => job !== deleted);
        });
    };

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
                    <h4 className='roleDescr'>{job.roleDescr}</h4>
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