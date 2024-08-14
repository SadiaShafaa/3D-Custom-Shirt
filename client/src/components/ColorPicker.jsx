/* eslint-disable no-unused-vars */
import React from 'react'
//package of colorpicker
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)
  return (
    <div
    className ='absolute left-full ml-3'
    >
      <SketchPicker
      color={snap.color}
      disableAlpha //opacity
      presetColors={[
        '#FFFFFF', '#808080', '#FF0000', '#800080', '#FF00FF','#008000',
        '#00FF00', '#FFFF00', '#000080', '#0000FF', '#008080','#00FFFF'
      ]}
      onChange={(color)=> state.color = color.hex} s
      />
    </div>
  )
}

export default ColorPicker