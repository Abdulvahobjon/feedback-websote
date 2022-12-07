import React from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from "framer-motion"


function FeedbackList({ feedback, hamdleClick }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => {
          return <motion.div 
          key={item.id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0 , display:"none"}}
          ><FeedbackItem hamdleClick={hamdleClick} key={item.id} item={item} /></motion.div>
        })}
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList