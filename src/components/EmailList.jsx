import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  MoreVert,
  Redo,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import "./emailList.css";
import Section from "./UI/Section";
import Inbox from "@mui/icons-material/Inbox";
import { People } from "@mui/icons-material";
import { LocalOffer } from "@mui/icons-material";
import EmailRow from "./UI/EmailRow";
import { useState } from "react";
import { db } from "../firebase/init";
import {
  collection,
  getDocs,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";

function EmailList() {
  const [emails, setEmails] = useState([]);

  // useEffect(() => {
  //   async function getAllEmails() {
  //       const { docs } = await getDocs(collection(db, "emails"));
  //       const email = docs.map((elem) => ({ ...elem.data(), id: elem.id }));
  //       setEmails(email);
  //       console.log(email);
  //   }
  //   getAllEmails();
  //   console.log(emails)
  // }, []);

  useEffect(() => {
    async function getAllEmails() {
      const emailRef = await getDocs(collection(db, "emails"));
      const q = query(emailRef, orderBy("timestamp", "desc"));
      const emailData = onSnapshot(q, (querySnapshot) => {
        const email = [];
        querySnapshot.forEach((doc) => {
          email.push(doc.data());
        });
        return email
      });
      setEmails(emailData);
    }
    getAllEmails();
  }, []);

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
      <div className="emailList__list">
        {emails?.map(({ id, To, subject, description, timestamp }) => (
          <EmailRow
            id={id}
            key={id}
            title={To}
            subject={subject}
            description={description}
            time="10px"
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
