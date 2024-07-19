import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
    return (
        <>
            <div className='container-fluid'>
                <Row>

                    <Col sm={12} md={6} className='d-flex flex-column justify-content-center p-5'>
                        <h1 className='text-primary'> media player </h1>
                        <p> Media player is an online platform for youtube video </p>

                        <Link to={'/home'} className='btn btn-success border shadow rounded '>  Lets go..</Link>

                    </Col>
                    <Col sm={12} md={6}>
                        <img src=" https://cdn-icons-png.flaticon.com/512/888/888881.png" alt="" height={'400px'} />
                    </Col>
                </Row>

            </div>
            <div className='mt-5 p-5'>
                <h1 className='text-center text-info'> Features</h1>

                <div className='d-flex justify-content-around mt-5'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'200px'} src="https://media1.giphy.com/media/WFmjWifrj9DJ50YaXj/giphy.gif?cid=6c09b952dft9q30p1r3632e51mnow1itbenw8oi6menhnl8q&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" />
                        <Card.Body>
                            <Card.Title>Manage videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'200px'} src="https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-08-190_512.gif" />
                        <Card.Body>
                            <Card.Title>upload videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'200px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" />
                        <Card.Body>
                            <Card.Title>Watch history</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </div>

                <div className='mt-5 p-5'>
                    <Row>
                        <Col sm={12} md={8}>
                            <h3 className='text-info'> Simple and fast</h3>
                            <p style={{ texAlign: 'justify' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas excepturi tempore iusto numquam. Totam consequuntur, ex perspiciatis dolores facilis, possimus, excepturi nisi illo tempora ratione maiores rerum! Perferendis, obcaecati.</p>
                        </Col>

                        <Col sm={12} md={4}>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/N3AkSS5hXMA?si=vRrWaBQUprGVakbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </Col>



                    </Row>

                </div>

            </div>





        </>
    )
}

export default Landing
