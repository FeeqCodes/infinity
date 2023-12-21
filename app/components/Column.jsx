import React from 'react'

const Column = ({leftChildren, rightChildren}) => {
  return (
    <div className='mt-10 flex justify-between gap-5'>
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