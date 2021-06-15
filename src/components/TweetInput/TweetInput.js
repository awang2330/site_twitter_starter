import "./TweetInput.css"
import { useState } from "react"

export default function TweetInput({addTweet}) {
  const [tweetTextFocus, setTweetTextFocus] = useState("Not focused")
  const [tweetTextChange, setOnTweetTextChange] = useState("")

  /** Once the user clicks into the text area in the TweetInput component, 
   * it should be given the expanded class and increase its height. */
  const handleOnTweetTextFocus = () => {
    setTweetTextFocus("Focused")
  }

  /** Sets the value of user text to tweetTextChange */
  const handleOnTweetTextChange = (event) => {
    setOnTweetTextChange(event.target.value) 
  }

  /** If the user hasn't written any text and they click out of the textarea, it should collapse. 
   *  If they have written text, it should stay expanded. */
  const handleOnTweetTextClickOut = () => {
    if (tweetTextChange === "") {
      setTweetTextFocus("Not focused")
    }
  }


  const handleOnSubmit = () => {
    addTweet({
      text: `${tweetTextChange}`,
      // comments: 0,
      // retweets: 0,
      // likes: 0,
    })
    setOnTweetTextChange("")
  }

  return (
    <div className="tweet-container">
      <div className="tweet-box-top row">
        <span className="tweet-avatar fa-stack">
          <i className="fas fa-circle fa-stack-2x">
            <i className="fas fa-user fa-stack-1x"></i>
          </i>
        </span>

        <textarea name="new-tweet" type="text" placeholder="What's Happening?" value={tweetTextChange}
          onChange={handleOnTweetTextChange} 
          onFocus={handleOnTweetTextFocus}
          onBlur={handleOnTweetTextClickOut} 
          className={tweetTextFocus === "Focused" ? "expanded" : null} 
        >
        </textarea>

        <i className={`fas ${tweetTextFocus === "Focused" ? "fa-smile" : "fa-image"}`}></i>
      </div>
      <div className=" row tweet-extras">
        <div className="icon-set">
          <i className="fas fa-image"></i>
          <i className="icon-gif">GIF</i>
          <i className="far fa-chart-bar"></i>
          <i className="fas fa-map-marker-alt"></i>
        </div>

        <span className={`tweet-length ${140 - tweetTextChange.length < 0 ? "red" : null}`}>&nbsp;{140 - tweetTextChange.length}</span>

        <div className="submit">
          <i className="fas fa-plus-circle"></i>
          <button className="submit-button" onClick={tweetTextChange !== "" && tweetTextChange.length <= 140 ? handleOnSubmit : null}>Tweet</button>
        </div>
      </div>
    </div>
  )
}
