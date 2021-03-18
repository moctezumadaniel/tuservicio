import ServiceToolsButtons from "./ServiceToolsButtons";
import Tools from "./Tools";
import {useSelector} from 'react-redux'

function CustomerTools(){
    const currentTool = useSelector(state=>state.customerActiveTool)
    return(
        currentTool === 'None'?
        <ServiceToolsButtons/>

        : <Tools/>
    )
}

export default CustomerTools