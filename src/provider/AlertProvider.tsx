import { SnackbarProvider } from "notistack";
import React from "react";

const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SnackbarProvider autoHideDuration={2000} maxSnack={3}>
      {children}
    </SnackbarProvider>
  );
};

export default AlertProvider;
