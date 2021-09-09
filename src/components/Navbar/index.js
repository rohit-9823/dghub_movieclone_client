import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Modal,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navwrapper } from "./style";
import { useState } from "react";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";

export default function Navbars() {
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const handleS = () => setshowhide(true);
  const handleC = () => setshowhide(false);
  const [showhide, setshowhide] = useState(false);
  const [username, setUsername] = useState("");
  const [pass, setpass] = useState("");
  const [uname, setuname] = useState("");
  const [passwor, setpasswor] = useState("");
  const [loginstatus, setloginstatus] = useState("");

  const logins = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3021/login/client", {
      uname: uname,
      passwor: passwor,
    }).then((response) => {
      if (response.data.message) {
        //setloginstatus(response.data.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid username/password!",
        });
      } else {
        window.open(`/`, "_self");
        // window.close("/");
      }
    });
    console.log(uname);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Registered",
      text: "You can use your username and password for login",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload(3021);
      }
    });
  };
  const register12 = () => {
    Axios.post("http://localhost:3021/login", {
      username: username,
      pass: pass,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <Navwrapper>
      <Container>
        <Navbar expand="lg">
          <Link to="/">
            <img
              src="https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg"
              style={{ height: "30px" }}
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto buts">
             <Link to="/log"> <Button
                variant="primary"
                style={{ color: "black", marginRight: "30px" }}
                // onClick={handleShow}
              >
                Sign In
              </Button>
              </Link>
      {show?
            <div class="form-popup" id="myForm">
             <form className="form12">
            <label>Username:</label>
            <input
              type="text"
              onChange={(event) => {
                setuname(event.target.value);
              }}
            />
            <label>Password:</label>
            <input
              type="password"
              onChange={(event) => {
                setpasswor(event.target.value);
              }}
            />
            <span style={{ color: "white" }}>{loginstatus}</span>

            <button
              style={{ textDecoration: "none" }}
              className="btn btn-primary"
              onClick={logins}
            >
              Login
            </button>


          </form>
              </div>
:null}
             
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Navwrapper>
  );
}

//          <Link to="/log" className="nav-link">
// <button>Sign In</button>
// </Link>
