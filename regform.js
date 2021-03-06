import React, { Component } from 'react';
import { validateFields } from './Validation';
// import { Link } from 'react-router-dom';
import classnames from 'classnames';
import axios from 'axios';


const initialState = {
  name: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  email: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  yourid: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  yourrole: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  datejoining: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  datebirth: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  password: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  confirmpassword: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  submitCalled: false,
  allFieldsValidated: false
};

class Registerform extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  /*
   * validates the field onBlur if sumbit button is not clicked
   * set the validateOnChange to true for that field
   * check for error
   */
  handleBlur(validationFunc, evt) {
    const field = evt.target.name;
    // validate onBlur only when validateOnChange for that field is false
    // because if validateOnChange is already true there is no need to validate onBlur
    if (
      this.state[field]['validateOnChange'] === false &&
      this.state.submitCalled === false
    ) {
      this.setState(state => ({
        [field]: {
          ...state[field],
          validateOnChange: true,
          error: validationFunc(state[field].value)
        }
      }));
    }
    return;
  }

  /*
   * update the value in state for that field
   * check for error if validateOnChange is true
   */
  handleChange(validationFunc, evt) {
    const field = evt.target.name;
    const fieldVal = evt.target.value;
    this.setState(state => ({
      [field]: {
        ...state[field],
        value: fieldVal,
        error: state[field]['validateOnChange'] ? validationFunc(fieldVal) : ''
      }
    }));
  }
  /*
   * validate all fields
   * check if all fields are valid if yes then submit the Form
   * otherwise set errors for the feilds in the state
   */
  async handleSubmit(evt) {
    evt.preventDefault();
    const newPerson = { ...this.state };
 
    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    // setForm({ name: "", position: "", level: "" });
    // navigate("/");

    // validate all fields
    const { name, email, yourid, yourrole, datejoining, datebirth, password, confirmpassword } = this.state;
    const nameError = validateFields.validateName(name.value);
    const emailError = validateFields.validateEmail(email.value);
    const youridError = validateFields.validateYourid(yourid.value);
    const yourroleError = validateFields.validateYourrole(yourrole.value);
    const datejoiningError = validateFields.validateDatejoining(datejoining.value);
    const datebirthError = validateFields.validateDatebirth(datebirth.value);
    const passwordError = validateFields.validatePassword(password.value);
    const confirmpasswordError = validateFields.validateConfirmpassword(confirmpassword.value);
    if ([nameError, emailError, youridError, yourroleError, datebirthError, datejoiningError, passwordError, confirmpasswordError].every(e => e === false)) {
      // no errors submit the form
      console.log('success');

      // clear state and show all fields are validated
      this.setState({ ...initialState, allFieldsValidated: true });
      this.showAllFieldsValidated();
    } else {
      // update the state with errors
      this.setState(state => ({
        name: {
          ...state.name,
          validateOnChange: true,
          error: nameError
        },
        email: {
          ...state.email,
          validateOnChange: true,
          error: emailError
        },
        yourid: {
          ...state.name,
          validateOnChange: true,
          error: youridError
        },
        yourrole: {
          ...state.yourrole,
          validateOnChange: true,
          error: yourroleError
        },
        datejoining: {
          ...state.yourrole,
          validateOnChange: true,
          error: datejoiningError
        },
        datebirth: {
          ...state.yourrole,
          validateOnChange: true,
          error: datebirthError
        },
        password: {
          ...state.password,
          validateOnChange: true,
          error: passwordError
        },
        confirmpassword: {
          ...state.password,
          validateOnChange: true,
          error: confirmpasswordError
        }
      }));
    }
  }

  showAllFieldsValidated() {
    setTimeout(() => {
      this.setState({ allFieldsValidated: false });
    }, 1500);
  }

  render() {
    const { name, yourid, yourrole, datejoining, datebirth, confirmpassword, email, password, allFieldsValidated } = this.state;
    return (
      <div className="container">
        <div className="card shadow">
          <div className="card-header">
            <h4 className="text-center">Madarth Login</h4>
          </div>

          <div className="card-body">
            {allFieldsValidated && (
              <p className="text-success text-center">
                Success, All fields are validated
              </p>
            )}

            {/* Form Starts Here */}
            <form onSubmit={evt => this.handleSubmit(evt)}>

              {/* Name field */}
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name.value}
                  placeholder="Enter your name"
                  className={classnames(
                    'form-control',
                    { 'is-valid': name.error === false },
                    { 'is-invalid': name.error }
                  )}
                  onChange={evt =>
                    this.handleChange(validateFields.validateName, evt)
                  }
                  onBlur={evt =>
                    this.handleBlur(validateFields.validateName, evt)
                  }
                />
                <div className="invalid-feedback">{name.error}</div>
              </div>

              {/* Email field */}
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={email.value}
                  placeholder="Enter your email"
                  className={classnames(
                    'form-control',
                    { 'is-valid': email.error === false },
                    { 'is-invalid': email.error }
                  )}
                  onChange={evt =>
                    this.handleChange(validateFields.validateEmail, evt)
                  }
                  onBlur={evt =>
                    this.handleBlur(validateFields.validateEmail, evt)
                  }
                />
                <div className="invalid-feedback">{email.error}</div>
              </div>

              {/* yourid field */}
              <div className="form-group">
                <label>YourID</label>
                <input
                  type="text"
                  name="yourid"
                  value={yourid.value}
                  placeholder="Enter your your-id"
                  className={classnames(
                    'form-control',
                    { 'is-valid': yourid.error === false },
                    { 'is-invalid': yourid.error }
                  )}
                  onChange={evt =>
                    this.handleChange(validateFields.validateYourid, evt)
                  }
                  onBlur={evt =>
                    this.handleBlur(validateFields.validateYourid, evt)
                  }
                />
                <div className="invalid-feedback">{yourid.error}</div>
              </div>

              {/* yourrole field */}
              <div className="form-group">
                <label>Your Role</label>
                <input
                  type="text"
                  name="yourrole"
                  value={yourrole.value}
                  placeholder="Enter your Your Role"
                  className={classnames(
                    'form-control',
                    { 'is-valid': yourrole.error === false },
                    { 'is-invalid': yourrole.error }
                  )}
                  onChange={evt =>
                    this.handleChange(validateFields.validateYourrole, evt)
                  }
                  onBlur={evt =>
                    this.handleBlur(validateFields.validateYourrole, evt)
                  }
                />
                <div className="invalid-feedback">{yourrole.error}</div>
              </div>

              {/* Date of Joining field */}
              <div className="form-group">
                <label>Date of Joining</label>
                <input
                  type="date"
                  name="datejoining"
                  value={datejoining.value}
                  placeholder="Enter your Date of Joining"
                  className={classnames(
                    'form-control',
                    { 'is-valid': datejoining.error === false },
                    { 'is-invalid': datejoining.error }
                  )}
                  onChange={evt =>
                    this.handleChange(validateFields.validateDatejoining, evt)
                  }
                  onBlur={evt =>
                    this.handleBlur(validateFields.validateDatejoining, evt)
                  }
                />
                <div className="invalid-feedback">{datejoining.error}</div>
              </div>

              {/* Date of Birth field */}
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="datebirth"
                  value={datebirth.value}
                  placeholder="Enter your Date of Birth"
                  className={classnames(
                    'form-control',
                    { 'is-valid': datebirth.error === false },
                    { 'is-invalid': datebirth.error }
                  )}
                  onChange={evt =>
                    this.handleChange(validateFields.validateDatebirth, evt)
                  }
                  onBlur={evt =>
                    this.handleBlur(validateFields.validateDatebirth, evt)
                  }
                />
                <div className="invalid-feedback">{datebirth.error}</div>
              </div>


              {/* Password field */}
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password.value}
                  placeholder="Enter your password"
                  className={classnames(
                    'form-control',
                    { 'is-valid': password.error === false },
                    { 'is-invalid': password.error }
                  )}
                  onChange={evt =>
                    this.handleChange(validateFields.validatePassword, evt)
                  }
                  onBlur={evt =>
                    this.handleBlur(validateFields.validatePassword, evt)
                  }
                />
                <div className="invalid-feedback">{password.error}</div>
              </div>
              
              {/* Confirm password field */}
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  value={confirmpassword.value}
                  placeholder="Enter your Confirm Password"
                  className={classnames(
                    'form-control',
                    { 'is-valid': confirmpassword.error === false },
                    { 'is-invalid': confirmpassword.error }
                  )}
                  onChange={evt =>
                    this.handleChange(validateFields.validateConfirmpassword, evt)
                  }
                  onBlur={evt =>
                    this.handleBlur(validateFields.validateConfirmpassword, evt)
                  }
                />
                <div className="invalid-feedback">{confirmpassword.error}</div>
                <button
                type="submit"
                className="btn btn-primary rowbtn"
                onMouseDown={() => this.setState({ submitCalled: true })}
              >
                Sign Up
              </button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registerform;

