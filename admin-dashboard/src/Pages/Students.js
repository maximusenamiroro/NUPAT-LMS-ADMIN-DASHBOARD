import React from 'react'
import "./Style.css"


const Student = () => {
  return (
  <>
   <div>

    <div className="filter">
     
    </div>  
                                   {/* TABLE */}

              <table className=' w-12/12'>
                <tr className='bg-primary text-white text-xl h-14'>
                  <th className='font-light'>S/N</th>
                  <th className='font-light'>Student’s Name</th>
                  <th className='font-light'>Course</th>
                  <th className='font-light'>Module </th>
                  <th className='font-light'>Lesson</th>
                  <th className='font-light'>Url</th>
                  <th className='font-light'>Status</th>
                </tr>
                                      

                               {/* LIST OF ALL THE DATA */}

                <tr className=' bg-transparent h-14'>
                 <td>01</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-reviewBG text-reviewText'>In Review </span></td>
                </tr>

                <tr className=' bg-slate-300 h-14'>
                 <td>02</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-expiredBG text-expiredText'>Expired </span></td>
                </tr>

                <tr className=' h-14'>
                 <td>03</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-redoBG text-redoText'>Redo </span></td>
                </tr>

                <tr className='bg-slate-300  h-14'>
                 <td>04</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-completedBG text-noneText'>None </span></td>
                </tr>

                <tr className=' h-14'>
                 <td>05</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-reviewBG text-reviewText'>In Review </span></td>
                </tr>

                <tr className='bg-slate-300  h-14'>
                 <td>06</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-redoBG text-redoText'>Redo </span></td>
                </tr>

                <tr className='h-14'>
                 <td>07</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-redoBG text-redoText'>Redo </span></td>
                </tr>

                <tr className='bg-slate-300 h-14'>
                 <td>08</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-expiredBG text-expiredText'>Expired</span></td>
                </tr>
                   
                <tr className='h-14'>
                 <td>09</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-expiredBG text-expiredText'>Expired</span></td>
                </tr>   

                <tr className='bg-slate-300 h-14'>
                 <td>10</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-completedBG text-noneText'>In Review </span></td>
                </tr>  

                <tr className='h-14'>
                 <td>11</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-expiredBG text-expiredText'>Expired</span></td>
                </tr>

                <tr className='bg-slate-300  h-14'>
                 <td>12</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-redoBG text-redoText'>In Review </span></td>
                </tr>

                <tr className='h-14'>
                 <td>13</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-reviewBG text-reviewText'>In Review</span></td>
                </tr>

                <tr className='bg-slate-300 h-14'>
                 <td>14</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-expiredBG text-expiredText'>Expire</span></td>
                </tr>
                   
                <tr className='h-14'>
                 <td>15</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-reviewBG text-reviewText'>In Review </span></td>
                </tr>   

                <tr className='bg-slate-300 h-14'>
                 <td>16</td>
                 <td>Student’s Name</td>
                 <td>Course</td>
                 <td>Module</td>
                 <td>Lesson</td>
                 <td>Url</td>
                 <td><span className=' bg-completedBG text-noneText'>In Review </span></td>
                </tr>  

              </table>




   </div>
  </>
  )
}

export default Student