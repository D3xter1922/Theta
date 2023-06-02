import '../styles/globals.css'

import React, { useState, useCallback, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


function App() {
  const [isClicked, setIsClicked] = useState(false); // State variable to track button click
  const [score, setScore] = useState();
  const [rendererLoaded, setRendererLoaded] = useState(false);

  const { unityProvider, addEventListener, removeEventListener, sendMessage, isLoaded } = useUnityContext({
    loaderUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0x6eb1dfbb73b7037e9354e681a5d1457acd51dd2918cb1867fb51152864a644a5",
    dataUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0x405548a55a0c2832b38b209ccfa64b6733b6ce4bf1de620f3cfe9899580e6bee",
    frameworkUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0x52c50e2fb9512741f37a8db9a4223a2ca5f833f98344cff5e9f310298479c0d3",
    codeUrl: "https://dev2-data.thetaedgestore.com/api/v2/data/0xd7be2e22e075e2291bd446382d90234284b77cbfd30206c5b4280b657bf0f3d2",
  });
  
  
  // useEffect(() => {
  //   if (isLoaded) {
  //     SendVideoList();
  //   }			
  // },[isLoaded])

  // function SendVideoList() {
  //   var request = require('request');
  //   var options = {
  //     'method': 'GET',
  //     'url': 'https://api.thetavideoapi.com/video/srvacc_rihpy08zesm31r7jk09bd8chg/list?page=1&number=100',
  //     'headers': {
  //       'x-tva-sa-id': 'srvacc_rihpy08zesm31r7jk09bd8chg',
  //       'x-tva-sa-secret': '083x6ih07u7rhyq9n44g7ibr16susurg'
  //     }
  //   };
  //   fetch('https://api.thetavideoapi.com/video/srvacc_rihpy08zesm31r7jk09bd8chg/list?page=1&number=100', {
  //     headers:{
  //       'x-tva-sa-id': 'srvacc_rihpy08zesm31r7jk09bd8chg',
  //       'x-tva-sa-secret': '083x6ih07u7rhyq9n44g7ibr16susurg'
  //     }
  //   })
  //   .then(response=>response.text())
  //   .then(text=>{
  //     sendMessage("SceneManager", "ReceiveVideoList", JSON.stringify(text));

  //   });

  //   // request(options, async function (error, response) {
  //   //   if (error) throw new Error(error);
  //   //   // console.log(response.body);
  //   //   // console.log(JSON.stringify(response.body.body.videos));
  //   //   console.log(response);
  //   //   const jsonString = JSON.stringify(response)
  //   //   const data = JSON.parse(jsonString)
  //   //   console.log(data)
  //   //   const playbackUris = data.body["videos"].map(video => video.playback_uri);
  //   //   console.log(playbackUris)



  //   //   await sendMessage("SceneManager", "ReceiveVideoList", JSON.stringify(response.body));

  //   // })
  //     // console.log(JSON.stringify(response.body.body.videos));
  //     // sendMessage("SceneManager", "ReceiveVideoList", JSON.stringify(response.body.videos));
    

  //   //  await sendMessage("SceneManager", "ReceiveVideoList", JSON.stringify(response.body.videos));
  // }
  // const handleGetLivestream = useCallback(async (id)=>{
  //   var request = require('request');
  //   var options = {
  //     'method': 'GET',
  //     'url': 'https://api.thetavideoapi.com/stream/'+id.toString(),
  //     'headers': {
  //       'x-tva-sa-id': 'srvacc_rihpy08zesm31r7jk09bd8chg',
  //       'x-tva-sa-secret': '083x6ih07u7rhyq9n44g7ibr16susurg'
  //     }
  //   };
  //   request(options, function (error, response) {
  //     if (error) throw new Error(error);
  //     console.log(response.body);
  //   });
  //   await sendMessage("StreamManager", "ReceiveLiveStreamLink", response.body.playback_url);

  // })
  // const  handleCreateLivestream = useCallback(async () =>{
  //   var request = require('request');
  //   var options = {
  //     'method': 'POST',
  //     'url': 'https://api.thetavideoapi.com/stream',
  //     'headers': {
  //       'x-tva-sa-id': 'srvacc_rihpy08zesm31r7jk09bd8chg',
  //       'x-tva-sa-secret': '083x6ih07u7rhyq9n44g7ibr16susurg',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({"name":"demo", "resolutions":["160p","240p","360p","720p","source"], "source_resolution":"720p", "fps":60})
  //   };
  //   request(options, async function (error, response) {
  //     if (error) throw new Error(error);
  //     console.log(response.body);
  //     await sendMessage("StreamManager", "ReceiveStreamLink", response.body.stream_server, response.body.stream__key, response.body.id);
  //   });
  // });
  const handleConnectMetamask = useCallback(async () => {
    console.log("yo");
    if (!window.ethereum) {
      // should not reach here.
      throw 'wallet not installed';
    }
    const timestamp = Date.now().toString();
    const msg = 'Theta EdgeStore Call ' + timestamp;
    const address = await window.ethereum.request({ method: "eth_requestAccounts" });

  }, []);

  useEffect(() => {
    addEventListener("ConnectMetamask", handleConnectMetamask);
    return () => {
      removeEventListener("ConnectMetamask", handleConnectMetamask);
    };
  }, [addEventListener, removeEventListener, handleConnectMetamask]);

  // useEffect(() => {
  //   addEventListener("CreateLivestream", handleCreateLivestream);
  //   return () => {
  //     removeEventListener("CreateLivestream", handleCreateLivestream);
  //   };
  // }, [addEventListener, removeEventListener, handleCreateLivestream]);

  // useEffect(() => {
  //   addEventListener("GetLivestream", handleGetLivestream);
  //   return () => {
  //     removeEventListener("GetLivestream", handleGetLivestream);
  //   };
  // }, [addEventListener, removeEventListener, handleGetLivestream]);

  const handleClick = () => {
    setIsClicked(true); // Set isClicked to true when the button is clicked
  };
  const ConnectMetamask = async () => {
    if (!window.ethereum) {
      // should not reach here.
      throw 'wallet not installed';
    }

    const timestamp = Date.now().toString();
    const msg = 'Theta EdgeStore Call ' + timestamp;
    const address = await window.ethereum.request({ method: "eth_requestAccounts" });
    const sig = await window.ethereum.request({
      method: 'personal_sign',
      params: [msg, address[0]],
    })
    const auth_token = timestamp + "." + address[0] + "." + sig;
    console.log(auth_token);

    const filePath = "/Users/druhinabrol/pic.png";

    let formData = new FormData();
    fetch(filePath)
      .then(response => response.blob())
      .then(async blob => {
        // Append the file to the FormData object
        formData.append("file", blob);
        // formData.append("file", "Groucho");
        const response = await fetch("https://api.thetaedgestore.com/api/v2/data", {
          method: 'POST',
          headers: {
            'x-theta-edgestore-auth': auth_token
          },
          body: formData
        });
      })

  }

  return (
    <div>
      {isClicked ? ( // Render Unity component only when the button is clicked
        <><Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} /></>
      ) : (
        <button onClick={handleClick}>Click me</button>
      )}
    </div>
  );
}



export default App

