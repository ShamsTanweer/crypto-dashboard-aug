import React, { useEffect, useState } from "react";
import "./styles.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Switch } from "@mui/material";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Switch
          checked={darkMode}
          onClick={() => {
            changeMode();
          }}
        />
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/Compare">
          <p className="link">compare</p>
        </Link>
        <Link to="/Watchlist">
          <p className="link">watchlist</p>
        </Link>
        <Link to="/Dashboard">
          <Button
            text={"Dashboard"}
            onClick={() => console.log("button Clicked")}
          />
        </Link>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;

// import { Switch } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import Button from "../Button/button";
// import MobileDrawer from "./Drawer";
// import "./styles.css";

// function Header() {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") == "dark" ? true : false
//   );

//   useEffect(() => {
//     if (localStorage.getItem("theme") == "dark") {
//       setDark();
//     } else {
//       setLight();
//     }
//   }, []);

//   const changeMode = () => {
//     setDarkMode(!darkMode);
//     toast.success("Theme Changed!");
//     const mode = localStorage.getItem("theme");
//     if (mode == "dark") {
//       setLight();
//     } else {
//       setDark();
//     }
//   };

//   const setDark = () => {
//     localStorage.setItem("theme", "dark");
//     document.documentElement.setAttribute("data-theme", "dark");
//   };

//   const setLight = () => {
//     localStorage.setItem("theme", "light");
//     document.documentElement.setAttribute("data-theme", "light");
//   };

//   return (
//     <div className="header">
//       <a href="/">
//         <h1>
//           CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
//         </h1>
//       </a>
//       <div className="links-flex">
//         <Switch
//           checked={darkMode}
//           onClick={() => {
//             changeMode();
//           }}
//         />
//         <a href="/">
//           <p className="link">Home</p>
//         </a>
//         <a href="/compare">
//           <p className="link">Compare</p>
//         </a>
//         <a href="/watchlist">
//           <p className="link">Watchlist</p>
//         </a>
//         <a href="/dashboard">
//           <Button
//             text="Dashboard"
//             onClick={() => {
//               console.log("btn-clicked!!!");
//             }}
//           />
//         </a>
//       </div>
//       <MobileDrawer />
//     </div>
//   );
// }

// export default Header;

// import { toast } from "react-toastify";
// const [darkMode, setDarkMode] = useState(
//   localStorage.getItem("theme") == "dark" ? true : false
// );
// useEffect(() => {
//   if (localStorage.getItem("theme") == "dark") {
//     setDark();
//   } else {
//     setLight();
//   }
// }, []);

// const changeMode = () => {
//   setDarkMode(!darkMode);
//   toast.success("Theme Changed!");
//   const mode = localStorage.getItem("theme");
//   if (mode == "dark") {
//     setLight();
//   } else {
//     setDark();
//   }
// };

// const setDark = () => {
//   localStorage.setItem("theme", "dark");
//   document.documentElement.setAttribute("data-theme", "dark");
// };

// const setLight = () => {
//   localStorage.setItem("theme", "light");
//   document.documentElement.setAttribute("data-theme", "light");
// };
