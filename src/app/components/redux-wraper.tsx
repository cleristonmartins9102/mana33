'use client';

import { Provider, useSelector } from "react-redux";
import store from "../main/redux/reducers";
import BlackScreen from "@/app/components/screen/black-screen";
import BlackScreenLayer from "./screen/black-screen-layer";

const ReduxWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
      { <BlackScreenLayer /> }
    </Provider>
  );
}

export default ReduxWrapper;