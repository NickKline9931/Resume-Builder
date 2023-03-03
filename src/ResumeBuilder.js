import React, { useState } from 'react';
import NameForm from './components/NameForm';
import WorkForm from './components/WorkForm';
import './styles/ResumeBuilder.css';

function ResumeBuilder() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [nameDisplay, setNameDisplay] = useState('hidden');
    const [workDisplay, setWorkDisplay] = useState('hidden');

    function editName() {
        setNameDisplay('showing');
    }

    return (
        <div>
            <header>
                <h1>Resume Builder</h1>
            </header>

            <main>
                <div className="nameDiv">
                    <h4>Name: {firstName} {lastName}</h4>
                    <h4>Address: {address}</h4>
                    <h4>Phone: {phone}</h4>
                    <h4>Email: {email}</h4>
                    <button type="button" onClick={editName}></button>
                    <NameForm firstName={firstName} lastName={lastName} address={address} phone={phone} email={email} setFirstName={setFirstName} setLastName={setLastName} setAddress={setAddress} setPhone={setPhone} setEmail={setEmail} nameDisplay={nameDisplay} setNameDisplay={setNameDisplay} /> 
                </div>

                <WorkForm workDisplay={workDisplay} setWorkDisplay={setWorkDisplay} />
            </main>
        </div>
    )
}

export default ResumeBuilder;