import "./App.css";
import AccordionItem from "./components/AccordionItem";

function App() {
  const items = [
    {
      title: "Do I need to have experience in frontend dev to use FrontendPro?",
      content:
        "FrontedPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone.",
      backgroundColor: "#ffa50033"
    },
    {
      title: "What is a frontend challenge?",
      content:
        "A frontend challenge is a coding project or task that requires you to use HTML, CSS, JavaScript, or frontend frameworks and libraries like ReactJs or NextJs to create a frontend project or UI component. It's a great way to practice your coding skills, build your portfolio and showcase your frontend skills to potential employers.",
    },
    {
      title:
        "How can these frontend challenges help me improve my skills as a frontend developer?",
      content:
        "Frontend challenges can help you improve your skills as a frontend developer in several ways. By building these real-world frontend projects, you can gain practical experience with various frontend technologies and learn how to apply them to solve complex problems.",
    },
    {
      title:
        "Can I use external libraries or frameworks in my frontend challenge submission?",
      content:
        "Yes, absolutely! We're providing the vanilla HTML, CSS and JavaScript files, but you can use whatever tools and frameworks you'd like. We can't wait to see what you come up with.",
    },
  ];

  return (
    <div className="container">
      <header>
        <h2>Frequently Asked Questions</h2>
        <p>
          Answers to common questions about our frontend challanges website.{" "}
        </p>
      </header>
      <main>
        <AccordionItem items={items}/>
      </main>
    </div>
  );
}

export default App;
