import React from 'react'
import Quickbuy from './Quickbuy'
import QuickTransfer from './QuickTransfer'

const Purchase = () => {
  return (
    <div className='flex-col py-7 pr-3 '>
      <Quickbuy/>
      <QuickTransfer/>
    </div>
  )
}

export default Purchase
