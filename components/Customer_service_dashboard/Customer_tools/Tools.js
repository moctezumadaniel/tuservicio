import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

const OrdersTool = dynamic(() => import("../../OrdersTool"));
const ExpensesTool = dynamic(() => import("../../ExpensesTool.js"));
const CustomersTool = dynamic(() => import("../../CustomersTool"));
const ProvidersTool = dynamic(() => import("../../ProvidersTool"));
const CalculatorTool = dynamic(() => import("../../CalculatorTool"));
const TicketsTool = dynamic(() => import("../../TicketsTool"));
const FinancesTool = dynamic(() => import("../../FinancesTool"));

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
