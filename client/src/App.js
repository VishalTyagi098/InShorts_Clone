import Header from './Components/Header'
import InfoHeader from './Components/InfoHeader'
import Articles from './Components/Articles';




function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header/>
      <div className='w-[90%] flex flex-col justify-center items-center'>
        <InfoHeader/>
        <Articles/>
      </div>

      

    </div>
  );
}

export default App;
