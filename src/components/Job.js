

function Job({jobs}) {
    const listItems = jobs.map(
        (job) => {
            return (
                <li>
                    <h4>{job.company}</h4>
                    <h4>From {job.startDate}</h4>
                    <h4>To {job.leftDate}</h4>
                    <h4>{job.jobTitle}</h4>
                    <h4>{job.roleDescr}</h4>
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