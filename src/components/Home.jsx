import {useState} from "react";
import Sidebar from "./Sidebar";
import { Stack, Box, Divider } from "@mui/material";
import { Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Feed from "./Feed";

const Home = () => {

  const [isClicked , setClick] = useState(false)
  const [uniqueTitles , setTitles] = useState([])

  const handelClick = () => {
   // console.log('clicked')
    setClick(true)
  }

  const handelTitles = (titles) => {
    setTitles(titles)
  }
  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          flexDirection: "row",
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
        divider={
          <Divider
            style={{ backgroundColor: "rgba(0, 35, 51, 0.1)" }}
            orientation="vertical"
            variant="middle"
            flexItem
          />
        }
      >
        <Box
          className="md: h-[92vh]  px-3 flex flex-col py-2 justify-start items-center"
         
        >
          <Button
             color="primary"
            variant="outlined"
            className="fixed top-0 w-[200px] mb-[10px]"
            startIcon={<AddRoundedIcon />}
            onClick={handelClick}
          >
            New Chat
          </Button>

          <Sidebar className="h-auto" titleList = {uniqueTitles} />

          <Box className="fixed bottom-0 flex flex-col justify-center items-center py-4  " style={{ borderTop: '1px solid rgba(0, 35, 51, 0.1)' }}>
            <Button startIcon={<PersonOutlineRoundedIcon />} color="primary"  className="w-[200px]">
              Upgrade to Plus
            </Button>
            <Button startIcon={<ChatBubbleOutlineOutlinedIcon />}  color="primary" className="w-[200px]">
              Ashish Raj
            </Button>
          </Box>
          
        </Box>
          <Feed click = {isClicked} onUniqueTitles={handelTitles}/>
        <Box>

        </Box>
      </Stack>
    </>
  );
};

export default Home;

