import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { LoadingScreen } from "../../App_main_container";

const OrdersTool = dynamic(() => import("../../OrdersTool"), {
  loading: () => <LoadingScreen />,
});
const ExpensesTool = dynamic(() => import("../../ExpensesTool.js"), {
  loading: () => <LoadingScreen />,
});
const CustomersTool = dynamic(() => import("../../CustomersTool"), {
  loading: () => <LoadingScreen />,
});
const ProvidersTool = dynamic(() => import("../../ProvidersTool"), {
  loading: () => <LoadingScreen />,
});
const CalculatorTool = dynamic(() => import("../../CalculatorTool"), {
  loading: () => <LoadingScreen />,
});
const TicketsTool = dynamic(() => import("../../TicketsTool"), {
  loading: () => <LoadingScreen />,
});
const FinancesTool = dynamic(() => import("../../FinancesTool"), {
  loading: () => <LoadingScreen />,
});

function Tools() {
  const currentTool = useSelector((state) => state.customerActiveTool);
  switch (currentTool) {
    case "Orders":
      return <OrdersTool />;
    case "Expenses":
      return <ExpensesTool />;
    case "Customers":
      return <CustomersTool />;
    case "Providers":
      return <ProvidersTool />;
    case "Calculator":
      return <CalculatorTool />;
    case "Receipts":
      return <TicketsTool />;
    case "Finances":
      return <FinancesTool />;
    default:
      return "";
  }
}
export default Tools;
