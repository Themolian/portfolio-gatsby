import * as React from "react";

const Layout = ({ data, pageTitle, children }) => {
    return (
        <main>
            {pageTitle ? <h1>{pageTitle}</h1> : null}
            {children}
        </main>
    )
}

export default Layout