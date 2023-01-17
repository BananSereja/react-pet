import './FilterSelector.css'
import React from 'react'
import { filterList } from '../../../ts/itemList/itemList'
import { nanoid } from 'nanoid'

function FilterSelector () {
    const list = filterList.map((item) =>
    <option key={nanoid()}>{item}</option>
    )

    return list
}

export default FilterSelector