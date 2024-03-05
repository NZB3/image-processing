import "./Workspace.css";
import {Canvas} from "../Canvas/Canvas";

function Workspace({selectedImage, setPixelData, imageSettings, setImageSettings}) {
    return (
        <main className='main'>
            <div className="workspace">
                <Canvas
                    selectedImage={selectedImage}
                    setPixelData={setPixelData}

                    imageSettings={imageSettings}
                ></Canvas>
            </div>
        </main>
    )
}
    export default Workspace;