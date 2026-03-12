import React from "react";
import { Link } from "react-router-dom";


export function Header(): React.ReactElement {
    return (
        <header role="banner" className="header-wrapper">
            <div className="site-header">
                <div className="header-inner">
                    <Link to="/" className="header-logo-link">
                        <img src="/images/GEC_logo.png" className="" />
                    </Link>
                </div>
            </div>
        </header>
    );
}