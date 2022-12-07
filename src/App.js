import {
  BrowserRouter , Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStart from "./components/FeedbackStart";
import FeedbackForm from "./components/FeedbackForm";
import ReactingSeleact from "./components/ReactingSeleact";
import About from "./components/pages/About";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFedback) => {
    newFedback.id = uuidv4();
    console.log(feedback);
    setFeedback([newFedback, ...feedback]);
  };

  // delete item function filter strat
  const hamdleClick = (idItem) => {
    if (window.confirm("Are you sore you want to delete ?")) {
      setFeedback(feedback.filter((item) => idItem !== item.id));
    }
  };
  // end

  return (
    <BrowserRouter>
      <Routes>
        <Roate path='/header' >Hello World</Roate>
          <Header />
          <div className="container">
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStart feedback={feedback} />
            <FeedbackList feedback={feedback} hamdleClick={hamdleClick} />
          </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
