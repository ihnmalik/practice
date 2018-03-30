import React from 'react';
import maleLogo from '../images/img1.png';
import { Table } from 'reactstrap';



// class InfoCard extends React.Component {
//   render() {
//     return (
//       <Table hover>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <td>Hasaan</td>
//           </tr>
//         </thead>
//         <tbody>
{/* <tr>
    <th scope="row">Gender</th>
    <td>Male</td>
</tr>
    <tr>
        <th scope="row">Current Amount</th>
        <td>1000000</td>
    </tr>
    <tr>
        <th scope="row">Account Type</th>
        <td>Current Account</td>
    </tr>
    <tr>
        <th scope="row">Description</th>
        <td>This is description</td>
    </tr>
        </tbody >
      </Table >
    );
  }
} */}


const InfoCard = () => (

    <div className="container">
        <h2>Bordered Table</h2>
        <p>The .table-bordered class adds borders on all sides of the table and the cells:</p>
        <table className="table table-bordered">

            <tbody>
                <tr>
                    <th>Name</th>
                    <td>Hasaan</td>
                </tr>

                <tr>
                    <th>Gender</th>
                    <td>Male</td>
                </tr>
                <tr>
                    <th scope="row">Current Amount</th>
                    <td>1000000</td>
                </tr>
                <tr>
                    <th scope="row">Account Type</th>
                    <td>Current Account</td>
                </tr>
                <tr>
                    <th scope="row">Description</th>
                    <td>This is description</td>
                </tr>
                <tr>
                    <th scope="row">Total Deposits</th>
                    <td>10000</td>
                </tr>
                <tr>
                    <th scope="row">Total Transactions</th>
                    <td>100000</td>
                </tr>
                <tr>
                    <td></td>
                    <td><button style={{float:"right", width: 60+'px'}} className="btn btn-warning">Edit</button></td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default InfoCard;
