import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidaber from "../Components/Sidebar";
 
export default function Create() {
 const [form, setForm] = useState({
   firstname: "",
   lastname: "",
   emailid: "",
   mobileno: "",
   empno: "",
   emprole: "",
   doj: "",
   dob: "",
   password: "",
   confirmpassword: "",
  //  name: "",
  //  position: "",
  //  level: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
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
 
   setForm({ firstname: "", lastname: "", emailid: "", mobileno: "", empno: "", emprole: "", doj: "", dob: "", password: "", confirmpassword: ""});
   navigate("/registeruser");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
  <div class="wrapper">
    {/* Sidebar Component */}
    <Sidaber/>
    <div class="main">
			<nav class="navbar navbar-expand navbar-light navbar-bg">
				<a class="sidebar-toggle js-sidebar-toggle">
                    <i class="hamburger align-self-center"></i>
                </a>
                {/* Header Component */}
                <Header/>
			</nav>

      {/* Dashboard Body Content */}
      <main class="content">
            <div class="container-fluid p-0">
            <div class="mb-3">
						<h1 class="h3 d-inline align-middle">Add User</h1>
						<a class="badge bg-dark text-white ms-2" href="#">
      To Add User Madarth Family
  </a><br/>
  <small>all fields are mandatory<span style={{color: "#cc0000"}}>*</span></small>
					</div>

                <div class="row">
                    <div class="col-12 col-lg-12">
                    <form onSubmit={onSubmit}>
							<div class="card">
								<div class="card-body card-form">
                                    <label class="card-title mb-0">First Name</label>
									<input type="text" class="form-control" placeholder="Enter employee's first name" id="firstname" value={form.firstname}
           onChange={(e) => updateForm({ firstname: e.target.value })}/>
                                    {/* <div className="errorMsg">{this.state.errors.firstname}</div> */}
								</div>
                                <div class="card-body">
                                    <label class="card-title mb-0">Last Name</label>
									<input type="text" class="form-control" placeholder="Enter employee's last name" id="lastname" value={form.lastname}
           onChange={(e) => updateForm({ lastname: e.target.value })}/>
                                    {/* <div className="errorMsg">{this.state.errors.lastname}</div> */}
                                </div>
                                <div class="card-body">
                                    <label class="card-title mb-0">Email</label>
									<input type="email" class="form-control" placeholder="Enter employee's email id"  id="emailid" value={form.emailid}
           onChange={(e) => updateForm({ emailid: e.target.value })}/>
                                    {/* <div className="errorMsg">{this.state.errors.emailid}</div> */}
                                </div>
                                <div class="card-body">
                                    <label class="card-title mb-0">Mobile</label>
									<input type="number" class="form-control" placeholder="Enter employee's mobile number"  id="mobileno" value={form.mobileno}
           onChange={(e) => updateForm({ mobileno: e.target.value })}/>
                                    {/* <div className="errorMsg">{this.state.errors.mobileno}</div> */}
                                </div>
                                <div class="card-body">
                                    <label class="card-title mb-0">Emp Id (number)</label>
									<input type="number" class="form-control" placeholder="Enter employee's role no" id="empno" value={form.empno}
           onChange={(e) => updateForm({ empno: e.target.value })}/>
                                    {/* <div className="errorMsg">{this.state.errors.empno}</div> */}
                                </div>
                                <div class="card-body">
                                    <label class="card-title mb-0">Emp Role</label>
                                    <select class="form-select" aria-label="Default select example"  id="emprole" value={form.emprole}
           onChange={(e) => updateForm({ emprole: e.target.value })}>
                                    <option selected>Open this select menu</option>
  <option value="Admin">Admin</option>
  <option value="Content Writer">Content Writer</option>
  <option value="Graphic Designer">Graphic Designer</option>
  <option value="UI Developer">UI Developer</option>
                                    </select>
									{/* <input type="text" class="form-control" placeholder="Enter employee's role" name="emprole" value={this.state.fields.emprole} onChange={this.handleChange}/> */}
                                    {/* <div className="errorMsg">{this.state.errors.emprole}</div> */}
                                </div>
                                <div class="card-body">
                                    <label class="card-title mb-0">Date of Joining</label>
									<input type="date" class="form-control" placeholder="Enter employee's date of joining"  id="doj" value={form.doj}
           onChange={(e) => updateForm({ doj: e.target.value })}/>
                                    {/* <div className="errorMsg">{this.state.errors.doj}</div> */}
                                </div>
                                <div class="card-body">
                                    <label class="card-title mb-0">Date of Birth</label>
									<input type="date" class="form-control" placeholder="Enter employee's date of birth"  id="dob" value={form.dob}
           onChange={(e) => updateForm({ dob: e.target.value })}/>
                                    {/* <div className="errorMsg">{this.state.errors.dob}</div> */}
                                </div>
                                
                                <div class="card-body">
                                    <label class="card-title mb-0">Password</label>
									<input type="password" class="form-control" placeholder="Enter employee's password"  id="password" value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}/>
                                    {/* <div className="errorMsg">{this.state.errors.password}</div> */}
                                </div>

                                <div class="card-body">
                                    <label class="card-title mb-0">Confrim Password</label>
									<input type="password" class="form-control" placeholder="Enter employee's confrim password"  id="confirmpassword" value={form.confirmpassword}
           onChange={(e) => updateForm({ confirmpassword: e.target.value })}/>
                                    {/* <div className="errorMsg">{this.state.errors.confirmpassword}</div> */}
                                </div>

                                <div class="card-body card-btn">
                                {/* <input type="submit" className="button"  value="Register"/> */}
                                <button
                type="submit"
                className="btn btn-primary rowbtn"
                value="Register"
                // onMouseDown={() => this.setState({ submitCalled: true })}
              >
                Sign Up
              </button> 
								</div>
							</div>
                            </form>
                    </div>
                </div>

                </div>
            </main>

      {/* Footer Component */}
      <Footer/>
      </div>
  </div>
 );
}


// class Registeruser extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//           fields: {},
//           errors: {}
//         }
  
//         this.handleChange = this.handleChange.bind(this);
//         this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
//       };
  
//       handleChange(e) {
//         let fields = this.state.fields;
//         fields[e.target.name] = e.target.value;
//         this.setState({
//           fields
//         });
//       }
  
//       submituserRegistrationForm(e) {
//         e.preventDefault();
//         if (this.validateForm()) {
//           this.formSubmit();
//             let fields = {};
//             fields["firstname"] = "";
//             fields["lastname"] = "";
//             fields["emailid"] = "";
//             fields["mobileno"] = "";
//             fields["empno"] = "";
//             fields["emprole"] = "";
//             fields["doj"] = "";
//             fields["dob"] = "";
//             fields["password"] = "";
//             fields["confirmpassword"] = "";
//             this.setState({fields:fields});
//             // alert("Form submitted");
//         }
  
//       }
      
//       formSubmit(){
//         let fields = this.state.fields;

//         const recipeUrl = 'http://localhost:5000/record/add';
//           const postBody = {
//               "firstname": fields["firstname"],
//               "lastname": fields["lastname"],
//               "emailid": fields["emailid"],
//               "mobileno": fields["mobileno"],
//               "empno": fields["empno"],
//               "doj": fields["doj"],
//               "dob": fields["dob"],
//               "emprole": fields["emprole"],
//               "password": fields["password"],
//               "confirmpassword": fields["confirmpassword"],
//               // "confirmpassword":this.state.confirmpassword,
//               // limit: 10
//           };
//           console.log(postBody);
//           const requestMetadata = {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(postBody)
//           };
//           fetch(recipeUrl, requestMetadata)
//         .then(res => res.json())
//         .then(recipes => {
//             this.setState({ recipes });
//         });
//       }
//       validateForm() {
  
//         let fields = this.state.fields;
//         let errors = {};
//         let formIsValid = true;
  
//         if (!fields["firstname"]) {
//           formIsValid = false;
//           errors["firstname"] = "*Please enter your employee firstname";
//         }
  
//         if (typeof fields["firstname"] !== "undefined") {
//           if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
//             formIsValid = false;
//             errors["firstname"] = "*Please enter alphabet characters only";
//           }
//         }

//         if (!fields["lastname"]) {
//             formIsValid = false;
//             errors["lastname"] = "*Please enter your employee lastname";
//           }
    
//           if (typeof fields["lastname"] !== "undefined") {
//             if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
//               formIsValid = false;
//               errors["lastname"] = "*Please enter alphabet characters only";
//             }
//           }
  
//         if (!fields["emailid"]) {
//           formIsValid = false;
//           errors["emailid"] = "*Please enter your employee email-ID";
//         }
  
//         if (typeof fields["emailid"] !== "undefined") {
//           //regular expression for email validation
//           var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//           if (!pattern.test(fields["emailid"])) {
//             formIsValid = false;
//             errors["emailid"] = "*Please enter your employee valid email-ID";
//           }
//         }
  
//         if (!fields["mobileno"]) {
//           formIsValid = false;
//           errors["mobileno"] = "*Please enter your employee mobile number";
//         }
  
//         if (typeof fields["mobileno"] !== "undefined") {
//           if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
//             formIsValid = false;
//             errors["mobileno"] = "*Please enter valid mobile number";
//           }
//         }

//         if (!fields["empno"]) {
//             formIsValid = false;
//             errors["empno"] = "*Please enter your employee Id";
//         }

//         if (!fields["emprole"]) {
//             formIsValid = false;
//             errors["emprole"] = "*Please enter your employee role";
//         }

//         if (!fields["doj"]) {
//             formIsValid = false;
//             errors["doj"] = "*Please enter your employee date of joining";
//         }

//         if (!fields["dob"]) {
//             formIsValid = false;
//             errors["dob"] = "*Please enter your employee date of birth";
//         }
        
//         if (!fields["password"]) {
//           formIsValid = false;
//           errors["password"] = "*Please enter your employee password";
//         }
  
//         if (typeof fields["password"] !== "undefined") {
//           if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
//             formIsValid = false;
//             errors["password"] = "*Please enter secure and strong password";
//           }
//         }
  
//         if (!fields["confirmpassword"]) {
//           formIsValid = false;
//           errors["confirmpassword"] = "*Please enter your confirm password";
//         }
  
//         if(fields["password"] != fields["confirmpassword"]){
//           formIsValid = false;
//           console.log(fields["password"] + ' ' + fields["confirmpassword"]);
//           errors["confirmpassword"] = "*Password does not match to confirm password";
//       } 
//         this.setState({
//           errors: errors
//         });
//         return formIsValid;
  
  
//       }
//     render() {
//         return (
//     <div class="wrapper">
//             {/* Sidebar Component */}
//             <Sidaber/>

//         <div class="main">
// 			<nav class="navbar navbar-expand navbar-light navbar-bg">
// 				<a class="sidebar-toggle js-sidebar-toggle">
//                     <i class="hamburger align-self-center"></i>
//                 </a>
//                 {/* Header Component */}
//                 <Header/>
// 			</nav>

//             {/* Dashboard Body Content */}
//             <main class="content">
//             <div class="container-fluid p-0">
//             <div class="mb-3">
// 						<h1 class="h3 d-inline align-middle">Add User</h1>
// 						<a class="badge bg-dark text-white ms-2" href="#">
//       To Add User Madarth Family
//   </a><br/>
//   <small>all fields are mandatory<span style={{color: "#cc0000"}}>*</span></small>
// 					</div>

//                 <div class="row">
//                     <div class="col-12 col-lg-12">
//                     <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
// 							<div class="card">
// 								<div class="card-body card-form">
//                                     <label class="card-title mb-0">First Name</label>
// 									<input type="text" class="form-control" placeholder="Enter employee's first name" name="firstname" value={this.state.fields.username} onChange={this.handleChange} />
//                                     <div className="errorMsg">{this.state.errors.firstname}</div>
// 								</div>
//                                 <div class="card-body">
//                                     <label class="card-title mb-0">Last Name</label>
// 									<input type="text" class="form-control" placeholder="Enter employee's last name" name="lastname" value={this.state.fields.username} onChange={this.handleChange}/>
//                                     <div className="errorMsg">{this.state.errors.lastname}</div>
//                                 </div>
//                                 <div class="card-body">
//                                     <label class="card-title mb-0">Email</label>
// 									<input type="email" class="form-control" placeholder="Enter employee's email id" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}/>
//                                     <div className="errorMsg">{this.state.errors.emailid}</div>
//                                 </div>
//                                 <div class="card-body">
//                                     <label class="card-title mb-0">Mobile</label>
// 									<input type="text" class="form-control" placeholder="Enter employee's mobile number" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}/>
//                                     <div className="errorMsg">{this.state.errors.mobileno}</div>
//                                 </div>
//                                 <div class="card-body">
//                                     <label class="card-title mb-0">Emp Id (number)</label>
// 									<input type="number" class="form-control" placeholder="Enter employee's role no" name="empno" value={this.state.fields.empno} onChange={this.handleChange}/>
//                                     <div className="errorMsg">{this.state.errors.empno}</div>
//                                 </div>
//                                 <div class="card-body">
//                                     <label class="card-title mb-0">Emp Role</label>
//                                     <select class="form-select" aria-label="Default select example" name="emprole" value={this.state.fields.emprole} onChange={this.handleChange}>
//                                     <option selected>Open this select menu</option>
//   <option value="Admin">Admin</option>
//   <option value="Content Writer">Content Writer</option>
//   <option value="Graphic Designer">Graphic Designer</option>
//   <option value="UI Developer">UI Developer</option>
//                                     </select>
// 									{/* <input type="text" class="form-control" placeholder="Enter employee's role" name="emprole" value={this.state.fields.emprole} onChange={this.handleChange}/> */}
//                                     <div className="errorMsg">{this.state.errors.emprole}</div>
//                                 </div>
//                                 <div class="card-body">
//                                     <label class="card-title mb-0">Date of Joining</label>
// 									<input type="date" class="form-control" placeholder="Enter employee's date of joining" name="doj" value={this.state.fields.doj} onChange={this.handleChange}/>
//                                     <div className="errorMsg">{this.state.errors.doj}</div>
//                                 </div>
//                                 <div class="card-body">
//                                     <label class="card-title mb-0">Date of Birth</label>
// 									<input type="date" class="form-control" placeholder="Enter employee's date of birth" name="dob" value={this.state.fields.dob} onChange={this.handleChange}/>
//                                     <div className="errorMsg">{this.state.errors.dob}</div>
//                                 </div>
                                
//                                 <div class="card-body">
//                                     <label class="card-title mb-0">Password</label>
// 									<input type="password" class="form-control" placeholder="Enter employee's password" name="password" value={this.state.fields.password} onChange={this.handleChange}/>
//                                     <div className="errorMsg">{this.state.errors.password}</div>
//                                 </div>

//                                 <div class="card-body">
//                                     <label class="card-title mb-0">Confrim Password</label>
// 									<input type="password" class="form-control" placeholder="Enter employee's confrim password" name="confirmpassword" value={this.state.fields.confirmpassword} onChange={this.handleChange}/>
//                                     <div className="errorMsg">{this.state.errors.confirmpassword}</div>
//                                 </div>

//                                 <div class="card-body card-btn">
//                                 {/* <input type="submit" className="button"  value="Register"/> */}
//                                 <button
//                 type="submit"
//                 className="btn btn-primary rowbtn"
//                 value="Register"
//                 // onMouseDown={() => this.setState({ submitCalled: true })}
//               >
//                 Sign Up
//               </button> 
// 								</div>
// 							</div>
//                             </form>
//                     </div>
//                 </div>

//                 </div>
//             </main>

//             {/* Footer Component */}
//             <Footer/>
//         </div>
//     </div>
//         );
//     }
// }
  
// export default Registeruser;