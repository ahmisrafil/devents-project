
const Team = () => {
    return (
        <div className="my-10" style={{ backgroundImage: 'url(https://i.ibb.co/S5qcc8x/Untitled-design.png)' }}>
      <div className="hero-overlay bg-opacity-90 pb-20">
        <div className="hero-content text-center text-neutral-content">
          {/* headings and texts */}
          <div className="lg:mx-40 mt-10">
            <h3 className="mb-5 text-2xl lg:text-5xl text-white font-bold">Meet the team</h3>
            <p className="mb-5">We are here to pull everything "all aboard" for you. We will guide you through every step of the planning process. We will find you vendors, venues, and walk you through every detail of your event.</p>
          </div>
        </div>
        {/* team members section */}
        <div className="flex justify-center flex-col lg:flex-row gap-20 mr-0 mx-5">
          {/* first member */}
          <div className="text-center">
            <img className="mx-auto" src="https://i.ibb.co/mcKW0T2/member2.png" alt="" />
            <div className="text-white my-3">
              <h3 className="font-bold">A. Safia Chowdhury</h3>
              <p>Owner/ Lead Planner</p>
            </div>
           
          </div>
          {/* second member */}
          <div className="text-center">
            <img className="mx-auto" src="https://i.ibb.co/fpfFs3F/member3.png" alt="" />
            <div className="text-white my-3">
              <h3 className="font-bold">Mark Leighton</h3>
              <p>Event Coordinator</p>
            </div>
           
              
          </div>
          {/* Third member */}
          <div className="text-center">
            <img className="mx-auto" src="https://i.ibb.co/kD6x23b/member4.png" alt="" />
            <div className="text-white my-3">
              <h3 className="font-bold">Maria Scalice</h3>
              <p>Corporate Event Planner</p>
            </div>
            
          </div>
          {/* fourth member */}
          <div className="text-center">
            <img className="mx-auto" src="https://i.ibb.co/X5HcN8G/member1.png" alt="" />
            <div className="text-white my-3">
              <h3 className="font-bold">Henry Rodriguez</h3>
              <p>Sr. Event Planner</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    );
};

export default Team;