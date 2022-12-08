import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { AnimatedPage } from "../AnimatedPage/AnimatedPage";

import blackwood from "../../assets/images/blackwood.jpg";
// import {
//   auth,
//   logInWithEmailAndPassword,
//   registerWithEmailAndPassword,
// } from "../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

export const Login = () => {
  const swalert = withReactContent(Swal);
  const navigate = useNavigate();
  // const [user, loading, error] = useAuthState(auth);

  // useEffect(() => {
  //   if (loading) {
  //     return;
  //   }

  //   if (user) navigate("/listado");
  // }, [user, loading]);

  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log("Sendig form data...");
    console.log("email: ", email);
    console.log("password: ", password);
    if (email === "" || password === "") {
      swalert.fire();
      swalert.fire({
        customClass: {
          popup: [styles.swalertPopup],
          title: [styles.swalertTitle],
          htmlContainer: [styles.swalertHtml],
          actions: [styles.swalertActions],
          confirmButton: [styles.swalertConfirmButton],
        },
        showClass: {
          popup: `
          animate__animated
          animate__zoomIn
          animate__faster
        `,
        },
        hideClass: {
          popup: "animate__animated animate__flipOutX",
        },
        title: "Error",
        text: "Los campos no se deben de dejar vacíos",
        backdrop: false,
        buttonsStyling: false,
      });
      console.log("Los campos email y password no se puede dejar vacíos");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      swalert.fire();
      swalert.fire({
        customClass: {
          popup: [styles.swalertPopup],
          title: [styles.swalertTitle],
          htmlContainer: [styles.swalertHtml],
          actions: [styles.swalertActions],
          confirmButton: [styles.swalertConfirmButton],
        },
        showClass: {
          popup: `
          animate__animated
          animate__zoomIn
          animate__faster
        `,
        },
        hideClass: {
          popup: "animate__animated animate__flipOutX",
        },
        title: "Oops!",
        text: "Debes ingresar un email válido",
        backdrop: false,
        buttonsStyling: false,
      });

      console.log("Debes ingresar un email válido");
      return;
    }
    if (email === "briannieto@gmail.com" && password === "1234") {
      const { token } = "Brian Nieto";
      sessionStorage.setItem("token", token);
      navigate("/");
    } else {
      swalert.fire();
      swalert.fire({
        customClass: {
          popup: [styles.swalertPopup],
          title: [styles.swalertTitle],
          htmlContainer: [styles.swalertHtml],
          actions: [styles.swalertActions],
          confirmButton: [styles.swalertConfirmButton],
        },
        showClass: {
          popup: `
          animate__animated
          animate__zoomIn
          animate__faster
        `,
        },
        hideClass: {
          popup: "animate__animated animate__flipOutX",
        },
        title: "Oops",
        text: "Credenciales incorrectas",
        backdrop: false,
        buttonsStyling: false,
      });
    }
    // logInWithEmailAndPassword(email, password);

    // if (!user) registerWithEmailAndPassword(email, password);
    // else logInWithEmailAndPassword(email, password);

    // axios
    //   .post("https://c8-20-ft-backend-production.up.railway.app/login", {
    //     email,
    //     password,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     const { token } = res.data;
    //     sessionStorage.setItem("token", token);
    //     navigate("/listado");
    //   });
  };

  return (
    // <AnimatedPage>
    <div className={styles.mainContainer}>
      <div
        className={styles.topContainer}
        style={{
          backgroundImage: `url(${blackwood})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <div className={styles.gradientLayer}>
          <form onSubmit={submitHandler} className={styles.LoginForm}>
            <h2>Sign In</h2>
            <label>
              {/* <span>Correo electrónico:</span> */}
              <br />
              <input type="text" name="email" placeholder="Email" required />
              <br />
            </label>

            <label>
              {/* <span>Contraseña:</span> */}
              <br />
              <input type="password" name="password" placeholder="Password" />
            </label>
            <br />
            <button type="submit" className={styles.loginButton}>
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
    // </AnimatedPage>
  );
};
