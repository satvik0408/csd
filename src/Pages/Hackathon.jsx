import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Hackathon() {
  const [calendarDate, setCalendarDate] = useState(new Date());

  // Simplified data with just upcoming/planned hackathons
  const upcomingHackathons = [
    {
      id: 1,
      title: "Our First Hackathon",
      description: "We're planning our inaugural hackathon focused on creating equitable tech solutions. Check back soon for details!",
      themes: ["Coming Soon", "Stay Tuned"],
      prize: "Details coming soon",
      location: "Virtual (Hosted on Devpost)",
      rules: [
        "Final rules will be announced with the hackathon launch",
        "Open to all skill levels",
        "Focus on equitable solutions"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">CodingEquity Hackathons</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're planning exciting virtual hackathons focused on creating equitable tech solutions for all.
        </p>
      </header>

      <section className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
        <div className="grid md:grid-cols-2">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Hackathon Calendar</h2>
            <p className="text-gray-600 mb-6">
              We're currently planning our first hackathon - dates will be announced soon!
            </p>
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Future Event Legend</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm">Hackathon Days</span>
                </div>
              </div>
            </div>
            
            <a
              href="https://devpost.com/hackathons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Visit Devpost
            </a>
          </div>
          
          <div className="bg-gray-50 p-8 border-t md:border-t-0 md:border-l border-gray-200">
            <div className="h-full flex flex-col items-center">
              <Calendar
                onChange={setCalendarDate}
                value={calendarDate}
                className="w-full border-gray-200 rounded-lg shadow-sm"
                minDetail="year"
                nextLabel={<span className="text-gray-600">›</span>}
                next2Label={<span className="text-gray-600">»</span>}
                prevLabel={<span className="text-gray-600">‹</span>}
                prev2Label={<span className="text-gray-600">«</span>}
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Coming Soon
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  Our first hackathon dates will appear here when announced
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {upcomingHackathons.map((hackathon) => (
          <div key={hackathon.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{hackathon.title}</h2>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {hackathon.location}
              </div>
              
              <p className="text-gray-600 mb-4 flex-grow">{hackathon.description}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-1">Dates</h3>
                <p className="text-gray-600">
                  To be announced
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-1">Themes</h3>
                <div className="flex flex-wrap gap-2">
                  {hackathon.themes.map((theme, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-1">Prize Pool</h3>
                <p className="text-gray-600">{hackathon.prize}</p>
              </div>
              
              <button
                className="mt-auto inline-flex items-center justify-center bg-gray-300 text-gray-600 font-medium py-2 px-4 rounded-lg cursor-not-allowed"
                disabled
              >
                Registration Coming Soon
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Hackathon Guidelines</h2>
        
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">General Expectations</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Open to all skill levels</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Focus on equitable solutions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Original work required</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Future Hackathons Hosted on Devpost</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Our upcoming hackathons will be run through Devpost, the leading platform for hackathon management. 
          You'll need a Devpost account to participate when we launch our first event.
        </p>
        <a
          href="https://devpost.com/hackathons"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-md"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          Explore Devpost
        </a>
      </section>

      <style jsx global>{`
        .react-calendar {
          width: 100%;
          max-width: 400px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-family: inherit;
          line-height: 1.125;
        }
        
        .react-calendar__navigation button {
          color: #4a5568;
          min-width: 44px;
          background: none;
          font-size: 1rem;
          margin-top: 8px;
        }
        
        .react-calendar__navigation button:enabled:hover,
        .react-calendar__navigation button:enabled:focus {
          background-color: #f8fafc;
        }
        
        .react-calendar__navigation button[disabled] {
          background-color: #f0f0f0;
        }
        
        .react-calendar__tile {
          max-width: 100%;
          padding: 10px 6.6667px;
          background: none;
          text-align: center;
          line-height: 16px;
        }
        
        .react-calendar__tile:enabled:hover,
        .react-calendar__tile:enabled:focus {
          background: #ebf8ff;
          color: #3182ce;
          border-radius: 6px;
        }
        
        .react-calendar__tile--now {
          background: #ebf8ff;
          border-radius: 6px;
          font-weight: bold;
          color: #3182ce;
        }
        
        .react-calendar__tile--hasActive {
          background: #3182ce;
          color: white;
        }
        
        .react-calendar__tile--active {
          background: #3182ce;
          border-radius: 6px;
          color: white;
        }
        
        .react-calendar__tile--active:enabled:hover,
        .react-calendar__tile--active:enabled:focus {
          background: #3182ce;
        }
      `}</style>
    </div>
  );
}

export default Hackathon;