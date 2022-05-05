import React, { useState } from 'react'
import Styles from '../styles/Home.module.css'

function subscribe() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

    const handleFirstNameChange = (event) => {
      setValues({...values, firstName: event.target.value})
    }

    const handleLastNameChange = (event) => {
      setValues({...values, lastName: event.target.value})
    }

    const handleEmailChange = (event) => {
      setValues({...values, email: event.target.value})
    }

    // const handleSubmit = (event) => {
    //   event.preventDefault(event)
    //   if (values.firstName && values.lastName && values.email) {
    //     fetch('http://localhost:3000/api/subscribe', {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         firstName: values.firstName,
    //         lastName: values.lastName,
    //         email: values.email,
    //       }),
    //       headers: {
    //         'Content-Type' : 'application/json',
    //       }
    //     })
    //     .then((res) => {
    //       setValid(true);
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     });
    //   }

    //   setSubmitted(true)


    // }

    const handleSubmit = (event) => {
      event.preventDefault(event)
      if (values.firstName && values.lastName && values.email) {
      setValid(true)
      }
      setSubmitted(true)
    }

  return (
    <>
    <div className="Header">
      <div className="page_text" style={{'font-size': 28 + 'px'}}>
        Submission Form
      </div>
      <div className="Header-body">
        Please subscribe to receive latests <br></br>
        news and updates!
      </div>
    </div>
    <div className={Styles.parentContainer} style={{'display': 'flex', 'justify-content': 'center'}}>
      <form className={Styles.registForm}>
        { submitted && valid ? <div className={Styles.success} > Success! Thanks for subscribing </div> : <> </> }
        { submitted && !values.firstName ? <span className={Styles.error}>Please enter a first name </span> : null }
        <input
          className={Styles.formField}
          placeholder="First Name"
          value={values.firstName}
          onChange={handleFirstNameChange}
          name="firstName"/>
          { submitted && !values.lastName ? <span className={Styles.error}> Please enter a last name </span> : null }
        <input
          className={Styles.formField}
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleLastNameChange}
          name="lastName"/>
          { submitted && !values.email ? <span className={Styles.error}>Please enter a email </span> : null }
        <input
          className={Styles.formField}
          placeholder="Email"
          value={values.email}
          onChange={handleEmailChange}
          name="email"/>
        <button
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default subscribe