import React, {useState} from 'react'
import {prompts} from './data'
export const Prompt = () => {
  const [prompt, setPrompt] = useState(prompts[Math.floor(Math.random()*prompts.length)])
  const newPrompt = () => setPrompt(prompts[Math.floor(Math.random()*prompts.length)])

  return (
    <article>
      <section className="prompt">
        {prompt}
      </section>
      <section>
        <button className="get-prompt" onClick={newPrompt}>New Prompt</button>
      </section>
    </article>
  )
}
