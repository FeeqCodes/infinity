import React from 'react'

const Column = ({leftChildren, rightChildren}) => {
  return (
    <div className='flex justify-between gap-5'>
      <div>
        {leftChildren}
      </div>
      <div>
        {rightChildren}
      </div>
    </div>
  )
}

export default Column