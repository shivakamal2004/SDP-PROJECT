import axios from "axios";
import { useState } from "react";

export default function Placement() {
    const [result, setResult] = useState(null)

    function handleDelete(event) {
        alert(event.currentTarget.getAttribute("student"))
        axios.delete('http://localhost:8081/delete', {params: {
            "id":event.currentTarget.getAttribute("student")
        }}).then((response) => {
            console.log(response.data);
        })
    }

    if(result == null) {
        axios.get('http://localhost:8081/display').then((response) => {
            console.log(response.data);
            setResult(response.data);
        })
        return(
            <div>
                The Placement Data is Not There
            </div>
        );
    }
    else {
        return(
            <div>
                The Placement Data is Given Below <br/><br/>
                <table border="1">
                <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Placement Status</th>
                    <th>Company Name</th>
                    <th>CTC</th>
                    <th>Delete Button</th>
                </tr>
                {result.map((user) => {
                    return(
                        <tr>
                            <td>{user.sid}</td>
                            <td>{user.sname}</td>
                            <td>{user.pstatus}</td>
                            <td>{user.scompany}</td>
                            <td>{user.sctc}</td>
                            <td> <button onClick={handleDelete} student={user.sid}> Delete </button> </td>
                        </tr>
                    );
                })}
                </table>
            </div>
        );
    }

}