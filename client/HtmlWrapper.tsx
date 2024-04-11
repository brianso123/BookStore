import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HTMLWrapper: React.FC<Props> = ({ children }) => {
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
