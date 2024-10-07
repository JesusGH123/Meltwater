import AppRoutes from "../router";
import AppProvider from "./AppContext";

export default function () {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>)
}