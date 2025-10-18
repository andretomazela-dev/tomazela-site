export const Icon = {
  Press: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon" {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2"></rect>
      <line x1="7" y1="8" x2="17" y2="8"></line>
      <line x1="7" y1="12" x2="17" y2="12"></line>
      <line x1="7" y1="16" x2="12" y2="16"></line>
    </svg>
  ),
  Social: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon" {...props}>
      <circle cx="7" cy="7" r="3"></circle>
      <circle cx="17" cy="7" r="3"></circle>
      <circle cx="12" cy="17" r="3"></circle>
      <line x1="9" y1="9" x2="11" y2="14"></line>
      <line x1="15" y1="9" x2="13" y2="14"></line>
    </svg>
  ),
  Influencers: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon" {...props}>
      <circle cx="8" cy="8" r="3"></circle>
      <circle cx="16" cy="8" r="3"></circle>
      <path d="M2 20c1.5-3 4-5 6-5s4.5 2 6 5"></path>
      <path d="M14 14c1.5 0 4.5 2 6 5"></path>
    </svg>
  ),
  Events: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon" {...props}>
      <rect x="3" y="4" width="18" height="17" rx="2"></rect>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
      <rect x="7" y="13" width="4" height="3" rx="0.5"></rect>
      <rect x="13" y="13" width="4" height="3" rx="0.5"></rect>
    </svg>
  ),
  Content: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon" {...props}>
      <path d="M4 4h12l4 4v12a2 2 0 0 1-2 2H4z"></path>
      <path d="M16 4v4h4"></path>
      <line x1="8" y1="12" x2="16" y2="12"></line>
      <line x1="8" y1="16" x2="16" y2="16"></line>
    </svg>
  ),
  Custom: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon" {...props}>
      <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"></path>
    </svg>
  ),
};