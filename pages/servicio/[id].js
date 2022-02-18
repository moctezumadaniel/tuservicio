import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CustomerProfileTemplate from "../../components/Customer_profile_template";
import rootReducer from "../../redux/reducers/ServicePage";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { setCustomerInformation } from "../../redux/actions/ServicePage/CustomerInformation";

export default function Service() {
  const store = createStore(rootReducer);
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query.id);

  return (
    <Auth0Provider
      domain="dev-006imb0h.us.auth0.com"
      clientId="g6P2mkVcDFDJpEy1L8pguWxkDOUHuqiK"
      redirectUri={globalThis.location ? globalThis.location.href : ""}
    >
      <Provider store={store}>
        <CustomerProfileTemplate id={id} />
      </Provider>
    </Auth0Provider>
  );
}
