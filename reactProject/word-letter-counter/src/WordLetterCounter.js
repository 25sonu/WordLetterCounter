import React from "react"

function WordletterCounter() {
  const [text, setText] =
        useState("");

        WordCount= text.split(/\s+/).filter(Boolean).length
        letterCount= text.length
        
        const handleTextChange=(e)=> {
          setText(e.target.value)
        }
  return(
    <div>
       <textarea
       placeholder="type something here"
       onChange={
          handleTextChange}
          value={text}
          rows={5}
          cols={50}
          />
          <p>
            Word Count= {wordCount}
          </p>
          <p>
          Letter Count:{" "}
          {letterCount}
          </p>
    </div>
  )
}
export default WordLetterCounter
