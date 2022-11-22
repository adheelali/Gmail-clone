import React from "react";
import "./sidebar.css";
import SidebarOptions from "./components/SidebarOptions";
import { Button } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Inbox from "@mui/icons-material/Inbox";
import Star from "@mui/icons-material/Star";
import { AccessTime } from "@mui/icons-material";
import { LabelImportant } from "@mui/icons-material";
import { NearMe } from "@mui/icons-material";
import { Note } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        style={{ color: "black" }}
        startIcon={
          <ModeEditOutlineOutlinedIcon style={{ fontSize: "large" }} />
        }
      >
        Compose
      </Button>
      <SidebarOptions Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOptions Icon={Star} title="Starred" number={54} />
      <SidebarOptions Icon={AccessTime} title="Snoozed" number={54} />
      <SidebarOptions Icon={LabelImportant} title="Important" number={54} />
      <SidebarOptions Icon={NearMe} title="Sent" number={54} />
      <SidebarOptions Icon={Note} title="Drafts" number={54} />
      <SidebarOptions Icon={ExpandMore} title="More" number={54} />
    </div>
  );
}

export default Sidebar;