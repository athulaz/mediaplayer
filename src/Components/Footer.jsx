import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <>
      <div className='container-fluid'> 

      <Row className='bg-info p-3'>
      <Col> <h4> Media player</h4> 
      <p style={{ textAlign:'justify'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium quos, eaque quidem recusandae voluptatum maxime aspernatur vel assumenda at placeat atque dolorum incidunt tenetur aut molestias ex qui hic?</p>
       </Col>


      <Col> 
      <h4> Links </h4>
      
       <ul> 
        <li>
             <Link className='text-dark text-decoration-none' to={'/'} > Landing  </Link>       
        </li>

        <li>
             <Link  className='text-dark text-decoration-none' to={'/home'} > Home  </Link>       
        </li>
        <li>
             <Link  className='text-dark text-decoration-none' to={'/hist'} > History </Link>       
        </li>
       </ul>
       </Col>

      <Col>
      <h4> Contact </h4>
       <p>Email: mediaplayer@gmail.com</p>
       <p>Phone: +917894745632</p>

<div> 
<textarea name="" id="" className='form-control'></textarea>
<button className='btn-secondary btn'> Send </button>
</div>

        </Col>

<p style={{textAlign:'center'}}>copyright &copy; 2024 all right reserved </p>

      </Row>
      
      
      </div>
    </>
  )
}

export default Footer
