import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { Fab, Stack, TextField, Box } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const paperStyle = {
  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "16px 16px 16px",
};

const ModalImg = styled.img`
  width: 62%;
  height: 100%;
  border-radius: 10px;
  background: #000;
  margin-top: 9px;
  margin-left: 10px;
`;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;

  /** HANDLERS **/

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        sx={modalStyle}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signupOpen}>
          <Stack sx={paperStyle} direction={"row"} style={{ width: "800px" }}>
            <ModalImg src={"/img/auth.webp"} alt="camera" />
            <Stack sx={{ marginLeft: "69px", alignItems: "center" }}>
              <h2>Signup Form</h2>
              <TextField
                sx={{ marginTop: "7px" }}
                id="outlined-basic"
                label="username"
                variant="outlined"
              />
              <TextField
                sx={{ my: "17px" }}
                id="outlined-basic"
                label="phone number"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
              />
              <Fab
                sx={{ marginTop: "30px", width: "120px" }}
                variant="extended"
                color="primary"
              >
                <LoginIcon sx={{ mr: 1 }} />
                Signup
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        sx={modalStyle}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <Stack sx={paperStyle} direction={"row"} style={{ width: "700px" }}>
            <ModalImg src={"/img/auth.webp"} alt="camera" />
            <Stack
              sx={{
                marginLeft: "65px",
                marginTop: "25px",
                alignItems: "center",
              }}
            >
              <h2>Login Form</h2>
              <TextField
                id="outlined-basic"
                label="username"
                variant="outlined"
                sx={{ my: "10px" }}
              />
              <TextField
                id={"outlined-basic"}
                label={"password"}
                variant={"outlined"}
                type={"password"}
              />
              <Fab
                sx={{ marginTop: "27px", width: "120px" }}
                variant={"extended"}
                color={"primary"}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}

// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
// import { Fab, Stack, TextField } from "@mui/material";
// import styled from "styled-components";
// import LoginIcon from "@mui/icons-material/Login";

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 2, 2),
//   },
// }));

// const ModalImg = styled.img`
//   width: 62%;
//   height: 100%;
//   border-radius: 10px;
//   background: #000;
//   margin-top: 9px;
//   margin-left: 10px;
// `;

// interface AuthenticationModalProps {
//   signupOpen: boolean;
//   loginOpen: boolean;
//   handleSignupClose: () => void;
//   handleLoginClose: () => void;
// }

// export default function AuthenticationModal(props: AuthenticationModalProps) {
//   const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
//   const classes = useStyles();

//   /** HANDLERS **/

//   return (
//     <div>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={signupOpen}
//         onClose={handleSignupClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={signupOpen}>
//           <Stack
//             className={classes.paper}
//             direction={"row"}
//             sx={{ width: "800px" }}
//           >
//             <ModalImg src={"/img/auth.webp"} alt="camera" />
//             <Stack sx={{ marginLeft: "69px", alignItems: "center" }}>
//               <h2>Signup Form</h2>
//               <TextField
//                 sx={{ marginTop: "7px" }}
//                 id="outlined-basic"
//                 label="username"
//                 variant="outlined"
//               />
//               <TextField
//                 sx={{ my: "17px" }}
//                 id="outlined-basic"
//                 label="phone number"
//                 variant="outlined"
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="password"
//                 variant="outlined"
//               />
//               <Fab
//                 sx={{ marginTop: "30px", width: "120px" }}
//                 variant="extended"
//                 color="primary"
//               >
//                 <LoginIcon sx={{ mr: 1 }} />
//                 Signup
//               </Fab>
//             </Stack>
//           </Stack>
//         </Fade>
//       </Modal>

//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={loginOpen}
//         onClose={handleLoginClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={loginOpen}>
//           <Stack
//             className={classes.paper}
//             direction={"row"}
//             sx={{ width: "700px" }}
//           >
//             <ModalImg src={"/img/auth.webp"} alt="camera" />
//             <Stack
//               sx={{
//                 marginLeft: "65px",
//                 marginTop: "25px",
//                 alignItems: "center",
//               }}
//             >
//               <h2>Login Form</h2>
//               <TextField
//                 id="outlined-basic"
//                 label="username"
//                 variant="outlined"
//                 sx={{ my: "10px" }}
//               />
//               <TextField
//                 id={"outlined-basic"}
//                 label={"password"}
//                 variant={"outlined"}
//                 type={"password"}
//               />
//               <Fab
//                 sx={{ marginTop: "27px", width: "120px" }}
//                 variant={"extended"}
//                 color={"primary"}
//               >
//                 <LoginIcon sx={{ mr: 1 }} />
//                 Login
//               </Fab>
//             </Stack>
//           </Stack>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }
