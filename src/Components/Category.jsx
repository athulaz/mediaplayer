import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../Services/allApis';
import CategoryList from './CategoryList';
import { toast } from 'react-toastify';


function Category() {

  const [show, setShow] = useState(false);

  const [addres, setaddres] = useState("");


  const [category, setCategory] = useState({

    catId: "", catName: "", catVideos: []
  })

  const submitForm = async () => {
    const { catId, catName } = category

    if (!catId || !catName) {
      toast.info("Invalid inputs!!")
    }
    else {
      const res = await addCategory(category)
      if (res.status == 201) {
        toast.success("category added")
       
        handleClose()
        setaddres(addres)

        setCategory({
          catId: "", catName: "", catVideos: []
        })
      } else {

        toast.error("category addition failed")
        console.log(res)
      }

    }
  }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='d-grid'>

      <button className='btn btn-success' onClick={handleShow}> Add category </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add category </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>

          <div>
            <FloatingLabel controlId="floatingid" label="category id" className="mb-3" >
              <Form.Control type="text" placeholder="1" onChange={(e) => { setCategory({ ...category, catId: e.target.value }) }} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingcat" label="category name" className="mb-3">
              <Form.Control type="text" placeholder="music" onChange={(e) => { setCategory({ ...category, catName: e.target.value }) }} />
            </FloatingLabel>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={submitForm}>
            save
          </Button>

        </Modal.Footer>
      </Modal>

      <CategoryList addres={setaddres} />
    </div>
  )
}

export default Category
