import React, { ReactNode } from "react";

interface HTMLWrapperProps {
  children: ReactNode;
}

// just a simple html wrapper to wrap the whole app
const HTMLWrapper: React.FC<HTMLWrapperProps> = ({ children }) => {
  return (
    <html>
      <head></head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

export default HTMLWrapper;
