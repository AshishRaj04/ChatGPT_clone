import React, { useState, useEffect } from "react";
import { Box, Paper, Stack } from "@mui/material";
import SearchBar from "./SearchBar";
import {user , assistant } from "../assets/images/index";
const Feed = (props) => {
  const [messageData, setMessageData] = useState([]);
  const [dataRecieved, setDataRecived] = useState(false);

  const handleMessageData = (data, head) => {
    const { role, content } = data;
    setMessageData((prevValue) => {
      return [
        ...prevValue,
        {
          title: head,
          roles: role,
          contents: content,
        },
      ];
    });
    setDataRecived(true);
  };
  
  useEffect(() => {
    const uniqueTitle = Array.from(new Set(messageData.map(previousChat => previousChat.title)))
   // console.log(uniqueTitle);
  
    props.onUniqueTitles(uniqueTitle)

    if(props.click){
      setMessageData([])
      setDataRecived(false)
    }
  }, [props.click ]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 200px",
        }}
      >
        {dataRecieved ? (
          <Box className=" h-[70vh] w-full font-body flex flex-col  text-sm text-[#002333] mb-20 py-10 overflow-auto">
            {messageData.map((items, index) => {
              return (
                <Stack
                  key={index}
                  className=" mt-10 p-8 bg-slate-300 rounded w-full"
                  
                >
                  <Box    sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom : "15px"
                  }}>
                    <Paper
                      sx={{
                        backgroundColor: "#DEEFE7",
                      }}
                      className="mx-4 px-4 py-2 flex font-body "
                    >
                      <img
                        src={user}
                        alt="user"
                        className="w-5 mr-4"
                      />
                      user
                    </Paper>
                    <Paper
                      sx={{
                        backgroundColor: "#DEEFE7",
                      }}
                      className="mx-4 px-4 py-2 font-body"
                    >
                      {items.title}
                    </Paper>
                  </Box>

                  <Box   sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                    <Paper
                      sx={{
                        backgroundColor: "#DEEFE7",
                       
                      }}
                      className="mx-4 px-4  py-2 flex items-center font-body"
                    >
                      <img
                        src={assistant}
                        alt="Assistant"
                        className="w-5 mr-3"
                      />
                      {items.roles}
                    </Paper>
                    <Paper
                      sx={{
                        backgroundColor: "#DEEFE7",
                      }}
                      className="mx-4 px-4 py-2 font-body"
                    >
                      {items.contents}
                    </Paper>
                  </Box>
                </Stack>
              );
            })}
          </Box>
        ) : (
          <Box className="font-body text-3xl text-[#002333] ">
            Dialogue AI
            <Box className="w-2/3 h-[400px]   my-16 "></Box>
          </Box>
        )}
        <Box className="fixed bottom-12">
          <SearchBar handleMessageData={handleMessageData} />
        </Box>
      </Box>
    </>
  );
};

export default Feed;
