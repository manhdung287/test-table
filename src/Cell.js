import React, { useState } from 'react'

function Cell({ data, width, height }) {
    const [isEdit, setisEdit] = useState(false)
    const [textEdit, setTextEdit] = useState(data)
    return (
        <div className='cell-parent' onDoubleClick={() => setisEdit(!isEdit)} onBlur={() => setisEdit(false)}
            style={{ width: 120, height: height }}>
            {isEdit ? <input className='edit-cell' defaultValue={data} value={textEdit} onChange={(e) => setTextEdit(e.target.value)} /> :
                <span className='cell'>{data} </span>
            }
        </div>
    )
}

export default Cell