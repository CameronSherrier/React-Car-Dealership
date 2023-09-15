import Background from '../assets/racetrack.jpg';

function carHome() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixd'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-orange-300 text-indigo-600 rounded'>Welcome to your Car Inventory!</h3>
        </div>
    </div>
  )
}

export default carHome
