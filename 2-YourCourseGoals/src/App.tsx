import { useState } from "react";
import goalsImg from "./assets/goals.jpg"

import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoalObject = {
  title: string
  description: string
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoalObject[]>([])

  function handleAddGoal(goal: string, summary: string) {
    setGoals(state => {
      const newGoal: CourseGoalObject = {
        id: Math.random(),
        title: goal,
        description: summary,
      }

      return [...state, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(state => state.filter(goal => goal.id !== id))
  }

  return (
    <main>
      <Header
        image={{ src: goalsImg, alt: "A list of goals" }}
      >
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
      />
    </main>
  )
}
