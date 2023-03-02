import React, { useState, useEffect } from 'react';

function NameForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

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

    render (
        <div>
            <form>
                    <label>
                        First Name:
                        <input type='text' value={firstName} onChange={changeFirstName}></input>
                    </label>

                    <label>
                        Last Name:
                        <input type='text' value={lastName} onChange={changeLastName}></input>
                    </label>

                    <label>
                        Address:
                        <input type='text' value={address} onChange={changeAddress}></input>
                    </label>

                    <label>
                        Phone:
                        <input type='number' value={phone} onChange={changePhone}></input>
                    </label>

                    <label>
                        Email:
                        <input type='email' value={email} onChange={changeEmail}></input>
                    </label>

                    <button type='submit'>Submit</button>
                </form>
        </div>
    )
}