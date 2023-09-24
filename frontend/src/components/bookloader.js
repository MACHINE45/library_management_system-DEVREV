import React from "react";
import styled, { keyframes } from "styled-components";

// Define a rotation animation
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Create a styled component for the loading spinner
const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${rotate} 2s linear infinite;
`;

// CenteredContainer is a helper component for centering children
const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Center vertically in the viewport */
`;

const Title = styled.h1`
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #007bff;
  text-transform: uppercase; /* Convert text to uppercase */
  letter-spacing: 2px; /* Add letter spacing */
  font-family: 'Arial', sans-serif; /* Specify a custom font-family */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle text shadow */
`;

const LoadingSpinner = () => {
  return (
    <CenteredContainer>
      <Title>Library Management System</Title>
      <Spinner />
    </CenteredContainer>
  );
};

export default LoadingSpinner;

// import React from 'react';
// import { CircularProgress, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     backgroundColor: '#f0f0f0',
//   },
//   progress: {
//     position: 'relative',
//   },
//   circle: {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//   },
//   text: {
//     marginTop: '16px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#3f51b5',
//   },
// });

// const LoadingSpinner = () => {
//   const classes = useStyles();
//   const colors = ['#3f51b5', '#f44336', '#4caf50', '#ffeb3b'];
//   const sizes = [80, 100, 120, 140];
//   return (
//     <div className={classes.root}>
//       <div className={classes.progress}>
//         {colors.map((color, index) => (
//           <CircularProgress
//             key={index}
//             className={classes.circle}
//             size={sizes[index]}
//             color="inherit"
//             style={{ color }}
//           />
//         ))}
//       </div>
//       <Typography className={classes.text}>Library Management System</Typography>
//     </div>
//   );
// };

// export default LoadingSpinner;
