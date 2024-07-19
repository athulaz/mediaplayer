import React, { useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import Addvideo from '../Components/Addvideo'
import Videolist from '../Components/Videolist'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'


function Home() {
  const [addResponce, setAddResponce]=useState("")
  return (

    <>
      <div className='container-fluid bg-light p-3'>

<div className='d-flex justify-content-between'>

<h1 className='text-info'> All Videos</h1>
<Link className='btn btn-link'to={'/hist'} > Watch history </Link>
</div>

       


        <Row>
          <Col sm={12} md={1}>

            <Addvideo setAdd={setAddResponce}/>
          </Col>
          <Col sm={12} md={8}>
            <Videolist addres={addResponce}/>
          </Col>
          <Col sm={12} md={3}>
            <Category/>
          </Col>
        </Row>

      </div>

    </>

  )
}

export default Home
