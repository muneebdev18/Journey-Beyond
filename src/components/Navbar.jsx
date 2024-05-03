import { Button } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="navbar1">
      <div className="button-group">
        <Link to={"/"}>
        <Button
          className="button4"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "15",
            background: "rgba(118, 0, 214, 0.6)",
            border: "#7600d6 solid 1px",
            borderRadius: "100px",
            "&:hover": { background: "rgba(118, 0, 214, 0.6)" },
            width: 87,
            height: 32,
          }}
        >
          HOME
        </Button>
        </Link>
        <div className="button-container">
          <Link to={"/exosystem"}>
          <Button
            className="button5"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              borderColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: "100px",
              "&:hover": { borderColor: "rgba(255, 255, 255, 0.4)" },
              width: 132,
              height: 34,
            }}
          >
            ECOSYSTEM
          </Button>
          </Link>
          <Link to={"/guided-services"}>
          <Button
            className="button6"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              borderColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: "100px",
              "&:hover": { borderColor: "rgba(255, 255, 255, 0.4)" },
              height: 34,
            }}
          >
            GUIDED SERVICES
          </Button>
          </Link>
          <Button
            className="button7"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              borderColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: "100px",
              "&:hover": { borderColor: "rgba(255, 255, 255, 0.4)" },
              width: 137,
              height: 34,
            }}
          >
            DASHBOARD
          </Button>
          <Button
            className="button8"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              borderColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: "100px",
              "&:hover": { borderColor: "rgba(255, 255, 255, 0.4)" },
              height: 34,
            }}
          >
            CONNECT WALLET
          </Button>
          <Button
            className="frame-child8"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "linear-gradient(90.48deg, #fff, rgba(255, 255, 255, 0))",
              fontSize: "15",
              background: "linear-gradient(90deg, #7925ff, #271c37)",
              borderRadius: "100px",
              "&:hover": {
                background: "linear-gradient(90deg, #7925ff, #271c37)",
              },
              width: 126,
              height: 32,
            }}
          >
            MINT NOW
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
