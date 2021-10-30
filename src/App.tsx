import './App.css';
import { DatePicker } from 'antd';

function App() {
  const handleOnChange = (date: any, 
    dateString: any) => {
      console.log(date, dateString);
    };
  
  return (
    <div className="App">
        <DatePicker 
          onChange={handleOnChange} />
    </div>
  );
}

export default App;
