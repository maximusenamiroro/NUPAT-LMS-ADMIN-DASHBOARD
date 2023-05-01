import React from 'react'
import Videopic from './img/vidpic.svg';
import Playicon from '../../Components/Assets/Icon/playbtn.svg';
import { Button } from '@mui/material';

const Lesson1 = () => {
  return (
    <>
         
      <div className='mt-2'>

           {/* Header */}
          
          <div className='flex justify-between'>
            <div>
              <p>Lesson 1: Introduction to UIUX </p>
            </div>
            <div>
                   <button className='Btn py-2 px-6 rounded-lg text-white text-lg'>Next</button>
            </div>
 </div>     

            {/* Body */}


            <div className='mt-4'>


            <div className="flex justify-center items-center">
            <img style={{ width: "100%" }} src={Videopic} alt="videopic" />
            <div className="absolute justify-center">
              <img src={Playicon} alt="Playbtn" />
            </div>
          </div>

                                  {/* Text */}


     
                                  <div>
            <h3 className="mt-4">
              UI design is known has User Interface Design While UX design is
              know has User Experience Design UI design is known has User
              Interface Design While UX design is know has User Experience
              Design UI design is known has User Interface Design While UX
              design is know has User Experience Design UI design is known has
              User Interface Design While UX design is know has User Experience
              Design UI design is known has User Interface Design While UX
              design is know has User Experience Design UI design is known has
              User Interface Design While UX design is know has User Experience
              Design UI design is known has User Interface Design While UX
              design is know has User Experience Design UI design is known has
              User Interface Design While UX design is know has User Experience
              Design UI design is known has User Interface Design While UX
              design is know has User Experience Design UI design is known has
              User Interface Design While UX design is know has User Experience
              Design UI design is known has User Interface Design While UX
              design is know has User Experience Design UI design is known has
              User Interface Design While UX design is know has Userxperience
              Design UI design is known has User Interface Design While UX
              design is know has User Experience Design UI design is known has
              User Interface Design While UX design is know has User Experience
              Design UI design is known has User Interface Design While UX
              design is know has User Experience Design UI design is known has
              User Interface Design While UX design is know has User Experience
              Design UI design is known has User Interface Design While UX
              design is know has User Experience Design{" "}
            </h3>

            <div>
              <h1 className="mt-4 font-medium text-2xl text-primary">
                Explanations
              </h1>
              <p className="mt-4">
                UI design is known has User Interface Design While UX design is
                know has User Experience Design UI design is known has User
                Interface Design While UX design is know has User Experience
                Design UI design is known has User Interface Design While UX
                design is know has User Experience Design UI design is known has
                User Interface Design While UX design is know has User
                Experience Design UI design is known has User Interface Design
                While UX design is know has User Experience Design UI design is
                known has User Interface Design While UX design is know has User
                Experience Design UI design is known has User Interface Design
                While UX design is know has User Experience Design UI design is
                known has User Interface Design While UX design is know has User
                Experience Design UI design is known has User Interface Design
                While UX design is know has User Experience Design UI design is
                known has User Interface Design While UX design is know has User
                Experience Design UI design is known has User Interface Design
                While UX design is know has User Experience Design UI design is
                known has User Interface Design While UX design is know has
                Userxperience Design UI design is known has User Interface
                Design While UX design is know has User Experience Design UI
                design is known has User Interface Design While UX design is
                know has User Experience Design UI design is known has User
                Interface Design While UX design is know has User Experience
                Design UI design is known has User Interface Design While UX
                design is know has User Experience Design UI design is known has
                User Interface Design While UX design is know has User
                Experience Design UI design is known has User Interface Design
                While UX design is know has User Experience Design UI design is
                known has User Interface Design While UX design is know has User
                Experience Design UI design is known has User Interface Design
                While UX design is know has User Experience Design UI design is
                known has User Interface Design While UX design is know has User
                Experience Design UI design is known has User Interface Design
                While UX design is know has User Experience Design UI design is
                known has User Interface Design While UX design is know has User
                Experience Design UI design is known has User Interface Design
                While UX design is know has User Experience Design UI design is
                known has User Interface Design While UX design is know has User
                Experience Design UI design is known has User Interface Design
                While UX design is know has User Experience Design UI design is
                known has User Interface Design While UX design is know has User
                Experience Design UI design is known has User Interface Design
                While UX design is know has User Experience Design UI design is
                known has User Interface Design While UX design is know has
                Userxperience Design UI design is known has User Interface
                Design While UX design is know has User Experience Design UI
                design is known has User Interface Design While UX design is
                know has User Experience Design UI design is known has User
                Interface Design While UX design is know has User Experience
                Design UI design is known has User Interface Design While UX
                design is know has User Experience Design UI design is known has
                User Interface Design While UX design is know has User
                Experience Design{" "}
              </p>
            </div>

            <div className="flex justify-center items-center mt-8">
              <img style={{ width: "100%" }} src={Videopic} alt="videopic" />
              <div className="absolute justify-center">
                <img src={Playicon} alt="Playbtn" />
              </div>
            </div>

            <div className="flex justify-center items-center mt-4">
              <img style={{ width: "100%" }} src={Videopic} alt="videopic" />
              <div className="absolute justify-center">
                <img src={Playicon} alt="Playbtn" />
              </div>
            </div>
          </div>
        </div>


      <p className='mt-4'>Url link</p>
      <div className="mb-1 pt-0">
  <input type="text" placeholder="Placeholder" className="px-3 py-3 mb-4 rounded-md border-slate-500 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border focus:border-none border-slate-300 outline-none focus:outline-none focus:ring w-full"/>
</div>

 <div>
  <Button sx={{
    backgroundColor: '#131E47',
    marginBottom: '30px',
  }}>
    Submit
  </Button>
 </div>
            </div>
 
 

    </>
  )
}

export default Lesson1