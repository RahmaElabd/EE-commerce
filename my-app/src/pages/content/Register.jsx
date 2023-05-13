import { useState } from "react";
import axios from "../../../api/axios";

function Register() {
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [pwd, setPwd] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { mail, pwd, name, phone };

    try {
      const response = await axios.post(`/user`, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    console.log(JSON.stringify(data));
  };

  return (
    <div className="container">
      <div className="w-75">
        <h1 className="py-4">Register</h1>

        <form className=" mr-5">
          {<div className="alert "></div>}
          <label htmlFor="name">Name :</label>
          <input
            type="name"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          {<div className="text-danger"></div>}

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            onChange={(e) => setMail(e.target.value)}
          />
          {<div className="text-danger"></div>}

          <label htmlFor="phone">Phone :</label>
          <input
            type="phone"
            name="phone"
            id="phone"
            className="form-control"
            onChange={(e) => setPhone(e.target.value)}
          />
          {<div className="text-danger"></div>}

          <label htmlFor="password">password :</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            onChange={(e) => setPwd(e.target.value)}
          />

          {<div className="text-danger"></div>}
          <button
            className="btn  my-3"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
