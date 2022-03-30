import React,{Component} from 'react';
//import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { validateFields } from './Validation';
import classnames from 'classnames';

const initialState = {
    email: {
      value: '',
      validateOnChange: false,
      error: ''
    },
    password: {
      value: '',
      validateOnChange: false,
      error: ''
    },
    submitCalled: false,
    allFieldsValidated: false
  };

class Login extends  Component{
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
      handleSubmit(evt) {
        evt.preventDefault();
        // validate all fields
        const { email, password } = this.state;
        const emailError = validateFields.validateEmail(email.value);
        const passwordError = validateFields.validatePassword(password.value);
        if ([emailError, passwordError].every(e => e === false)) {
          // no errors submit the form
          console.log('success');
    
          // clear state and show all fields are validated
          this.setState({ ...initialState, allFieldsValidated: true });
          this.showAllFieldsValidated();
        } else {
          // update the state with errors
          this.setState(state => ({
            email: {
              ...state.email,
              validateOnChange: true,
              error: emailError
            },
            password: {
              ...state.password,
              validateOnChange: true,
              error: passwordError
            }
          }));
        }
      }
    
      showAllFieldsValidated() {
        setTimeout(() => {
          this.setState({ allFieldsValidated: false });
        }, 1500);
      }
    render(){
        const { email, password, allFieldsValidated } = this.state;
        return(
            
              <React.Fragment>
                  <div className='container'>   
                  <h3 className='secone-form'>Add User</h3> 
                    <Form onSubmit={evt => this.handleSubmit(evt)}>
                        <FormGroup>
                            <Label for="exampleName">
                            Name
                            </Label>
                            <Input
                            id="exampleName"
                            name="name"
                            placeholder="Enter your Username or Email"
                            type="name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                            Email
                            </Label>
                            <Input
                            // id="exampleemail"
                            name="name"
                            value={email.value}
                            placeholder="Enter your Email Id"
                            type="email"
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
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleRole">
                            Your Role
                            </Label>
                            <Input
                            id="examplerole"
                            name="role"
                            type="select"
                            >
                            <option>
                                Select Your Role
                            </option>
                            <option>
                                Admin
                            </option>
                            <option>
                                Bussiness Analytics
                            </option>
                            <option>
                                Developer
                            </option>
                            <option>
                                Desinger
                            </option>
                            <option>
                                Content Writer
                            </option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleDOJ">
                            Date of Joining
                            </Label>
                            <Input
                            id="exampledoj"
                            name="name"
                            placeholder="Enter your Date of Joining"
                            type="date"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleDOB">
                            Date of Birth
                            </Label>
                            <Input
                            id="exampledob"
                            name="name"
                            placeholder="Enter your Date od Birth"
                            type="date"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">
                            Password
                            </Label>
                            <Input
                            id="examplePassword"
                            name="password"
                            value={password.value}
                            placeholder="Enter your Password"
                            type="password"
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
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleConfirmpassword">
                            Confirm Password
                            </Label>
                            <Input
                            id="exampleconfirmpassword"
                            name="password"
                            placeholder="Enter your Password"
                            type="password"
                            />
                        </FormGroup>
                        <button
                type="submit"
                className="btn btn-primary"
                onMouseDown={() => this.setState({ submitCalled: true })}
              >
                Sign Up
              </button>
                        {/* <button type="submit" class="btn btn-primary">Login</button> */}
                    </Form>
                    </div>
              </React.Fragment>
        )
    }
}
export default Login;