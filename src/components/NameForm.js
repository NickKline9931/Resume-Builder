import React from 'react';
import './../styles/NameForm.css';

function NameForm({ nameDisplay, setNameDisplay, name, address, phone, email, setName, setAddress, setPhone, setEmail, aboutMe, setAboutMe }) {

    function hideNameForm() {
        setNameDisplay('hidden');
    }

    function changeName(e) {
        setName(e.target.value);
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

    function changeAboutMe(e) {
        setAboutMe(e.target.value);
    }

    return (
        <div className={nameDisplay} id="nameForm">
            <h1 className='personalHeading'>Personal/Contact Info</h1>
            <form>
                    <label className='nameInput'>
                        Name:
                        <input type='text' value={name} onChange={changeName} />
                    </label>

                    <label className='addressInput'>
                        Address:
                        <input type='text' value={address} onChange={changeAddress} />
                    </label>

                    <label className='phoneInput'>
                        Phone:
                        <input type='number' value={phone} onChange={changePhone} />
                    </label>

                    <label className='emailInput'>
                        Email:
                        <input type='email' value={email} onChange={changeEmail} />
                    </label>

                    <label className='aboutMeInput'>
                        About Me:
                        <textarea maxLength="123" value={aboutMe} onChange={changeAboutMe} />
                    </label>

                    <button type='button' onClick={hideNameForm} className='nameButton'>Submit</button>
                </form>
        </div>
    )
}

export default NameForm;