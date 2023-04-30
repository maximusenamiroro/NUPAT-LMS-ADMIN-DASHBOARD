import React from "react";
import Videopic from './img/vidpic2.svg';
import Playicon from '../../Components/Assets/Icon/playbtn.svg';

const Lesson2 = () => {
  return (
  <>

<div className='mt-2'>

{/* Header */}

<div className='flex justify-between'>
 <div>
   <p>Lesson 2: Introduction to Wireframing</p>
 </div>
 <div className="mr-16">
        <button className='Btn py-2 px-6 rounded-lg text-white text-lg'>prev</button>
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



                       <div className="mb-4">
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

 </div>
 </div>
</div>

  </>
  );
};

export default Lesson2;
