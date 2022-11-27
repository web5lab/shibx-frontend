import './App.css';

function App() {
  return (
    <div className='relative bg-[#262626] w-[100vw] h-[100vh]'>
      <div className='absolute w-[100vw] h-[14vh] bg-[#1E1E1E] flex justify-end items-center content-center'>
        <span className='text-white font-bold text-[40px] mr-[18vw]'>SHIBX LOUNCHING SOON</span>
        <div className='h-[10vh] w-[32vw] bg-[#FF702A] rounded-[60px] flex justify-end items-center mr-[10vw]'>
          <span className='text-white m-[16px]'>HOME</span>
          <span className='text-white m-[16px]'>SWAP</span>
          <span className='text-white m-[16px]'>NEWS</span>
          <span className='text-white m-[16px]'>WHITE PAPER</span>
          <button className='bg-[#1E1E1E] h-[7vh] text-white mr-[10px] rounded-[60px] px-5'>LIVE SOON</button>
        </div>
      </div>
    </div>
  );
}

export default App;
