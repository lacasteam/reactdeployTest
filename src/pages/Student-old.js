import {useState, useEffect} from 'react';
import axios from 'axios';


function Student() {
	const url = 'http://localhost/axios-app/db.php';
	const [fname, setFname] = useState();
	const [lname, setLname] = useState();
	const [age, setAge] = useState();
	const [students, setStudents] = useState([]);
	useEffect(() => {
	  
	  axios.get(url).then((response)=>{
		setStudents(response.data);
		console.log(students);
	  })
	
	//   return () => {
	// 	second
	//   }
	},[]);
	

	const submitBtn = (e) => {
		e.preventDefault();
		let getData = new FormData();
		getData.append('fname', fname); //key-value pairs
		getData.append('lname', lname);
		getData.append('age', age);
		getData.append('function', 'insert');
		axios({
			method: 'POST',
			url: 'http://localhost/axios-app/db.php',
			data: getData,
			config: 'Content-Type="multipart/form-data"'
		}).then(function (response) {
			axios.get(url).then((response)=>{
				setStudents(response.data);
				console.log(students);
			  })},[]);
	}

	const delBtn = (element) => { 
		let getData = new FormData();
		getData.append('student_id', element.currentTarget.id);
		getData.append('fname', fname); //key-value pairs
		getData.append('lname', lname);
		getData.append('age', age);
		getData.append('function', 'delete');
		axios({
			method: 'POST',
			url: 'http://localhost/axios-app/db.php',
			data: getData,
			config: 'Content-Type="multipart/form-data"'
		}).then(function (response) {
			axios.get(url).then((response)=>{
				setStudents(response.data);
				console.log(students);
			  })},[]);
	 }

	 const updateBtn = (element) => { 
		let getData = new FormData();
		getData.append('student_id', element.currentTarget.title);
		getData.append('fname', document.getElementById('fname'+element.currentTarget.title).value); //key-value pairs
		getData.append('lname', document.getElementById('lname'+element.currentTarget.title).value);
		getData.append('age', document.getElementById('age'+element.currentTarget.title).value);
		getData.append('function', 'update');
		console.log(getData);
		axios({
			method: 'POST',
			url: 'http://localhost/axios-app/db.php',
			data: getData,
			config: 'Content-Type="multipart/form-data"'
		}).then(function (response) {
			axios.get(url).then((response)=>{
				setStudents(response.data);
				console.log(students);
			  })},[]);
	  }

	  /**
	 	const upBtn = function (e) {
        alert(e.currentTarget.title);
        let getData = new FormData();
        getData.append('stud_id', e.currentTarget.title);
        getData.append('fname', document.getElementById('fname' + e.currentTarget.title).value);
        getData.append('lname', document.getElementById('lname' + e.currentTarget.title).value);
        getData.append('age', document.getElementById('age' + e.currentTarget.title).value);
        getData.append('function', 'update');
        axios({
            method: 'POST',
            url: 'http://localhost/sat-app/db.php',
            data: getData,
            config: 'Content-Type="multipart/form-data"',
        }).then(function (result) {
            alert("success");
            console.log(result);

        }).catch(function (error) {
            alert("failed");
            console.log(error);

        })
    }
 
	  */

	return ( 
		<div className='App'>
			<h1>Student's List</h1>
			<form>
				<input 
					type="text" 
					name="fname" 
					placeholder="First Name" 
					value={fname} onChange = {
							(e)=> setFname(e.target.value)
						}/><br/>
				<input 
					type="text" 
					name="lname" 
					placeholder="Last Name" 
					value={lname} onChange = {
							(e)=> setLname(e.target.value)
						}/><br/>
				<input 
					type="text" 
					name="age" 
					placeholder="Age" 
					value={age} onChange = {
							(e)=> setAge(e.target.value)
						}/><br/>
				<input type="submit" name="submit" value="Register" onClick={submitBtn}/><br/>
			</form>

			<table className='studentTable'>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>

					{students.map((student)=>{
						return(
							<tr key={student.student_id}>
								<td><input defaultValue={student.fname} id={'fname'+student.student_id}/></td>
								<td><input defaultValue={student.lname} id={'lname'+student.student_id}/></td>
								<td><input defaultValue={student.age} id={'age'+student.student_id}/></td>	
								<td>
									<button id={student.student_id} onClick={delBtn}>Delete</button>
								</td>
								<td>
									<button title={student.student_id} onClick={updateBtn}>Update</button>
								</td>
							</tr>
						)
					})}
				</tbody>

				{/* <tbody>{students.map((val) => {
                        return (
                            <tr key={val.stud_id}>
                                <td><input defaultValue={val.firstname} id={'fname' + val.stud_id} /></td>
                                <td><input defaultValue={val.lastname} id={'lname' + val.stud_id} /></td>
                                <td><input defaultValue={val.Age} id={'age' + val.stud_id} /></td>
                                <td><button id={val.stud_id} onClick={deleteBtn}>Del</button></td>
                                <td><button title={val.stud_id} onClick={upBtn}>Update</button></td>
                            </tr>
                        );
                    })}

                    </tbody> */}

			</table>
		</div>
	 );
}

export default Student;