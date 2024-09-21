import React, {useState} from "react"

function WordLetterCounter() {
  const [text, setText] =
        useState(" ");

       const wordCount= text.split(/\s+/).filter(Boolean).length
       const letterCount= text.length
        
        const handleTextChange=(e)=> {
          setText(e.target.value)
        }
        

  return(
    <div>
       <textArea
       placeholder="type something here"
       onChange={
          handleTextChange}
          value={text}
          rows={5}
          columns={50}
          />
          <p>
            Word Count= {wordCount}
          </p>
          <p>
          Letter Count:{letterCount}
          
          </p>
    </div>
  )
}
export default WordLetterCounter
