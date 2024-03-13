import React from 'react'
import { Camera } from 'react-camera-pro';

const Assessment = () => {
 const [numberOfCameras, setNumberOfCameras] = React.useState(0);
 const camera = React.useRef(null);
 const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
 const hours = 2;
 const minutes= 30;
 const seconds = 50;

  return (
    <div className='flex mt-3'>
        <div className='fixed camera-wrapper bottom-[50px] right-[50px]'>
           <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} />
        </div>
        <div className='w-[60px] px-2'>
            {numbersArray.map((number, index) => (
            <button key={index} className={`${index === 5 ? 'bg-primary text-white' : 'bg-gray-300'} rounded p-3 text-sm mb-2 block w-full`}>
               {number}
            </button>
        ))}
        </div>
        <section className='w-[calc(100%-60px)] px-3'>
        <div className='mt-0 py-5 bg-primary px-5 text-white rounded-lg'>
                     <h5 className='text-lg flex justify-between'>
                        {'Access Bank Graduate Trainee Assessment'}  
                         <span className='text-sm flex items-center'> 
                            <i className='text-md bi bi-clock-history mr-2'>
                             </i>   {hours < 10 ? `0${hours}` : hours }: {minutes < 10 ? `0${minutes}` : minutes }: {seconds < 10 ? `0${seconds}` : seconds }
                         </span>
                     </h5> 
                     <p className='text-[12px]'>
                        please attempt all questions.
                     </p>
                     <div className='mt-4 bg-white py-4 rounded-lg text-gray-900 px-4 flex justify-between'>
                          <span className='text-sm'> 
                              Question 6 of {20}
                           </span>
                          <span className='text-xs'> Section: &nbsp;{'Aptitude'}</span>
                     </div>
                </div>
                  <section className='px-3'>
                  <h3 className='text-md mt-4'>Question:</h3>
                <p 
                    className='text-md w-[900px]' 
                 >
                    As artificial intelligence continues to shape various facets of our 
                    technological landscape, which multifaceted field is dedicated to the 
                    development of algorithms, models, and systems capable of performing
                     tasks traditionally requiring human intelligence, 
                    such as problem-solving, pattern recognition, and decision-making?
                 </p>
                 <h5 className='text-md mt-8 mb-3'> Options </h5> 
                 <div className='flex flex-wrap'> 
                     <div className='flex items-center  w-[90%] md:w-[35%] pr-5 mb-12'>               
                                 <span className='text-xl flex items-center'>
                                 <label className='text-xs mr-2 px-3 py-2 rounded-full border border-gray-900'>
                                     A
                                 </label> &nbsp;   
                                     <span className='answer-wrapper text-xs'>
                                        Evolutionary Algorithms and Genetic Programming, fostering machine learning through 
                                        the principles of natural selection and genetic inheritance.
                                     </span>
                                 </span>
                        </div>
                        <div className='flex items-center  w-[90%] md:w-[35%] ml-5 pr-5 mb-12'>               
                                 <span className='text-xl flex items-center'>
                                 <label className='text-xs mr-2 px-3 py-2 rounded-full bg-primary text-white'>
                                     B
                                 </label> &nbsp;   
                                     <span className='answer-wrapper text-xs'>
                                     Cognitive Computing and Natural Language Understanding, enabling systems to comprehend, 
                                     interpret, and generate human language with nuanced context and meaning.
                                     </span>
                                 </span>
                        </div>
                        <div className='flex items-center  w-[90%] md:w-[35%] pr-5 mb-12'>               
                                 <span className='text-xl flex items-center'>
                                 <label className='text-xs mr-2 px-3 py-2 rounded-full border border-gray-900'>
                                     C
                                 </label> &nbsp;   
                                     <span className='answer-wrapper text-xs'>
                                     Swarm Intelligence and Collective Behavior, leveraging the
                                      power of decentralized decision-making and emergent behavior
                                      inspired by biological systems such as ant colonies and bird flocks.
                                     </span>
                                 </span>
                        </div>
                        <div className='flex items-center  w-[90%] md:w-[35%] ml-5 pr-5 mb-12'>               
                                 <span className='text-xl flex items-center'>
                                 <label className='text-xs mr-2 px-3 py-2 rounded-full border border-gray-900'>
                                     D
                                 </label> &nbsp;   
                                     <span className='answer-wrapper text-xs'>
                                     Quantum Computing and Artificial General Intelligence, pioneering new
                                      frontiers in computational power and cognitive flexibility, with 
                                      the potential to revolutionize 
                                     problem-solving and decision-making processes beyond classical 
                                     computing paradigms
                                     </span>
                                 </span>
                        </div>
                  </div>
                  </section>
        </section>
    </div>
  )
}

export default Assessment