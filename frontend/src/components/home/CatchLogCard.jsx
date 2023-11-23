import React from 'react'
import { Link } from 'react-router-dom'
import { PiBook, PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { FaFish } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { FaRulerHorizontal } from "react-icons/fa6";
import { GiFishingHook } from "react-icons/gi";
import CatchLogCardSingle from './CatchLogCardSingle'


const CatchLogCard = ({catchLogs}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {catchLogs.map((item) => (
            <CatchLogCardSingle key={item._id} catchLog={item} />
        ))}
    </div>
  )
}

export default CatchLogCard