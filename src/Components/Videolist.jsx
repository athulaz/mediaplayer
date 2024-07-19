import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideo } from '../Services/allApis'




function Videolist({addres}) {

  const [videoData, setVideoData] = useState([])
  const [deleteResponce, setDeleteResponce] = useState("")

  
  useEffect(() => {
    getData()

  }, [addres, deleteResponce])

  const getData = async () => {
    const videos = await getVideo()
    console.log(videos.data)
    setVideoData(videos.data)
  }


 
  return (
    <>
      {
        videoData.length > 0 ?
          <div className='Sbg-primary p-5 shadow border border-3 rounded row justify-content-around'>

            {videoData.map((item) => (
              <Videocard  video={item} setDel={setDeleteResponce}/>

            ))}
          </div>
          :
          <h3 className='text-danger text-center'>No Videos Found</h3>
        

      }

    </>
  )
}

export default Videolist


