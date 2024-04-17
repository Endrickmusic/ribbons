import React from 'react'

const DropDownMenu = () => {
    return (
    <div className='flex flex-col dropDownMenu'>
        <ul className='flex flex-col gap-4'>
            <li><a href="https://www.endrick.de">Home</a></li>
            <li><a href="https://www.endrick.de">Contact</a></li>
            <li><a href="https://www.endrick.de">Impressum</a></li>
        </ul>
    </div>
    )
}

export default DropDownMenu