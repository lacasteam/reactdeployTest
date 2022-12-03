import { useState, useEffect } from 'react';
import axios from 'axios';//npm install axios in satpmclass-app

function Student() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [age, setAge] = useState();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const url = 'http://localhost/axios-app/db.php';//this url is from the db.php file
        axios.get(url).then((response) => {
            setStudents(response.data);
            console.log(students);
        })
    }, []);

    const submitBtn = function (e) {
        e.preventDefault();
        let getData = new FormData();
        getData.append('fname', fname);//key-value pairs
        getData.append('lname', lname);//key-value pairs
        getData.append('age', age);
        getData.append('function', 'insert');
        axios({
            method: 'POST', // get or post
            url: 'http://localhost/axios-app/db.php',   //db link
            data: getData, //data to be transfered
            config: 'Content-Type="multipart/form-data"',
        }).then(function (result) {
            const url = 'http://localhost/axios-app/db.php';
            axios.get(url).then((response) => {
                setStudents(response.data);
                console.log(students);
            })
        });
    };

    const deleteBtn = function (e) { 
        // alert(e.currentTarget.id);
        let getData = new FormData();
        getData.append('stud_id', e.currentTarget.id);
        getData.append('function', 'delete');
        axios({
            method: 'POST', // get or post
            url: 'http://localhost/axios-app/db.php',   //db link
            data: getData, //data to be transfered
            config: 'Content-Type="multipart/form-data"',
        }).then(function (result) {
            const url = 'http://localhost/axios-app/db.php';
            axios.get(url).then((response) => {
                setStudents(response.data);
                console.log(students);
            }).catch(function (error) {
                alert("failed");
                console.log(error);

            })
        })

    }

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
            url: 'http://localhost/axios-app/db.php',
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


    return (
        <div className='container mt-3 text-align-center'>
            <div>
                <h1>Student List</h1>
                <form>
                    <label for="fname">First Name</label>
                    <input type='text' className="form-control mb-3 w-50" placeholder="Enter First Name" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} />
                    <label for="lname">Last Name</label>
                    <input type='text' className="form-control mb-3 w-50" placeholder="Enter Last Name" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} />
                    <label for="age">Age</label>
                    <input type='number' className="form-control mb-3 w-50" placeholder="Enter Age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
                   
                    <input type='submit' class="btn btn-primary mb-3" onClick={submitBtn} /><br />
                </form>
            </div>
            <div>
                <table class="table table-dark table-hover w-100">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Del</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>{students.map((val) => {
                        return (
                           
                                <tr key={val.stud_id}>
                                    <td><input className="form-control mb-3 w-100" placeholder="Enter First Name" defaultValue={val.fname} id={'fname' + val.stud_id} /></td>
                                    <td><input className="form-control mb-3 w-100" placeholder="Enter First Name" defaultValue={val.lname} id={'lname' + val.stud_id} /></td>
                                    <td><input className="form-control mb-3 w-100" placeholder="Enter First Name" defaultValue={val.age} id={'age' + val.stud_id} /></td>
                                    <td><button class="btn btn-primary mb-3" id={val.stud_id} onClick={deleteBtn}>D</button></td>
                                    <td><button class="btn btn-primary mb-3" title={val.stud_id} onClick={upBtn}>U</button></td>
                                </tr>
                            
                        );
                    })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student;