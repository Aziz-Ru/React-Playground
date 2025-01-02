import { useEffect, useRef, useState } from "react";

/**
 *
 * @returns The navigator object contains information about the browser.
 * The geolocation property is read-only.
 * The geolocation property is only available in secure contexts (HTTPS).
 * The geolocation property is only available if the user approves it.
 */
const Navigator = () => {
  navigator.clipboard.writeText("Hello, World");
  // for getting the current position of the user
  // need user permission
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log(position);
  //   });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [keyLog, setKeyLog] = useState("");
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      setKeyLog((prev) => prev + e.key);
    });
  }, []);
  const handleCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
        setVideoStream(stream);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleStopCamera = () => {
    if (videoStream) {
      videoStream.getTracks().forEach((tr) => tr.stop());
    }
  };

  return (
    <div>
      <div className="">
        <button onClick={handleCamera}>Click To Open Camera</button>
        <button onClick={handleStopCamera}>Click To Close Camera</button>

        <video
          ref={videoRef}
          src=""
          autoPlay
          muted
          style={{ width: "400px", height: "400px" }}
        ></video>
        <h4>Key Log {keyLog}</h4>
        <h2>Navigator</h2>
        <div className="">
          <p>Cookie Enabled:{navigator.cookieEnabled}</p>
          <p>Language:{navigator.language}</p>
          <p>Online:{navigator.onLine}</p>
          <p>Platform:{navigator.hardwareConcurrency}</p>
          <p>Platform:{navigator.userAgent}</p>
          <textarea name="" id="" placeholder="Paste here"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
