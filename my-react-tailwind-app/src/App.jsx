import React from 'react'

function App() {
  return (
    <div className="max-w-3xl mx-auto my-8 p-8 bg-white  print:shadow-none shadow-lg rounded-lg">
      {/* Header */}
      <div className="mb-4">
        <div className="text-center mb-2">
          <h2 className="text-xl font-bold">SAKINA NAZIR MOTHER & CHILD CARE HOSPITAL</h2>
          {/* <p className="text-sm">Near Galla Mandi Multan Road Pattoki</p>
          <p className="font-semibold">M. Sohaib Nazir 0300-7770132</p>                */}
          {/* <p className="text-xs">(300-6120995)</p> */}
        </div>
        <br/>
        <div className="flex flex-col md:flex-row print:flex-row justify-between gap-8 print:gap-8">
          {/* Left Doctor */}
          <div className="flex-1 text-left">
            <div className="text-lg font-bold text-cyan-800">Dr. Faisal Nazir Joiya</div>
            <div className="text-sm font-semibold text-gray-700">MBBS &nbsp; DCH &nbsp; PGMI &nbsp; UHS </div>
            <div className="text-sm text-gray-700">EX Registrar General Hospital Lahore</div>
            <div className="text-sm text-gray-700">EX DDOH Pattoki</div>
            <div className="text-sm text-gray-700">EX MS THQ Hospital Pattoki</div>
            <div className="text-sm text-gray-700">Consultant Paediatrician THQ Hospital <br/> pattoki</div>
            {/* <div className="text-sm text-gray-700">Medical Superintendent THQ Hospital Pattoki</div> */}
          </div>
          {/* Right Doctor */}
          <div className="flex-1 text-left md:text-right">
            <div className="text-lg font-bold text-cyan-800">Dr. Sidrah Faisal Joiya</div>
            <div className="text-sm font-semibold text-gray-700">MBBS &nbsp; FCPS</div>
            <div className="text-sm text-gray-700">Consultant Gynaecologist</div>
            <div className="text-sm text-gray-700">Ex. Senior Registrar Gynaecologist Red Crescent Medical College Dena Nath.</div>
            <div className="text-sm text-gray-700">Ex. Senior Registrar Shalimar Hospital /</div>
            <div className="text-sm text-gray-700">Visiting Surgeon Naaz Hospital Lahore</div>
          </div>
        </div>
      </div>
      <br/>
      {/* Patient Details */}
      <div className="border-t-2 border-b-2 border-gray-600 py-2 mb-2 text-sm">
        {/* Row 1: Labels */}
        <div className="grid grid-cols-4 gap-x-6 mb-1">
          <div><label className="font-semibold whitespace-nowrap">Patient Name</label></div>
          <div><label className="font-semibold whitespace-nowrap">Father Name</label></div>
          <div><label className="font-semibold whitespace-nowrap">Age</label></div>
          <div><label className="font-semibold whitespace-nowrap">Sex</label></div>
        </div>
        {/* Row 2: Inputs */}
        <div className="grid grid-cols-4 gap-x-6 mb-2">
          <div><input className="border-b border-gray-400 w-full print:border-black" type="text" placeholder="" /></div>
          <div><input className="border-b border-gray-400 w-full print:border-black" type="text" placeholder="" /></div>
          <div><input className="border-b border-gray-400 w-full print:border-black" type="text" placeholder="" /></div>
          <div><input className="border-b border-gray-400 w-full print:border-black" type="text" placeholder="" /></div>
        </div>
        {/* Row 3: Labels */}
        <div className="grid grid-cols-4 gap-x-6 mb-1">
          <div><label className="font-semibold whitespace-nowrap">Cell No.</label></div>
          <div><label className="font-semibold whitespace-nowrap">Address</label></div>
          <div><label className="font-semibold whitespace-nowrap">Token No.</label></div>
          <div><label className="font-semibold whitespace-nowrap">Date & Time</label></div>
        </div>
        {/* Row 4: Inputs */}
        <div className="grid grid-cols-4 gap-x-6">
          <div><input className="border-b border-gray-400 w-full print:border-black" type="text" placeholder="" /></div>
          <div><input className="border-b border-gray-400 w-full print:border-black" type="text" placeholder="" /></div>
          <div><input className="border-b border-gray-400 w-full print:border-black" type="text" placeholder="" /></div>
          <div><input className="border-b border-gray-400 w-full print:border-black" type="text" placeholder="" /></div>
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
      <br/>
      <div className="fixed bottom-0 left-0 right-0 text-center ">
        <p className="text-sm font-semibold space-x-4 ">
          <span className="font-semibold text-cyan-800">Near Galla Mandi Multan Road Pattoki</span>
          <span className="font-semibold">M. Sohaib Nazir 0300-7770132</span>
        </p>
      </div>
    </div>
  )
}

export default App
