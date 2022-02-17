import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CustomerProfileTemplate from "../../components/Customer_profile_template";
import rootReducer from "../../redux/reducers/ServicePage";
import { useRouter } from "next/router";

export default function Service() {
  const store = createStore(rootReducer);
  const router = useRouter();
  console.log(router.query.id);
  return (
    <Auth0Provider
      domain="dev-006imb0h.us.auth0.com"
      clientId="g6P2mkVcDFDJpEy1L8pguWxkDOUHuqiK"
      redirectUri={globalThis.location ? globalThis.location.href : ""}
    >
      <Provider store={store}>
        <CustomerProfileTemplate />
      </Provider>
    </Auth0Provider>
  );
}
