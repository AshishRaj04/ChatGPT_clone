import { useState } from "react";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Button } from "@mui/material";

const Sidebar = (props) => {
  return (
    <>
    {
      props.titleList.map((titles , index)=>{
        return(
          <Button
          key = {index}
          variant="text"
          startIcon={<ChatBubbleOutlineOutlinedIcon />}
          className=""
          sx={{
            marginTop: "10px",
            width: "200px",
          }}
        >
          {titles}
        </Button>
        )
      })
    }

    </>
  );
};

export default Sidebar;
