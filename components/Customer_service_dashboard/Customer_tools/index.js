import ServiceToolsButtons from "./ServiceToolsButtons";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

const Tools = dynamic(() => import("./Tools"));

function CustomerTools() {
  const currentTool = useSelector((state) => state.customerActiveTool);
  return currentTool === "None" ? <ServiceToolsButtons /> : <Tools />;
}

export default CustomerTools;
