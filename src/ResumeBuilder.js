import React, { useState, useEffect } from 'react';

function ResumeBuilder() {

    render (
        <div>
            <header>
                <h1>Resume Builder</h1>
            </header>

            <main>
                <form>
                    <label>
                        First Name:
                        <input type='text' value={firstName}></input>
                    </label>

                    <label>
                        Last Name:
                        <input type='text' value={lastName}></input>
                    </label>

                    <label>
                        Address:
                        <input type='text' value={address}></input>
                    </label>

                    <label>
                        Phone:
                        <input type='number' value={phone}></input>
                    </label>

                    <label>
                        Email:
                        <input type='email' value={email}></input>
                    </label>

                    <button type='submit'>Submit</button>
                </form>
            </main>
        </div>
    )
}

export default ResumeBuilder;