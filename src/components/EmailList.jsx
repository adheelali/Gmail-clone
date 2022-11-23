import { ArrowDropDown, MoreVert, Redo } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import './emailList.css'


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
      </div>
    </div>
  )
}

export default EmailList