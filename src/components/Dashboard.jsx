import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
  { name: 'May', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 349, pv: 4300, amt: 2100 },
];

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <Card className="mb-4 bg-dark text-light">
            <Card.Body>
              <Card.Title>Analytics Overview</Card.Title>
              <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#6a0dad" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className="mb-4 bg-dark text-light">
            <Card.Body>
              <Card.Title>Data Table</Card.Title>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>UV</th>
                    <th>PV</th>
                    <th>AMT</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.name}</td>
                      <td>{entry.uv}</td>
                      <td>{entry.pv}</td>
                      <td>{entry.amt}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
