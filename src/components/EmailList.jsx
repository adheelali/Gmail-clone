import { ArrowDropDown, ChevronLeft, ChevronRight, MoreVert, Redo } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import './emailList.css'
import Section from './UI/Section'
import Inbox from '@mui/icons-material/Inbox'
import { People } from '@mui/icons-material'
import { LocalOffer } from '@mui/icons-material'
import EmailRow from './UI/EmailRow'

function EmailList() {
  return (
    <div className='emailList'>
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
            <MoreVert/>
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
        <EmailRow 
          title='twitch'
          subject='heuuudndf fellow'
          description='tessrt js'
          time='10pm'
        />
        <EmailRow 
          title='twitch'
          subject='heuuudndf fellow'
          description='tessrt js'
          time='10pm'
        />
      </div>
    </div>
  )
}


export default EmailList