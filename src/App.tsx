import React from 'react';
import profile from '../public/profile.png';

function App() {
  return (
    <React.Fragment>
      <div className='flex items-center justify-center'>

      <img src={profile} alt="" className='w-[10rem] h-[10rem] rounded-full border-8 border-black/10'/>
      </div>
    </React.Fragment>
  );
}

export default App;
