import "./styles.css";
import Webcam from "react-webcam";
import { useState } from "react";
export default function App() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const [imageSrc, setImageSrc] = useState();
  return (
    <div className="App">
      <Webcam
        audio={false}
        height={300}
        screenshotFormat="image/jpeg"
        width={400}
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
          <button
            onClick={() => {
              const imageSrc = getScreenshot();
              setImageSrc(imageSrc);
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam>
      {imageSrc && <img src={imageSrc} alt="screenshot" />}
    </div>
  );
}
