import {useState} from "react";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStart from "./components/FeedbackStart";
import FeedbackForm from "./components/FeedbackForm";


function App() {

  const [feedback , setFeedback] = useState(FeedbackData)

  // delete item function filter strat
  const hamdleClick = (idItem)=>{
    if(window.confirm('Are you sore you want to delete ?')){
       setFeedback(feedback.filter((item)=> idItem!== item.id))
    }
  }
  // end


  return (
    <div className="App" >
      <Header/>
     <div className="container">
      <FeedbackForm/>
      <FeedbackStart feedback={feedback}/>
      <FeedbackList feedback={feedback} hamdleClick={hamdleClick} />
     </div>
    </div>
  );
}

export default App;
