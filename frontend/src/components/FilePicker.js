import React from 'react'

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="left-full ml-3 p-1 w-[195px] h-[220px] flex flex-col rounded-md">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="border border-gray-300 py-1.5 px-2 rounded-md shadow-sm text-xs text-[#fbce08] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer w-fit">
          Upload File
        </label>

        <p className="mt-2 text-[#fbce08] text-xs truncate">
          {file === '' ? "No file selected" : file.name}
        </p>
        <div className="flex flex-row gap-2 mt-1">
          <button 
            type='button' 
            onClick={() => readFile('logo')} 
            className='w-fit px-4 py-2.5 font-bold text-xm rounded-2xl bg-gradient-to-r from-red-950 from-15% to-[#fbce08] to-95% border-none cursor-pointer text-white'
          >
            Logo
          </button>
          <button 
            type='button' 
            onClick={() => readFile('full')} 
            className='w-fit px-4 py-2.5 font-bold text-xm rounded-2xl bg-gradient-to-r from-red-950 from-15% to-[#fbce08] to-95% border-none cursor-pointer text-white'
          >
            Full
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilePicker
