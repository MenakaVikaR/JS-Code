import React from 'react'
import Table from 'react-bootstrap/Table'
import JsonData from './data.json';
function Userlist(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.email}</td>
          <td>{info.role}</td>
          <td>{info.empid}</td>
          <td>{info.doj}</td>
          <td>{info.dob}</td>
          <td><button type="submit" class="btn btn-success">Edit</button></td>
          <td><button type="submit" class="btn btn-danger">Delete</button></td>
				</tr>
			)
		}
	)

	return(
    <React.Fragment>
                <Table responsive className='table table-striped'>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Emp ID</th>
      <th>DOB</th>
      <th>DOJ</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {DisplayData}
  </tbody>
</Table>
</React.Fragment>
		// <div>
		// 	<table class="table table-striped">
		// 		<thead>
		// 			<tr>
		// 			<th>id</th>
		// 			<th>Name</th>
		// 			<th>City</th>
		// 			</tr>
		// 		</thead>
		// 		<tbody>
				
					
		// 			{DisplayData}
					
		// 		</tbody>
		// 	</table>
			
		// </div>
	)
}

export default Userlist;
