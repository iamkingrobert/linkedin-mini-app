import React from 'react'
import './WidgetRight.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function WidgetRight() {

  const newsArticle = (heading, subtitle) => (
    <div className='widget__article'>
    <div className='widget__articleLeft'>
    <FiberManualRecordIcon/>
    </div>

    <div className='widget__articleRight'>
      <h4>{heading}</h4>
      <p>{subtitle}</p>
    </div>

    </div>
  )
    
  



  return ( 
    <div className='widgets'>
    <div className='widget__header'>
    <h2>LinkedIn Trends</h2>
    <InfoIcon/>

    </div>
    {newsArticle("King Robert Built Mini LinkedIn App", "Tech News - 2599 Readers")}
    {newsArticle("Africa Tech Submit", "Lagos - 2023")}
    {newsArticle("Codetrain Africa Admission", "Student Referal Program - 2023")}
    {newsArticle("Ghana Technology & Innovation Week ", "Accra - 2023")}
    {newsArticle("Apple Developers Program", "Silicon Valley - 2023")}

    </div>
  )
}

export default WidgetRight