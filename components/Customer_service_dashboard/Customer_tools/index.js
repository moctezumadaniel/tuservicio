import ServiceToolsButtons from "./ServiceToolsButtons";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { LoadingScreen } from "../../App_main_container";

const Tools = dynamic(() => import("./Tools"), {
  loading: () => <LoadingScreen />,
});

function CustomerTools() {
  const currentTool = useSelector((state) => state.customerActiveTool);
  return currentTool === "None" ? <ServiceToolsButtons /> : <Tools />;
}

export default CustomerTools;
