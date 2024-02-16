import { useRef, type FormEvent } from "react"

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void 
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    onAddGoal(enteredGoal, enteredSummary)

    e.currentTarget.reset()
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input
          type="text"
          id="goal"
          name="goal"
          ref={goal}
        />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input
          type="text"
          id="summary"
          name="summary"
          ref={summary}
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}