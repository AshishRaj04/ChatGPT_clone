import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


const SearchBar = ({handleMessageData}) => {
  // States
  const [searchTerm, setSearchTerm] = useState("");
  const [message , setMessage] = useState(null)
  // Handeling Input
  const handelChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Form setting
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  // Handeling the submit button
  const handelClick = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: searchTerm,
      }),
    };
    try {
      const response = await fetch("http://localhost:4000/completion", options);
      const data = await response.json();
      setMessage(data.choices[0].message);

      handleMessageData(data.choices[0].message , searchTerm);
    } catch (err) {
      console.error(`Error Found With ${err}`);
    }
    setSearchTerm("");
  };

  // UI Content
  return (
    <Paper
      component="form"
      className=" flex justify-between w-[50vw] px-10 shadow-none "
      sx={{
        backgroundColor: "#DEEFE7",
      }}
      onSubmit={handelSubmit}
    >
      <input
        className="outline-none w-full text-[#232a2a] font-body bg-[#DEEFE7]"
        placeholder="Send a message."
        onChange={handelChange}
        value={searchTerm}
      />

      <IconButton type="submit" onClick={handelClick}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
