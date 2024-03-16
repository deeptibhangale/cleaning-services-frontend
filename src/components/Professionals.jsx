import { useState } from "react";

export default function Professionals() {
  const [data, setData] = useState([]);
  function handleClick() {
    fetch("http://localhost:8080/workers", {
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
      <button onClick={handleClick}>Professionals</button>
      <div>
        <h1> Professional details are given below</h1>
        <table>
          <thead>
            <tr>
              <th>Id </th>
              <th>Name </th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
