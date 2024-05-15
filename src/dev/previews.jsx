import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {ClearButton} from "../components/Header/ClearButton/ClearButton";
import {Canvas} from "../components/Workspace/Canvas/Canvas";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ClearButton">
                <ClearButton/>
            </ComponentPreview>
            <ComponentPreview path="/Canvas">
                <Canvas/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews