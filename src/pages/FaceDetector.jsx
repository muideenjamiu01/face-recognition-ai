import React, { useState, useRef, useEffect } from "react";
import {Camera} from "react-camera-pro";
import Header from "../layout/Header";
import ProgressBar from "@ramonak/react-progress-bar";

const FaceDetector = () => {
    
    const camera = useRef(null);
    const [numberOfCameras, setNumberOfCameras] = useState(0);
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)
    const [captureCount, setCaptureCount ] = useState(0)
    const [cameraEnabled, setCameraEnabled] = useState(false);

    useEffect(() => {
      const checkCameraPermission = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          setCameraEnabled(true);
          stream.getVideoTracks()[0].stop();  
        } catch (error) {
          setCameraEnabled(false);
        }
      };
      checkCameraPermission();
    }, []);

    const captureFace = () => {
         if(cameraEnabled){
          const photo = camera.current.takePhoto();
          setImage(photo);
          if(progress<=50) setProgress(progress + 50 )
          setCaptureCount(captureCount + 1)
         }
    }
  
    return (
       <div className="">
        <Header />
         <section className="mt-[50px] relative  h-[380px] rounded-lg w-[50%] mx-auto bg-gray-900">
            <Camera ref={camera}  numberOfCamerasCallback={setNumberOfCameras} />
             <img src={image} className="hidden" alt='Image preview' />
                <button
                  className="text-white border left-[38%] border-white text-sm rounded-full absolute bottom-[20px] mt-8 py-2 px-12 rounded-lg bi bi-camera"
                  onClick={captureFace}
                >
                     &nbsp; { captureCount >=1 ? 're-capture' : 'capture' } 
              </button>
                <div className="absolute top-[30px] left-[27%]">
                   <ProgressBar 
                         bgColor={'#87aa4b'} width="300px" 
                         baseBgColor='#eee'
                         completed={progress}
                       />
                </div>
         </section>
         <div className="mt-8">
             <button style={{background: '#87aa4b', opacity: isCompleted ? 1 : 0.5 }} 
                     className="text-white py-2 px-16 rounded-lg text-sm"
  
               >
                Continue
             </button>
         </div>
       </div>
    )
        }

        export default FaceDetector