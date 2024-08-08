import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';

import ColorPicker from './ColorPicker';
import FilePicker from './FilePicker';
import { reader } from '../config/helpers';

const Sidebar = () => {
  
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [file, setFile] = useState('');

  

  const readFile = (type) => {
    reader(file)
      .then((result) => {
        // handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  // const handleDecals = (type, result) => {
  //   const decalType = DecalTypes[type];

  //   state[decalType.stateProperty] = result;

  //   if(!activeFilterTab[decalType.filterTab]) {
  //     handleActiveFilterTab(decalType.filterTab)
  //   }
  // }

  // Show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        // return <FilePicker />
      default:
        return null;
    }
  }
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      <>
        <div className='sm:mt-2 md:mt-20 mt-20'>
          <div>
            <p className='text-gray-400 m-3 mt-4 uppercase'>Color</p>
            <ColorPicker />
            <p className='text-gray-400 m-3 mt-4 uppercase'>Upload File</p>
            <FilePicker
              file={file}
              setFile={setFile}
              readFile={readFile}
            />
          </div>
        </div>
      </>
    </div>
  )
}

export default Sidebar
