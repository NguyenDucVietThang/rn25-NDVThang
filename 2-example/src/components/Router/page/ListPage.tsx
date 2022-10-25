import React from "react";

function Home() {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td><button type="button" className="btn btn-success">
            Detail
          </button>
          <button type="button" className="btn btn-danger">
            Dedete
          </button></td>
          
        </tr>
      </tbody>
    </table>
  );
}

export default Home;
