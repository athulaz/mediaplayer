import React, { useEffect, useState } from 'react'
import { deleteCategory, getCategory, getSpecificCategory, updateCategory } from '../Services/allApis'
import { toast } from 'react-toastify'
import Videocard from './Videocard'


function CategoryList(addres) {

  const [categories, setCategory] = useState([])


  useEffect(() => {
    getData()
  }, [addres])



  const getData = async () => {
    const cat = await getCategory()
    setCategory(cat.data)
  }


  const deleteCat = async (id) => {

    const res = await deleteCategory(id)
    console.log(res);
    if (res.status == 200) {
      toast.success("category removed")

      getData()

    } else {

      toast.error("something went wrong")

    }

  }

  const DragOver = (ev) => {
    ev.preventDefault()
    console.log("dargging over");

  }

  const handleDrop = async (ev, val) => {
    ev.preventDefault()
    console.log("dropping..")
    const catId = val
    const data = JSON.parse(ev.dataTransfer.getData("video"))
    console.log(data)

    const res = await getSpecificCategory(catId)
    const category = res.data
    category.catVideos.push(data)


    console.log(category)
    const resp = await updateCategory(catId, category)
    console.log(resp)

    if (resp.status == 200) {
      toast.success("video added to category")
      getData()
    }
    else {
      toast.warning("video adding to category failed")
    }
  }




  return (
    <>
      <div className='w-100 border p-2 shadow bg-secondary'>
        {
          categories.length > 0 ?
            <div>
              {
                categories.map(item => (

                  <div className='border bg-white border-3 shadow p-3 mb-5' onDragOver={(e) => { DragOver(e) }} onDrop={(e) => { handleDrop(e, item.id) }}>
                    <div className='d-flex justify-content-between'>
                      <h4 >{item.catName}</h4>
                      <button className='btn'><i className="fa-solid fa-trash" onClick={() => deleteCat(item.id)} style={{ color: "#ff0000", }} />
                      </button>

                    </div>

                    <div>
                      {item.catVideos.length > 0 &&
                        <div className='mt-3 p-2 border shadow'>
                          {
                            item.catVideos.map((vid) => (
                              <Videocard video={vid} cat={true} />
                            ))



                          }


                        </div>

                      }

                    </div>


                  </div>




                ))
              }



            </div>
            :
            <h5> no categories available </h5>

        }



      </div>
    </>
  )
}

export default CategoryList
