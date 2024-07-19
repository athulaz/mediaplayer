import React, { useEffect, useState } from 'react'
import { getHistory, deleteHistory } from '../Services/allApis'





function History() {


  const [his, setHis] = useState([])


  useEffect(() => {
    getData()
  }, [])



  const getData = async () => {
    const res = await getHistory()
    setHis(res.data)
  }


const removeHistory=async(id)=>{
const res= await deleteHistory(id)
console.log(res)
getData()

}




  return (
    <>
      <div className='p-5'>
        <h3 className='text-info my-3'> watch history</h3>
{his.length>0? 
  <table className='table table-bordered table-dark border border-3 shadow'>
          <thead>
            <tr>
              <th> video id</th>
              <th> caption</th>
              <th> video url</th>
              <th> date and time</th>
              <th> delete</th>
            </tr>
          </thead>
          <tbody>
            {his.map((item) => (
              <tr>
                <td>{item.videoId} </td>
                    
              <td>{item.caption} </td>
              <td>{item.videoUrl} </td>
                <td>{item.datetime} </td>
<td>                    <button className='btn'><i className="fa-solid fa-trash" onClick={() => removeHistory(item.id)} style={{ color: "#ff0000", }} /></button>
</td>
              </tr>


            ))}



          </tbody>

        </table>

: <h3>
  no history available
</h3>
}
        

      </div>
    </>
  )
}

export default History
