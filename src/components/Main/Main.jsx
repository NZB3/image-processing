import "./Main.css";
import {Canvas} from "../Canvas/Canvas";

function Main({selectedFile, setPixelData, setCursorPosition}) {
    return (
            <main className='main'>
                <Canvas
                    selectedFile={selectedFile}
                    setCursorPosition={setCursorPosition}
                    setPixelData={setPixelData}
                ></Canvas>
                <div className='settings__container'>

                </div>
            </main>
        )
    }
    export default Main;