// import React, { Suspense, useState, useEffect } from "react"
// import { BrowserRouter as Router } from "react-router-dom"
// import { Container } from "@mui/material"
// import { NotificationContainer } from "react-notifications"
// import { AppLayout } from "./components/layout/app-layout"
// import { UserProvider } from "./context/user-context"


// export const App = () => (
//   <UserProvider>
//     <Suspense fallback={null}>
//       <Container className="page-container">
//         <Router>
//           <AppLayout />
//           <NotificationContainer />
//         </Router>
//       </Container>
//     </Suspense>
//   </UserProvider>
// )

import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@mui/material";
import { NotificationContainer } from "react-notifications";
import { AppLayout } from "./components/layout/app-layout";
import { UserProvider } from "./context/user-context";
import LoadingSpinner from "./components/bookloader";

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some async initialization or data fetching
    setTimeout(() => {
      setLoading(false); // Hide the loading page after a delay (e.g., 2000 milliseconds)
    }, 2000);
  }, []);

  return (
    <UserProvider>
      {loading ? (
        <LoadingSpinner /> // Render the BookLoader component while loading
      ) : (
        <Suspense fallback={null}>
          <Container className="page-container">
            <Router>
              <AppLayout />
              <NotificationContainer />
            </Router>
          </Container>
        </Suspense>
      )}
    </UserProvider>
  );
};

