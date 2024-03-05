import React, { useState, useRef, useEffect } from "react";
import { Camera } from "react-camera-pro";
import Header from "../layout/Header";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";

const BASE_URL = "http://38.242.234.184";

const FaceDetector = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [captureCount, setCaptureCount] = useState(0);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  
  function base64ToBlob(base64String) {
    const parts = base64String.split(';base64,');
    const contentType = parts[0].split(':')[1]; 

    const byteCharacters = atob(parts[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    
    return new Blob([byteArray], { type: contentType });
}
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

  const captureFace = async () => {
    const photo = camera.current.takePhoto();
    if (cameraEnabled) {
      setImage(photo);
      setCaptureCount(captureCount + 1);
    }

    let url = null;
    if (captureCount + 1 === 1) {
      url = BASE_URL + "/register_new_user?text=ahmed";
    }
    if (captureCount + 1 === 2) {
      url = BASE_URL + "/login";
    }
    if (url) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        const photo = camera.current.takePhoto();
        const file = new File([base64ToBlob(photo)], "webcam-frame.png", {
          type: "image/png",
        });
        formData.append("file", file);

        const response = await axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        });
        if (progress <= 50) setProgress(progress + 50);

        setIsLoading(false);
      } catch (error) {
        console.error("Error submitting form:", error);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="">
      <section className="mt-[50px] relative  h-[380px] rounded-lg w-[50%] mx-auto bg-gray-900">
        <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} />
        {cameraEnabled ? (
          progress <= 0 ? (
            <p className="text-xs text-white text-center pt-3">
              Position your face properly in the circular field.
            </p>
          ) : (
            <p className="text-xs text-white text-center pt-3">
              You are almost done!
            </p>
          )
        ) : null}
        <img src={image} className="hidden" id="p-image" alt="Image preview" />
        <button
          disabled={isLoading}
          className="text-white border left-[38%] border-white text-sm rounded-full absolute bottom-[20px] mt-8 py-2 px-12 rounded-lg bi bi-camera"
          onClick={captureFace}
        >
          &nbsp;{isLoading ? "Loading..." : (captureCount >= 1 ? "re-capture" : "capture")}
        </button>
        <div className="absolute top-[40px] left-[27%]">
          <ProgressBar bgColor="#87aa4b" width="300px" baseBgColor="#eee" completed={progress} />
        </div>
      </section>
      <div className="mt-8 flex justify-center">
        <button
          style={{ background: "#87aa4b", opacity: isCompleted ? 1 : 0.5 }}
          className="text-white py-3 px-[90px] rounded-lg text-sm"
  
               >
                Continue
             </button>
         </div>
       </div>
    )
        }

        export default FaceDetector