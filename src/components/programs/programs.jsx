import React from 'react'
import './programs.css'

export const Programs = () => {
  return (
    <div className='programs'>
        <div className="programs">
          <img src="image/program-1.png" alt="" />
          <div className="caption">
              <img src="image/program_icon_1" alt="" />
              <p>Graduation Degree</p>
          </div>
        </div> 

        <div className="programs">
        <img src="image/program-2.png" alt="" />
        <div className="caption">
            <img src="image/program_icon_2" alt="" />
            <p>Masters Degree</p>
        </div>
        </div>

        <div className="programs">
        <img src="image/program-3.png" alt="" />
        <div className="caption">
            <img src="image/program_icon_3" alt="" />
            <p>Post Graduation</p>
        </div>
        </div> 

       
    </div>
  )
}


export default Programs