import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideo } from '../Services/allApis';


function Addvideo({setAdd}) {

  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({


videoId:"", caption:"", image:"", videoUrl:""

  })

  const submitForm= async()=>{
    const {videoId,caption,image,videoUrl}=video

    if(!videoId||!caption||!image||!videoUrl){
   toast.info("Enter Invalid inputs!!")
    }else{
   
      // changing watch url to embed url
      const code=videoUrl.split("v=")[1]
      const embedUrl=`https://www.youtube.com/embed/${code}?si=RbR4TH07-O8zvay4&autoplay=1`
      video.videoUrl=embedUrl

      const result= await addVideo(video)
      console.log(result);
      if(result.status===201){
        setVideo({videoId:'',caption:'',image:'',videoUrl:''})
    
        toast.success("Video Upload Successsfully!!")
        handleClose()
        setAdd(result)
       
      }else{
        console.log(result);
        toast.error("Video Uploading Failed")
      }

     
    }
  }


// console.log(video);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <button className='btn' onClick={handleShow}>
          <i className="fa-regular fa-square-plus fa-xl" style={{ color: "#63E6BE", }} />

        </button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>upload video details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel controlId="floatingid" label="videoid" className="mb-3" >
              <Form.Control type="text" onChange={(e)=>{setVideo({...video,videoId:e.target.value})}} placeholder="1" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingcaption" label="caption" className="mb-3">
              <Form.Control type="text" onChange={(e)=>{setVideo({...video,caption:e.target.value})}} placeholder="caption" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingimage" label="video image url" className="mb-3">
              <Form.Control type="text" onChange={(e)=>{setVideo({...video,image:e.target.value})}} placeholder="image url" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingvideo" label="youtube video url" className="mb-3">
              <Form.Control type="text"  onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}} placeholder="video url" />
            </FloatingLabel>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={submitForm}>upload</Button>
          </Modal.Footer>
        </Modal>


      </>
    </div>
  )
}

export default Addvideo
