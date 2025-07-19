import React, { useState, useEffect } from 'react';
import { FiSearch, FiBookmark, FiFilter, FiCalendar, FiMapPin, FiDollarSign, FiAward, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

const OpportunityForum = () => {
  // State for filters and pagination
  const [activeCategory, setActiveCategory] = useState('All');
  const [savedOnly, setSavedOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All types');
  const [selectedLocation, setSelectedLocation] = useState('All locations');
  const [selectedCompensation, setSelectedCompensation] = useState('Any');
  const [currentPage, setCurrentPage] = useState(1);
  const opportunitiesPerPage = 10;

  // 50+ Diverse opportunities data with consistent structure
  const [opportunities, setOpportunities] = useState([
    // Tech & Startups (10)
    {
      id: 1,
      title: 'Google Computer Science Summer Institute',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Multiple US locations',
      stipend: 'Fully funded',
      description: '3-week intensive coding program for graduating seniors from underrepresented groups.',
      saved: false,
      tags: ['Coding', 'Diversity', 'Free'],
      category: 'Tech & Startups'
    },
    {
      id: 2,
      title: 'Conduct (YC) Software Engineering Internship',
      type: 'Internship',
      location: 'Remote',
      locationDetail: '',
      stipend: '$5,000/month',
      description: 'Work on AI communication systems for the hospitality industry. Python/React experience preferred.',
      saved: false,
      tags: ['AI', 'Software Engineering', 'YC'],
      category: 'Tech & Startups'
    },
    {
      id: 3,
      title: 'NASA High School Internship Program',
      type: 'Internship',
      location: 'In-person',
      locationDetail: 'Various NASA Centers',
      stipend: '$3,500',
      description: 'Work alongside NASA scientists and engineers on cutting-edge space projects.',
      saved: false,
      tags: ['Space', 'Engineering', 'STEM'],
      category: 'Tech & Startups'
    },
    {
      id: 4,
      title: 'Microsoft High School Internship',
      type: 'Internship',
      location: 'In-person',
      locationDetail: 'Redmond, WA',
      stipend: '$6,000',
      description: 'Work on real projects with Microsoft engineers and product teams.',
      saved: false,
      tags: ['Technology', 'Software', 'Coding'],
      category: 'Tech & Startups'
    },
    {
      id: 5,
      title: 'Meta Summer Academy',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Menlo Park, CA',
      stipend: '$4,000',
      description: 'Learn product development and design thinking at Meta headquarters.',
      saved: false,
      tags: ['Product Design', 'Tech', 'STEM'],
      category: 'Tech & Startups'
    },
    {
      id: 6,
      title: 'Girls Who Code Summer Immersion',
      type: 'Program',
      location: 'Remote',
      locationDetail: '',
      stipend: 'Need-based stipends available',
      description: 'Learn coding and tech skills in this 2-week virtual program.',
      saved: false,
      tags: ['Coding', 'Women in STEM', 'Virtual'],
      category: 'Tech & Startups'
    },
    {
      id: 7,
      title: 'Apple Developer Academy',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Multiple locations',
      stipend: 'Fully funded',
      description: 'Learn iOS app development with Apple engineers.',
      saved: false,
      tags: ['App Development', 'Swift', 'Coding'],
      category: 'Tech & Startups'
    },
    {
      id: 8,
      title: 'Palantir Foundations Fellowship',
      type: 'Internship',
      location: 'Remote',
      locationDetail: '',
      stipend: '$7,500',
      description: 'Work on data science projects with Palantir mentors.',
      saved: false,
      tags: ['Data Science', 'Coding', 'STEM'],
      category: 'Tech & Startups'
    },
    {
      id: 9,
      title: 'Robotics for All',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Multiple US locations',
      stipend: 'Partial scholarships available',
      description: 'Hands-on robotics program with competition at the end.',
      saved: false,
      tags: ['Robotics', 'Engineering', 'STEM'],
      category: 'Tech & Startups'
    },
    {
      id: 10,
      title: 'SpaceX High School Scholars',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Hawthorne, CA',
      stipend: 'Fully funded (includes travel)',
      description: 'Learn about aerospace engineering at SpaceX facilities.',
      saved: false,
      tags: ['Space', 'Engineering', 'STEM'],
      category: 'Tech & Startups'
    },

    // Medicine & Health (8)
    {
      id: 11,
      title: 'NIH Summer Research Program',
      type: 'Research',
      location: 'In-person',
      locationDetail: 'Bethesda, MD',
      stipend: '$3,500',
      description: 'Hands-on biomedical research experience for high school juniors/seniors.',
      saved: false,
      tags: ['Biology', 'Medicine', 'Paid'],
      category: 'Medicine & Health'
    },
    {
      id: 12,
      title: 'Mayo Clinic Summer Research Fellowship',
      type: 'Research',
      location: 'In-person',
      locationDetail: 'Rochester, MN',
      stipend: '$4,000',
      description: 'Work with leading medical researchers on healthcare solutions.',
      saved: false,
      tags: ['Healthcare', 'Research', 'Medicine'],
      category: 'Medicine & Health'
    },
    {
      id: 13,
      title: 'Stanford Medical Youth Science Program',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Stanford, CA',
      stipend: 'Fully funded',
      description: 'Five-week residential program for aspiring medical professionals.',
      saved: false,
      tags: ['Medicine', 'Healthcare', 'Pre-Med'],
      category: 'Medicine & Health'
    },
    {
      id: 14,
      title: 'Children\'s Hospital Research Internship',
      type: 'Internship',
      location: 'In-person',
      locationDetail: 'Boston, MA',
      stipend: '$3,000',
      description: 'Pediatric medicine research at top children\'s hospital.',
      saved: false,
      tags: ['Pediatrics', 'Research', 'Medicine'],
      category: 'Medicine & Health'
    },
    {
      id: 15,
      title: 'Virtual Health Scholars Program',
      type: 'Program',
      location: 'Remote',
      locationDetail: '',
      stipend: 'Certificate',
      description: 'Online program exploring various medical careers.',
      saved: false,
      tags: ['Virtual', 'Medicine', 'Healthcare'],
      category: 'Medicine & Health'
    },
    {
      id: 16,
      title: 'CDC Disease Detective Camp',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Atlanta, GA',
      stipend: 'Fully funded',
      description: 'Learn about epidemiology and public health at CDC headquarters.',
      saved: false,
      tags: ['Public Health', 'Medicine', 'STEM'],
      category: 'Medicine & Health'
    },
    {
      id: 17,
      title: 'Global Health Leaders Conference',
      type: 'Program',
      location: 'Remote',
      locationDetail: '',
      stipend: 'Free',
      description: 'Virtual conference with global health experts.',
      saved: false,
      tags: ['Public Health', 'Virtual', 'Medicine'],
      category: 'Medicine & Health'
    },
    {
      id: 18,
      title: 'Neuroscience Research Internship',
      type: 'Internship',
      location: 'In-person',
      locationDetail: 'New York, NY',
      stipend: '$3,200',
      description: 'Work with neuroscientists on cutting-edge brain research.',
      saved: false,
      tags: ['Neuroscience', 'Research', 'STEM'],
      category: 'Medicine & Health'
    },

    // Research (8)
    {
      id: 19,
      title: 'MIT Lincoln Laboratory Radar Introduction',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Lexington, MA',
      stipend: 'Fully funded (includes travel)',
      description: 'Learn about radar systems through hands-on projects.',
      saved: false,
      tags: ['Engineering', 'Physics', 'STEM'],
      category: 'Research'
    },
    {
      id: 20,
      title: 'Smithsonian Environmental Research Internship',
      type: 'Internship',
      location: 'In-person',
      locationDetail: 'Edgewater, MD',
      stipend: '$3,000',
      description: 'Field research in coastal ecology and environmental science.',
      saved: false,
      tags: ['Ecology', 'Environment', 'Fieldwork'],
      category: 'Research'
    },
    {
      id: 21,
      title: 'National Youth Science Camp',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Bartow, WV',
      stipend: 'Fully funded',
      description: 'Intensive science leadership program with Nobel laureates.',
      saved: false,
      tags: ['STEM', 'Research', 'Leadership'],
      category: 'Research'
    },
    {
      id: 22,
      title: 'DOE National Science Bowl',
      type: 'Competition',
      location: 'In-person',
      locationDetail: 'Washington, DC',
      stipend: 'Scholarships available',
      description: 'National science competition with regional qualifiers.',
      saved: false,
      tags: ['Science', 'STEM', 'Competition'],
      category: 'Research'
    },
    {
      id: 23,
      title: 'Intel Science Talent Search',
      type: 'Competition',
      location: 'In-person',
      locationDetail: 'Washington, DC',
      stipend: '$250,000 top prize',
      description: 'Nation\'s most prestigious science research competition.',
      saved: false,
      tags: ['Science', 'Research', 'STEM'],
      category: 'Research'
    },
    {
      id: 24,
      title: 'Junior Science and Humanities Symposium',
      type: 'Competition',
      location: 'In-person',
      locationDetail: 'Multiple locations',
      stipend: 'Scholarships available',
      description: 'Present original STEM research to expert judges.',
      saved: false,
      tags: ['Science', 'Research', 'Presentation'],
      category: 'Research'
    },
    {
      id: 25,
      title: 'Astronomy Research Program',
      type: 'Research',
      location: 'In-person',
      locationDetail: 'Flagstaff, AZ',
      stipend: '$2,500',
      description: 'Conduct research at Lowell Observatory with astronomers.',
      saved: false,
      tags: ['Astronomy', 'Physics', 'STEM'],
      category: 'Research'
    },
    {
      id: 26,
      title: 'Virtual Science Research Symposium',
      type: 'Program',
      location: 'Remote',
      locationDetail: '',
      stipend: 'Certificate',
      description: 'Present research and attend workshops with scientists.',
      saved: false,
      tags: ['Virtual', 'Science', 'Research'],
      category: 'Research'
    },

    // Business (8)
    {
      id: 27,
      title: 'Bank of America Student Leaders',
      type: 'Internship',
      location: 'In-person',
      locationDetail: 'Local Nonprofits',
      stipend: '$5,000',
      description: 'Community leadership program with paid nonprofit internship.',
      saved: false,
      tags: ['Leadership', 'Community Service'],
      category: 'Business'
    },
    {
      id: 28,
      title: 'JPMorgan Chase High School Program',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'New York, NY',
      stipend: 'Fully funded (includes travel)',
      description: 'Learn about careers in finance through workshops.',
      saved: false,
      tags: ['Finance', 'Business', 'Networking'],
      category: 'Business'
    },
    {
      id: 29,
      title: 'MIT Launch Summer Program',
      type: 'Accelerator',
      location: 'In-person',
      locationDetail: 'Cambridge, MA',
      stipend: 'Need-based aid available',
      description: 'Startup accelerator for high school entrepreneurs.',
      saved: false,
      tags: ['Entrepreneurship', 'Startups'],
      category: 'Business'
    },
    {
      id: 30,
      title: 'Future Business Leaders of America',
      type: 'Competition',
      location: 'In-person',
      locationDetail: 'Chicago, IL',
      stipend: 'Scholarships available',
      description: 'National leadership conference with business competitions.',
      saved: false,
      tags: ['Business', 'Leadership', 'Networking'],
      category: 'Business'
    },
    {
      id: 31,
      title: 'Wharton Global Youth Program',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Philadelphia, PA',
      stipend: 'Need-based aid available',
      description: 'Business fundamentals program at Wharton School.',
      saved: false,
      tags: ['Business', 'Finance', 'Economics'],
      category: 'Business'
    },
    {
      id: 32,
      title: 'Virtual Stock Market Challenge',
      type: 'Competition',
      location: 'Remote',
      locationDetail: '',
      stipend: '$5,000 prize',
      description: 'Compete in virtual stock trading competition.',
      saved: false,
      tags: ['Finance', 'Virtual', 'Investing'],
      category: 'Business'
    },
    {
      id: 33,
      title: 'Young Entrepreneurs Academy',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Multiple locations',
      stipend: 'Scholarships available',
      description: 'Year-long program to launch real businesses.',
      saved: false,
      tags: ['Entrepreneurship', 'Startups', 'Business'],
      category: 'Business'
    },
    {
      id: 34,
      title: 'Consulting Case Competition',
      type: 'Competition',
      location: 'Remote',
      locationDetail: '',
      stipend: '$3,000 prize',
      description: 'Solve real business cases in team competition.',
      saved: false,
      tags: ['Consulting', 'Business', 'Virtual'],
      category: 'Business'
    },

    // Competitions (8)
    {
      id: 35,
      title: 'Ultra Pitch Competition',
      type: 'Competition',
      location: 'Remote',
      locationDetail: '',
      stipend: '$10,000 prize',
      description: 'Pitch your innovative ideas to top investors.',
      saved: false,
      tags: ['Pitching', 'Entrepreneurship', 'All Students'],
      category: 'Competitions'
    },
    {
      id: 36,
      title: 'Regeneron Science Talent Search',
      type: 'Competition',
      location: 'In-person',
      locationDetail: 'Washington, DC',
      stipend: '$250,000 top prize',
      description: 'Nation\'s most prestigious science research competition.',
      saved: false,
      tags: ['Science', 'Research', 'STEM'],
      category: 'Competitions'
    },
    {
      id: 37,
      title: 'Congressional App Challenge',
      type: 'Competition',
      location: 'National',
      locationDetail: '',
      stipend: 'Winning apps displayed in Capitol',
      description: 'Create and submit an original app for a chance to win.',
      saved: false,
      tags: ['Coding', 'App Development', 'STEM'],
      category: 'Competitions'
    },
    {
      id: 38,
      title: 'National History Day Contest',
      type: 'Competition',
      location: 'In-person',
      locationDetail: 'College Park, MD',
      stipend: 'Scholarships up to $5,000',
      description: 'National finals for historical research projects.',
      saved: false,
      tags: ['History', 'Research', 'Humanities'],
      category: 'Competitions'
    },
    {
      id: 39,
      title: 'DECA International Career Development Conference',
      type: 'Competition',
      location: 'In-person',
      locationDetail: 'Anaheim, CA',
      stipend: 'Scholarships available',
      description: 'Business competition with 10,000+ students worldwide.',
      saved: false,
      tags: ['Business', 'Marketing', 'Leadership'],
      category: 'Competitions'
    },
    {
      id: 40,
      title: 'National Spelling Bee',
      type: 'Competition',
      location: 'In-person',
      locationDetail: 'Washington, DC',
      stipend: '$50,000 top prize',
      description: 'The nation\'s premier spelling competition.',
      saved: false,
      tags: ['Language', 'Spelling', 'Academic'],
      category: 'Competitions'
    },
    {
      id: 41,
      title: 'Math Olympiad Summer Program',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Lincoln, NE',
      stipend: 'Fully funded',
      description: 'Intensive math training for top competition students.',
      saved: false,
      tags: ['Math', 'STEM', 'Competition'],
      category: 'Competitions'
    },
    {
      id: 42,
      title: 'YoungArts National Competition',
      type: 'Competition',
      location: 'In-person',
      locationDetail: 'Miami, FL',
      stipend: 'Up to $10,000 awards',
      description: 'National arts competition for visual, literary and performing arts.',
      saved: false,
      tags: ['Art', 'Writing', 'Performance'],
      category: 'Competitions'
    },

    // Arts & Humanities (8)
    {
      id: 43,
      title: 'Scholastic Art & Writing Awards',
      type: 'Competition',
      location: 'National',
      locationDetail: '',
      stipend: 'Scholarships up to $10,000',
      description: 'Nation\'s longest-running recognition program for creative teens.',
      saved: false,
      tags: ['Art', 'Writing', 'Creativity'],
      category: 'Arts & Humanities'
    },
    {
      id: 44,
      title: 'Kennedy Center American College Theater Festival',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Washington, DC',
      stipend: 'Travel grants available',
      description: 'For high school theater students to showcase their talents.',
      saved: false,
      tags: ['Theater', 'Performing Arts', 'Drama'],
      category: 'Arts & Humanities'
    },
    {
      id: 45,
      title: 'National Youth Orchestra',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'New York, NY',
      stipend: 'Full scholarships',
      description: 'Premier orchestral training program for talented musicians.',
      saved: false,
      tags: ['Music', 'Performing Arts', 'Orchestra'],
      category: 'Arts & Humanities'
    },
    {
      id: 46,
      title: 'Princeton Summer Journalism Program',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Princeton, NJ',
      stipend: 'Fully funded',
      description: 'For low-income students interested in journalism careers.',
      saved: false,
      tags: ['Journalism', 'Writing', 'Media'],
      category: 'Arts & Humanities'
    },
    {
      id: 47,
      title: 'The Concord Review Summer Program',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Boston, MA',
      stipend: 'Need-based aid available',
      description: 'Research and write a publishable history paper.',
      saved: false,
      tags: ['History', 'Writing', 'Research'],
      category: 'Arts & Humanities'
    },
    {
      id: 48,
      title: 'National Student Poets Program',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Washington, DC',
      stipend: '$5,000 scholarship',
      description: 'For talented young poets to develop their craft.',
      saved: false,
      tags: ['Poetry', 'Writing', 'Literature'],
      category: 'Arts & Humanities'
    },
    {
      id: 49,
      title: 'Virtual Creative Writing Workshop',
      type: 'Program',
      location: 'Remote',
      locationDetail: '',
      stipend: 'Certificate',
      description: 'Daily workshops with published authors and poets.',
      saved: false,
      tags: ['Writing', 'Virtual', 'Literature'],
      category: 'Arts & Humanities'
    },
    {
      id: 50,
      title: 'Film Production Summer Intensive',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Los Angeles, CA',
      stipend: 'Need-based aid available',
      description: 'Hands-on filmmaking program with industry professionals.',
      saved: false,
      tags: ['Film', 'Media', 'Production'],
      category: 'Arts & Humanities'
    },

    // Additional opportunities (2 more to reach 50+)
    {
      id: 51,
      title: 'Environmental Leadership Program',
      type: 'Program',
      location: 'In-person',
      locationDetail: 'Denver, CO',
      stipend: '$2,000',
      description: 'Learn environmental advocacy and leadership skills.',
      saved: false,
      tags: ['Environment', 'Leadership', 'Outdoors'],
      category: 'Research'
    },
    {
      id: 52,
      title: 'Virtual AI Ethics Debate Tournament',
      type: 'Competition',
      location: 'Remote',
      locationDetail: '',
      stipend: '$3,000 prize',
      description: 'Debate the ethical implications of artificial intelligence.',
      saved: false,
      tags: ['AI', 'Ethics', 'Virtual'],
      category: 'Competitions'
    }
  ]);

  const toggleSaved = (id) => {
    setOpportunities(opportunities.map(opp => 
      opp.id === id ? {...opp, saved: !opp.saved} : opp
    ));
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveCategory('All');
    setSavedOnly(false);
    setSearchQuery('');
    setSelectedType('All types');
    setSelectedLocation('All locations');
    setSelectedCompensation('Any');
  };

  // Simplified filter logic with broader categories
  const filteredOpportunities = opportunities.filter(opp => {
    // Category filter
    const categoryMatch = activeCategory === 'All' || opp.category === activeCategory;
    
    // Search filter (more broad)
    const searchMatch = 
      searchQuery === '' ||
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      opp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Saved filter
    const savedMatch = !savedOnly || opp.saved;
    
    // Type filter (broader categories)
    const typeMatch = 
      selectedType === 'All types' || 
      (selectedType === 'Learning' && ['Program', 'Accelerator'].includes(opp.type)) ||
      (selectedType === 'Working' && ['Internship', 'Research'].includes(opp.type)) ||
      (selectedType === 'Competing' && opp.type === 'Competition') ||
      opp.type === selectedType;
    
    // Location filter (simplified)
    const locationMatch = 
      selectedLocation === 'All locations' || 
      opp.location === selectedLocation;
    
    // Compensation filter (simplified to 2 options)
    let compensationMatch = true;
    if (selectedCompensation === 'Paid') {
      compensationMatch = opp.stipend && 
                        (opp.stipend.includes('$') || 
                         opp.stipend.includes('prize') || 
                         opp.stipend.includes('stipend') ||
                         opp.stipend.includes('funded') ||
                         opp.stipend.includes('scholarship'));
    } else if (selectedCompensation === 'Unpaid') {
      compensationMatch = !opp.stipend || 
                         opp.stipend === 'Certificate' || 
                         opp.stipend === 'Free';
    }

    return (
      categoryMatch &&
      searchMatch &&
      savedMatch &&
      typeMatch &&
      locationMatch &&
      compensationMatch
    );
  });

  // Pagination logic
  const indexOfLastOpportunity = currentPage * opportunitiesPerPage;
  const indexOfFirstOpportunity = indexOfLastOpportunity - opportunitiesPerPage;
  const currentOpportunities = filteredOpportunities.slice(indexOfFirstOpportunity, indexOfLastOpportunity);
  const totalPages = Math.ceil(filteredOpportunities.length / opportunitiesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, savedOnly, selectedType, selectedLocation, selectedCompensation]);

  // Check if any filters are active (not default)
  const isFilterActive = 
    activeCategory !== 'All' ||
    savedOnly ||
    searchQuery !== '' ||
    selectedType !== 'All types' ||
    selectedLocation !== 'All locations' ||
    selectedCompensation !== 'Any';

    return (
      <div className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-b from-sky-50 to-white min-h-screen">
        {/* Header with subtle gradient */}
        <header className="mb-8 bg-gradient-to-r from-sky-500 to-blue-600 p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-2">Extracurricular Opportunities</h1>
          <p className="text-lg text-sky-100">
            Discover {opportunities.length}+ top internships, competitions, and programs for high school students
          </p>
        </header>
  
        {/* Search with depth */}
        <div className="relative mb-6 bg-white p-1 rounded-lg shadow-sm border border-sky-200">
          <FiSearch className="absolute left-3 top-3.5 text-sky-500" />
          <input
            type="text"
            placeholder="Search opportunities by title, description, or category..."
            className="w-full pl-10 pr-4 py-3 focus:outline-none bg-transparent placeholder-sky-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
  
        {/* Categories with depth */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['All', 'Tech & Startups', 'Medicine & Health', 'Research', 'Business', 'Competitions', 'Arts & Humanities'].map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg'
                  : 'bg-white text-sky-700 border border-sky-200 hover:bg-sky-50 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
  
        {/* Filters panel with depth */}
        <div className="bg-white border border-sky-200 rounded-lg p-4 mb-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-sky-800 flex items-center">
              <FiFilter className="mr-2 text-blue-500" /> Filters
            </h3>
            <div className="flex items-center">
              <label className="flex items-center text-sm text-sky-700 mr-4">
                <input
                  type="checkbox"
                  checked={savedOnly}
                  onChange={() => setSavedOnly(!savedOnly)}
                  className="mr-2 h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-sky-300"
                />
                Show Saved Only
              </label>
              {isFilterActive && (
                <button
                  onClick={clearFilters}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  <FiX className="mr-1" /> Clear all filters
                </button>
              )}
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-sky-700 mb-1">Opportunity Type</label>
              <select 
                className="w-full border border-sky-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option>All types</option>
                <option value="Learning">Learning Programs</option>
                <option value="Working">Work Experience</option>
                <option value="Competing">Competitions</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-700 mb-1">Location</label>
              <select 
                className="w-full border border-sky-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option>All locations</option>
                <option>Remote</option>
                <option>In-person</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-700 mb-1">Compensation</label>
              <select 
                className="w-full border border-sky-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"
                value={selectedCompensation}
                onChange={(e) => setSelectedCompensation(e.target.value)}
              >
                <option>Any</option>
                <option>Paid</option>
                <option>Unpaid</option>
              </select>
            </div>
          </div>
        </div>
  
        {/* Opportunities List */}
        <div className="space-y-6 mb-8">
          {currentOpportunities.length > 0 ? (
            currentOpportunities.map(opportunity => (
              <div key={opportunity.id} className="bg-white border border-sky-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-sky-900 mb-1">{opportunity.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-sky-600 mb-3">
                        <span className="flex items-center bg-sky-50 px-2 py-1 rounded-full">
                          <FiMapPin className="mr-1 text-blue-500" /> {opportunity.location}{opportunity.locationDetail && ` (${opportunity.locationDetail})`}
                        </span>
                        {opportunity.stipend && (
                          <span className="flex items-center bg-sky-50 px-2 py-1 rounded-full">
                            <FiDollarSign className="mr-1 text-blue-500" /> {opportunity.stipend}
                          </span>
                        )}
                        <span className="flex items-center bg-sky-50 px-2 py-1 rounded-full">
                          <FiAward className="mr-1 text-blue-500" /> {opportunity.type}
                        </span>
                      </div>
                    </div>
                    <button 
                      className={`p-2 rounded-full transition-colors ${opportunity.saved ? 'text-blue-500 bg-blue-50' : 'text-sky-300 hover:text-blue-400'}`}
                      onClick={() => toggleSaved(opportunity.id)}
                    >
                      <FiBookmark className={`${opportunity.saved ? 'fill-current' : ''}`} />
                    </button>
                  </div>
  
                  <p className="text-sky-700 mb-4">{opportunity.description}</p>
  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {opportunity.tags.map(tag => (
                      <span key={tag} className="bg-gradient-to-br from-sky-100 to-blue-50 text-sky-700 px-3 py-1 rounded-full text-xs border border-sky-200">
                        {tag}
                      </span>
                    ))}
                    <span className="bg-gradient-to-br from-blue-100 to-sky-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200">
                      {opportunity.category}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-xl p-6 border-2 border-dashed border-sky-200">
              <p className="text-sky-600">No opportunities match your filters. Try adjusting your search.</p>
            </div>
          )}
        </div>
  
        {/* Enhanced Pagination */}
        {filteredOpportunities.length > opportunitiesPerPage && (
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              disabled={currentPage === 1}
              className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                currentPage === 1 
                  ? 'text-sky-300 cursor-not-allowed' 
                  : 'text-blue-600 hover:bg-blue-50 hover:shadow-sm'
              }`}
            >
              <FiChevronLeft className="mr-1" /> Previous
            </button>
            
            <div className="flex space-x-1 bg-blue-50 p-1 rounded-lg">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => paginate(pageNum)}
                    className={`w-10 h-10 rounded-md transition-all ${
                      currentPage === pageNum 
                        ? 'bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-md' 
                        : 'text-blue-600 hover:bg-blue-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              disabled={currentPage === totalPages}
              className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                currentPage === totalPages 
                  ? 'text-sky-300 cursor-not-allowed' 
                  : 'text-blue-600 hover:bg-blue-50 hover:shadow-sm'
              }`}
            >
              Next <FiChevronRight className="ml-1" />
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default OpportunityForum;