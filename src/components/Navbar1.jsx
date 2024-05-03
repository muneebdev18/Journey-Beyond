import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Navbar1.css";

const Navbar1 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="navbar">
      <div className="frame-div">
        <Button
          className="frame-button"
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "15",
            borderColor: "rgba(255, 255, 255, 0.4)",
            borderRadius: "100px",
            "&:hover": { borderColor: "rgba(255, 255, 255, 0.4)" },
            width: 87,
            height: 32,
          }}
          onClick={onFrameButtonClick}
        >
          HOME
        </Button>
        <div className="button-parent">
          <Button
            className="button"
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
          <Button
            className="button1"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              background: "rgba(118, 0, 214, 0.6)",
              border: "#7600d6 solid 1px",
              borderRadius: "100px",
              "&:hover": { background: "rgba(118, 0, 214, 0.6)" },
              height: 34,
            }}
          >
            GUIDED SERVICES
          </Button>
          <Button
            className="button2"
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
            className="button3"
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
            className="frame-child4"
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

export default Navbar1;
