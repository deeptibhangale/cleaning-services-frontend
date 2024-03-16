import { useState } from "react";

export default function Clients() {
  const [data, setData] = useState([]);
  function handleClick() {
    fetch("http://localhost:8080/clients", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data), console.log(data);
      })
      .catch("not fetching data");
  }

  return (
    <>
      <button onClick={handleClick}>Client-Detail</button>
      <div>
        <h1> client details are given below</h1>
        <table>
          <thead>
            <tr>
              <th>Id </th>
              <th>Name </th>
              <th>Contact </th>
              <th>Email </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.contactNum}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
