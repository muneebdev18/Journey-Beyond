import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Navbar2.css";

const Navbar2 = () => {
  const navigate = useNavigate();

  const onOutputSocketClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="navbar2">
      <div className="output-socket-parent">
        <Button
          className="output-socket"
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
          onClick={onOutputSocketClick}
        >
          HOME
        </Button>
        <div className="button-parent1">
          <Button
            className="button9"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              background: "rgba(118, 0, 214, 0.6)",
              border: "#7600d6 solid 1px",
              borderRadius: "100px",
              "&:hover": { background: "rgba(118, 0, 214, 0.6)" },
              width: 132,
              height: 34,
            }}
          >
            ECOSYSTEM
          </Button>
          <Button
            className="button10"
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
          <Button
            className="button11"
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
            className="button12"
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
            className="frame-child17"
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

export default Navbar2;
