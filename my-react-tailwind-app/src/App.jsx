import React from 'react'

function App() {
  return (
    <div className="max-w-3xl mx-auto my-8 p-8 bg-white  print:shadow-none shadow-lg rounded-lg">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">Dr. Faisal Nazir</h2>
        <p className="font-semibold">Children Hospital & Surgical Center</p>
        <p className="text-sm">Zaitoon Hospital Near Armod Villas Main Multan Road Pattoki</p>
        {/* <p className="text-xs">(300-6120995)</p> */}
      </div>
      <br/>
      {/* Patient Details */}
      <div className="grid grid-cols-2 gap-4 mb-2 text-sm">
        <div>
          <label className="font-semibold">Patient Name:</label>
          <input className="border-b border-gray-400 ml-2 w-52 print:border-black" type="text" placeholder="" />
        </div>
        <div>
          <label className="font-semibold">Father Name:</label>
          <input className="border-b border-gray-400 ml-2 w-52 print:border-black" type="text" placeholder="" />
        </div>
        <div>
          <label className="font-semibold">Age:</label>
          <input className="border-b border-gray-400 ml-2 w-26 print:border-black" type="text" placeholder="" />
        </div>
        <div>
          <label className="font-semibold">Sex:</label>
          <input className="border-b border-gray-400 ml-2 w-26 print:border-black" type="text" placeholder="" />
        </div>
        <div>
          <label className="font-semibold">Address:</label>
          <input className="border-b border-gray-400 ml-2 w-40 print:border-black" type="text" placeholder="" />
        </div>
        <div>
          <label className="font-semibold">Date & Time:</label>
          <input className="border-b border-gray-400 ml-2 w-40 print:border-black" type="text" placeholder="" />
        </div>
      </div>
      {/* Vitals */}
      <div className="grid grid-cols-4 gap-4 mt-4 mb-4 text-sm">
        <div>
          <label className="font-semibold">BP:</label>
          <input className="border-b border-gray-400 ml-2 w-16 print:border-black" type="text" placeholder="" />
        </div>
        <div>
          <label className="font-semibold">Weight:</label>
          <input className="border-b border-gray-400 ml-2 w-16 print:border-black" type="text" placeholder="" />
        </div>
        <div>
          <label className="font-semibold">Temp (°F):</label>
          <input className="border-b border-gray-400 ml-2 w-16 print:border-black" type="text" placeholder="" />
        </div>
        <div>
          <label className="font-semibold">Pulse:</label>
          <input className="border-b border-gray-400 ml-2 w-16 print:border-black" type="text" placeholder="" />
        </div>
      </div>
      <br/>
      {/* Prescription Area */}
      <div className="mb-4">
        <label className="font-semibold block mb-1">Prescription:</label>
        <textarea className="w-full h-full  p-2 resize-none" placeholder="" />
      </div>
      {/* Print Button */}
      <div className="text-right print:hidden">
        <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Print</button>
      </div>
      {/* Signature Field at Bottom Right */}
      <div className="fixed bottom-16 right-24 flex flex-col items-end w-64 print:fixed print:bottom-16 print:right-24 print:w-64">
        <div className="border-t border-gray-400 w-full mb-1"></div>
        <div className="text-xs text-gray-500">Signature</div>
      </div>
    </div>
  )
}

export default App
