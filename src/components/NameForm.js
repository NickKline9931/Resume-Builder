import React from 'react';
import './../styles/NameForm.css';

function NameForm({ nameDisplay, setNameDisplay, firstName, lastName, address, phone, email, setFirstName, setLastName, setAddress, setPhone, setEmail }) {

    function hideNameForm() {
        setNameDisplay('hidden');
    }

    function changeFirstName(e) {
        setFirstName(e.target.value);
    }

    function changeLastName(e) {
        setLastName(e.target.value);
    }

    function changeAddress(e) {
        setAddress(e.target.value);
    }

    function changePhone(e) {
        setPhone(e.target.value);
    }

    function changeEmail(e) {
        setEmail(e.target.value);
    }

    return (
        <div className={nameDisplay}>
            <form>
                    <label>
                        First Name:
                        <input type='text' value={firstName} onChange={changeFirstName} />
                    </label>

                    <label>
                        Last Name:
                        <input type='text' value={lastName} onChange={changeLastName} />
                    </label>

                    <label>
                        Address:
                        <input type='text' value={address} onChange={changeAddress} />
                    </label>

                    <label>
                        Phone:
                        <input type='number' value={phone} onChange={changePhone} />
                    </label>

                    <label>
                        Email:
                        <input type='email' value={email} onChange={changeEmail} />
                    </label>

                    <button type='button' onClick={hideNameForm}>Submit</button>
                </form>
        </div>
    )
}

export default NameForm;