import Navigation from "./components/Navigation";
import Form from "./components/Form";
import './App.css';

function App() {
  return (

    <div className=''>
        <div>
            <Navigation/>
            <h1 className="text-center text-xl mt-16">
                Thank you for Participating in our Survey
            </h1>
            <Form/>
        </div>
    </div>
  );
}

export default App;
