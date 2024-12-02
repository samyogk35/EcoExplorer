import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <BootstrapNavbar bg="white" expand="lg" className="border-bottom">
      <Container fluid>
        <BootstrapNavbar.Brand as={Link} to="/" className="ms-4">
          EcoExplorer
        </BootstrapNavbar.Brand>

        <Nav className="ms-4 me-auto">
          {user && (
            <>
              <Nav.Link as={Link} to="/generate">
                Create
              </Nav.Link>
              <Nav.Link as={Link} to="/saved">
                Saved
              </Nav.Link>
            </>
          )}
        </Nav>

        <Nav className="me-4">
          {user ? (
            <div className="d-flex align-items-center gap-3">
              <span className="text-muted">{user.email}</span>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="d-flex align-items-center gap-3">
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Sign Up
              </Link>
            </div>
          )}
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
