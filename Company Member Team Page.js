import React from 'react';
function Header() {
  return (
    <header>
      <h1>Company Member Team Page</h1>
    </header>
  );
}
function TeamMemberCard({ name, position, bio, imageUrl }) {
  return (
    <div className="team-member-card">
      <img src={imageUrl} alt={name} />
      <h2>Suneel</h2>
      <h3>Trainee</h3>
      <p>Welcome to Veritech,where a dedicated team of professionals works together to bring innovations,creativity and expertise to software industry.get to know the individuals who make our company thrive.</p>
    </div>
  );
}

function MainContent() {
 
  const teamMembers = [
    {
      name: 'Roma',
      position: 'Founde & CEO',
      bio: 'HI-HELLO',
      imageUrl: 'member1.jpg',
    },
    {
      name: 'sathya',
      position: 'HR Management',
      bio: 'Hi-Hello',
      imageUrl: 'member1.jpg',
    },
    {
      name: 'swaran',
      position: 'manager',
      bio: 'Hi-Hello',
      imageUrl: 'member1.jpg',
    },
   
  ];

  return (
    <section className="team-members">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </section>
  );
}

// Define the main functional component for the Company Member Team Page
function CompanyMemberTeamPage() {
  return (
    <div className="company-member-team-page">
      <Header />
      <MainContent />
    </div>
  );
}

export default CompanyMemberTeamPage;