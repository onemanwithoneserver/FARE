export default function Desktop() {
  return (
    <section className="w-full bg-white text-[#0F172A] py-16 px-10 border-b border-[#e2e8f0] font-['Outfit'] flex justify-center">
      <div className="max-w-[1200px] w-full">
        <h2 className="text-xl font-bold text-[#0B1D3A] mb-6">Corporate Request Form</h2>
        
        <div className="bg-[#f8fafc] border border-gray-200 rounded-lg p-8">
          <form className="flex flex-col gap-6 max-w-[800px]">
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organisation Name</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0B1D3A]" placeholder="Enter company name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Training Requirement</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0B1D3A]" placeholder="e.g. Sales Capability Workshop" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Audience</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0B1D3A]">
                  <option>Select Audience</option>
                  <option>Freshers</option>
                  <option>Sales Executives</option>
                  <option>Managers</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Participants</label>
                <input type="number" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0B1D3A]" placeholder="e.g. 20" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Format</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0B1D3A]">
                  <option>Select Format</option>
                  <option>Workshop</option>
                  <option>Live Course</option>
                  <option>Mock Sessions</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Mode</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0B1D3A]">
                  <option>Select Mode</option>
                  <option>Offline / Classroom</option>
                  <option>Online Live</option>
                  <option>Blended</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0B1D3A]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location / Venue</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0B1D3A]" placeholder="City or Office location" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
              <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:border-[#0B1D3A]" placeholder="Describe any specific requirements..."></textarea>
            </div>
            
            <button type="button" className="bg-[#0B1D3A] text-white font-bold py-2.5 px-6 rounded text-sm w-max hover:bg-[#152c54] transition-colors mt-2 shadow-sm">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
