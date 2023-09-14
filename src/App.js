import './App.css';
import AccordionItem from './components/AccordionItem';

function App() {
  return (
    <div className='container'>
      <header>
        <h2>Frequently Asked Questions</h2>
        <p>Answers to common questions about our frontend challanges website. </p>
      </header>
      <main>
        <AccordionItem />
      </main>
    </div>
  );
}

export default App;
