import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  MoreVert,
  Redo,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import "./emailList.css";
import Section from "./UI/Section";
import Inbox from "@mui/icons-material/Inbox";
import { People } from "@mui/icons-material";
import { LocalOffer } from "@mui/icons-material";
import EmailRow from "./UI/EmailRow";

import { db } from "../firebase/init";
import { getDocs, collection, orderBy, query } from "firebase/firestore";

//how to scroll the overflowing y-axis without the website scrolling   change this code to react

function EmailList() {
  const [emails, setEmails] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    async function getAllEmails() {
      const emailRef = collection(db, "emails");
      const q = query(emailRef, orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const email = [];
      querySnapshot.forEach((doc) => {
        email.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setEmails(email);
      console.log(email);
    }
    getAllEmails();

    // Get the element from the ref
    const element = elementRef.current;

    // Set the overflow-y property to scroll
    element.style.overflowY = "scroll";

    // Add an event listener for the mousewheel event
    element.addEventListener("mousewheel", handleMouseWheel);

    // Return a cleanup function to remove the event listener
    return () => element.removeEventListener("mousewheel", handleMouseWheel);
  }, []);

  function handleMouseWheel(event) {
    // Prevent the default scroll behavior of the page
    event.preventDefault();

    // Get the current scroll position of the element
    const scrollTop = elementRef.current.scrollTop;

    // Update the scrollTop property to scroll the element up or down
    elementRef.current.scrollTop = scrollTop + event.deltaY;
  }

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList__list--wrapper">
        <div ref={elementRef} className="emailList__list">
          {emails?.map(({ id, To, subject, message, timestamp }) => (
            <EmailRow
              id={id}
              key={id}
              title={To}
              subject={subject}
              message={message}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
            />
          ))}
          <EmailRow
            title="hi"
            subject="go away"
            message="halloo bioysx"
            time="10px"
          />
          <EmailRow
            title="hi"
            subject="go away"
            message="halloo bioysx"
            time="10px"
          />
        </div>
      </div>
    </div>
  );
}

export default EmailList;
