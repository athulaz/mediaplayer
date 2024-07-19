import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <>  
       <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home">

<Link  to={'/'}> <i className="fa-solid fa-cloud-arrow-up fa-bounce textDecoration-none"  style={{color: "#74C0FC"}} />
         
          
           Media player  </Link>
          </Navbar.Brand>
        </Container>
      </Navbar> </>
    </div>
  )
}

export default Header
