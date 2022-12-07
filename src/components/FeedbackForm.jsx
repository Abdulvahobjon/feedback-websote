import {useState} from 'react'
import ReactingSeleact from './ReactingSeleact'
import Button from './shared/Button'
import Card from './shared/Card'


function FeedbackForm({handleAdd}) {
    const [text , setText] = useState("")
    const [rating , setrating] = useState(4)
    const [btnDisabled , setBtnDisabled] = useState(true)
    const [massage , setMassage] = useState("")
 
    const handleTextChange = (e)=>{
        setText(e.target.value)
        if(e.target.value.length == ""){
            setBtnDisabled(true)
            setMassage(false)
        } else if(e.target.value.trim().length < 10){
            setBtnDisabled(true)
            setMassage(true)
        } else{
            setBtnDisabled(false)
            setMassage(false)
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback ={
                text , 
                rating,
            }
            handleAdd(newFeedback);
            setText("")
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <ReactingSeleact select={(rating)=> setrating(rating) } />

            <div className="input-group">
                <input onChange={handleTextChange} type="text" value={text} placeholder='White a review ' />
                <Button reverse={true} className='btn' isDisabled={btnDisabled} type='submit'>Send</Button>
            </div>
            <br />
           <p className='massage'>{massage? "Text belgilar soni 10 ta dan ko'p bolishligi kerak" : null}</p>
        </form>
    </Card>
  )
}

export default FeedbackForm