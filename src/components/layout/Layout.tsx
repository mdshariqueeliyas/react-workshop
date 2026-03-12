import React from "react";
import { Header } from "./Header";


export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({children}:LayoutProps): React.ReactElement {
    return(
        <div className="layout-root">
            <Header/>
        </div>
    );
}