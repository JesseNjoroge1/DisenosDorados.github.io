import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../stores/index';

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='ml-3 top-32 z-10'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
