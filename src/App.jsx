import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const ConceptNode = ({ title, items, color, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`border-2 ${color} rounded-lg p-4 mb-3 transition-all hover:shadow-lg`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-semibold text-lg"
      >
        <span>{title}</span>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>

      {isOpen && (
        <ul className="mt-3 space-y-2 ml-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 mt-1">•</span>
              <span className="text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function ReactInterviewMap() {
  const concepts = [
    {
      title: "Core React Concepts",
      color: "border-blue-500",
      items: [
        "Component creation (functional vs class)",
        "Props and prop drilling solutions",
        "State management with useState",
        "useEffect and lifecycle methods",
        "Conditional rendering patterns",
        "List rendering and keys",
        "Forms and controlled components",
        "Event handling",
      ],
    },
    {
      title: "Hooks Mastery",
      color: "border-purple-500",
      items: [
        "useState for state management",
        "useEffect for side effects and cleanup",
        "useContext for context consumption",
        "useReducer for complex state logic",
        "useRef for DOM access and mutable values",
        "useMemo for expensive computations",
        "useCallback for function memoization",
        "Custom hooks creation",
      ],
    },
    {
      title: "Common UI Components",
      color: "border-green-500",
      items: [
        "Todo List / Task Manager",
        "Search/Filter functionality",
        "Accordion / Collapsible panels",
        "Modal / Dialog boxes",
        "Tabs component",
        "Pagination",
        "Infinite scroll",
        "Form with validation",
        "Autocomplete / Typeahead",
        "Rating component",
        "Image carousel/slider",
      ],
    },
    {
      title: "Data Fetching & APIs",
      color: "border-yellow-500",
      items: [
        "Fetch API / Axios usage",
        "Loading and error states",
        "Debouncing API calls",
        "Caching strategies",
        "Polling and real-time updates",
        "Handling async operations",
        "Error boundaries",
        "Retry logic",
      ],
    },
    {
      title: "State Management",
      color: "border-red-500",
      items: [
        "Local component state",
        "Lifting state up",
        "Context API implementation",
        "useReducer patterns",
        "Redux basics (if required)",
        "State synchronization",
        "Derived state",
      ],
    },
    {
      title: "Performance Optimization",
      color: "border-indigo-500",
      items: [
        "React.memo for component memoization",
        "useMemo for computed values",
        "useCallback for stable references",
        "Code splitting and lazy loading",
        "Virtualization for long lists",
        "Debouncing and throttling",
        "Avoiding unnecessary re-renders",
      ],
    },
    {
      title: "Routing & Navigation",
      color: "border-pink-500",
      items: [
        "React Router setup",
        "Route parameters",
        "Nested routes",
        "Protected routes",
        "Programmatic navigation",
        "Query parameters handling",
      ],
    },
    {
      title: "Testing Essentials",
      color: "border-teal-500",
      items: [
        "Writing unit tests",
        "Testing user interactions",
        "Mocking API calls",
        "Testing hooks",
        "Snapshot testing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            React Machine Round Prep
          </h1>
          <p className="text-gray-600">Click any section to explore topics</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          {concepts.map((concept, idx) => (
            <ConceptNode
              key={idx}
              title={concept.title}
              items={concept.items}
              color={concept.color}
              defaultOpen={idx === 0}
            />
          ))}
        </div>

        <div className="mt-6 bg-blue-100 border border-blue-300 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>Pro Tip:</strong> Focus on building clean, readable code
            with proper error handling. Interviewers value working solutions
            over perfect ones. Practice common patterns and explain your thought
            process!
          </p>
        </div>
      </div>
    </div>
  );
}
