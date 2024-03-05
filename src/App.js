import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Workspace from "./components/Workspace/Workspace";
import './App.css';
import 'normalize.css';

export default function App() {
    const [selectedImage, setImage] = useState(null);
    const [pixelData, setPixelData] = useState(null);
    const [imageSettings, setImageSettings] = useState({
        sizePercentage: 100,
        width: 0,
        height: 0,
    });
  return (
    <div className='app'>
        <Header setSelectedImage={setImage} selectedImage={selectedImage}/>
        <Workspace selectedImage={selectedImage}
                   setPixelData={setPixelData}
                   setImageSettings={setImageSettings}
                   imageSettings={imageSettings}
        />
        <Footer pixelData={pixelData} selectedImage={selectedImage} setImageSettings={setImageSettings}/>
    </div>
  );
}
