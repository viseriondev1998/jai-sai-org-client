import React, { FC, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import { Store } from "../core/redux/configureStore";

import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type WrapperProps = {
    children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
    return (
        <Provider store={Store}>
            <ToastContainer autoClose={3000} />
            
            <div className="overflow-hidden animate__animated animate__fadeIn">
                {children}
            </div>
        </Provider>
    );
};
