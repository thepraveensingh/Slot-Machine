import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rcomp from './components/Rcomp'
import SlotM from './components/SlotM'

// function App() {
//   const [count, setCount] = useState(0)
//   const objArray = [{ name: "Praveen", age: 22 }, { name: "Rawat", age: 21 }];
//   return (
//     <>
//     {objArray.map((student,index) => (
//       <Rcomp key = {index} name={student.name} age={student.age} />
// ))}
//  {/* map me key honi hi chiye */}

//     </>
//   )
// }
///////////////////////////////////////////////
// function App(){
  
//   return<>
//     <h1 className='text-3xl'>Welcome to <span className='text-blue-700 text-4xl font-bold'>Slot Machine Game</span> 🎰</h1>
//     <div className='shadow-md shadow-slate-500 m-4'>
//       <SlotM x = '❤️' y = '❤️' z = '❤️'/>
//       {/* <hr/> for giving line at end of slotM */}
//       <SlotM x = '❤️' y = '❤️' z = '💚'/>
//       <SlotM x = '❤️' y = '💙' z = '❤️'/>
//     </div>
    
//   </>
// }
///////////////////////////////////////////////
// function App(){
  
//   const emojiArray = ['🍎', '🍌', '🍒', '🍇', '🍉'];
  
//   const getRandomEmoji = () => {
//     return emojiArray[Math.floor(Math.random()*(emojiArray.length))];
//   }
//   let x = getRandomEmoji();
//   let y = getRandomEmoji();
//   let z = getRandomEmoji ();

  
//   useEffect(()=>{

//   },[]);
//   const handleClick = () =>{
    
//   }

//   return<>
//     <h1 className='text-3xl'>Welcome to <span className='text-blue-700 text-4xl font-bold'>Slot Machine Game</span> 🎰</h1>
//     <div className='shadow-md shadow-slate-500 m-4'>
//       <SlotM x = {x} y = {y} z = {z}/>
//       {/* <hr/> for giving line at end of slotM */}
//     </div>
//     <button className='bg-green-500 px-4 py-2 shadow-md shadow-black' onClick={handleClick}>Play</button>
    
//   </>
// }
// export default App;

///////////////////////////////////////////////////
function App() {
  const emojiArray = ['🍎', '🍌','🍇', ];
  const getRandomEmoji = () => {
    return emojiArray[Math.floor(Math.random() * emojiArray.length)];
  };
  const [emojis, setEmojis] = useState({
    x: getRandomEmoji(),
    y: getRandomEmoji(),
    z: getRandomEmoji(),
  });
  
  const handleClick = () => {
    setEmojis({
      x: getRandomEmoji(),
      y: getRandomEmoji(),
      z: getRandomEmoji(),
    });
  };

  return (
    <>
      <h1 className="text-3xl">
        Welcome to{' '}
        <span className="text-blue-700 text-4xl font-bold">
          Slot Machine Game
        </span>{' '}
        🎰
      </h1>
      <div className="shadow-md shadow-slate-500 m-4">
        <SlotM x={emojis.x} y={emojis.y} z={emojis.z} />
        {/* <hr/> for giving line at end of SlotM */}
      </div>
      <button
        className="bg-green-500 px-4 py-2 shadow-md shadow-black"
        onClick={handleClick}
      >
        Play
      </button>
    </>
  );
}

export default App;
