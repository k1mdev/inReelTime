import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'

const CatchTable = ({catches}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
    <thead>
      <tr>
        <th className='border border-slate-600 rounded-md'>No</th>
        <th className='border border-slate-600 rounded-md'>Species</th>
        <th className='border border-slate-600 rounded-md'>Date</th>
        {/* max-md:hidden hides column in mobile and tablet vps  */}
        <th className='border border-slate-600 rounded-md max-md:hidden'>Length</th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>Lure</th>
        <th className='border border-slate-600 rounded-md'>Operations</th>

      </tr>
    </thead>
    
    <tbody>
      {catches.map((catchLog, index) => (
        <tr key={catchLog.id} className='h-8'>
          <td className='border border-slate-700 rounded-md text-center'>
            {index + 1}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            {catchLog.species}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            {catchLog.date}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {catchLog.length}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {catchLog.lure}
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            <div className='flex justify-center gap-x-4'>
              <Link to={`/catches/details/${catchLog._id}`}>
                <BsInfoCircle className='text-2xl text-green-800' />
              </Link>
              <Link to={`/catches/edit/${catchLog._id}`}>
                <AiOutlineEdit className='text-2xl text-yellow-800' />
              </Link>
              <Link to={`/catches/delete/${catchLog._id}`}>
                <MdOutlineDelete className='text-2xl text-red-800' />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>

  </table>
  )
}

export default CatchTable