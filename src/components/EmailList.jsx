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
  getDocs,
  collection,
  orderBy,
  query,
} from "firebase/firestore";

function EmailList() {
  const [emails, setEmails] = useState([]);

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
      console.log(email)
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
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
        <EmailRow 
          title='hi'
          subject='go away'
          message='halloo bioysx'
          time='10px'
        />
      </div>
    </div>
  );
}

export default EmailList;
