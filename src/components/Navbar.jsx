import { useState } from "react";
import { Stack, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { icons } from "../assets/index";

const Navbar = () => {
  const [isToggle, setToggle] = useState(false);
  return (
    <Box className="sticky top-0 justify-between mb-3 bg-[#002333] flex flex-row h-12 items-center px-8">
      <Link to="/">
        <p className="font-heading font-bold text-3xl text-[#B4BEC9]">
        Dialogue 
          <Box
            component="span"
            sx={{ color: "#159A9C", borderBottom: "2px solid #159A9C" }}
          >
            AI
          </Box>
        </p>
      </Link>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={5}
        divider={
          <Divider
            style={{ backgroundColor: "#B4BEC9" }}
            orientation="vertical"
            variant="middle"
            flexItem
          />
        }
        className="text-[#B4BEC9]"
        sx={{
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        {icons.map((item, index) => {
          return (
            <Link to={item.linkTo} key={index}>
              {item.icon}
            </Link>
          );
        })}
      </Stack>

      <Box
        className="text-[#B4BEC9]"
        sx={{ "@media(min-width:600px)": { display: "none" } }}
      >
        {isToggle ? (
          <CloseRoundedIcon
            fontSize="large"
            onClick={() => setToggle((prevValue) => !prevValue)}
          />
        ) : (
          <MenuRoundedIcon
            fontSize="large"
            onClick={() => setToggle((prevValue) => !prevValue)}
          />
        )}

        <Box
          className={`${
            isToggle ? "flex" : "hidden"
          } p-3 absolute top-15 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-gradient-to-r from-slate-400 to-slate-800 `}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            divider={
              <Divider
                style={{ backgroundColor: "#B4BEC9" }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
            }
            className="text-[#B4BEC9]"
          >
            {icons.map((item, index) => {
              return (
                <Link to={item.linkTo} key={index}>
                  {item.icon}
                </Link>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
