import * as React from "react";

const Layout = ({ data, pageTitle, children }) => {
  return (
    <main className="main">
      <div className="main-inner">
        {pageTitle ? <h1>{pageTitle}</h1> : null}
        {children}
      </div>
    </main>
  );
};

export default Layout;
