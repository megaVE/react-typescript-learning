
interface CourseGoalProps {
  id: number
  title: string
  onDelete: (id: number) => void
  // description: string
}

//  -------------------------
// | COMPONENT WITH CHILDREN |
//  -------------------------

// import { ReactNode } from "react"

// type CourseGoalPropsWithChildren = CourseGoalProps & {
//   children: ReactNode
// }

import { type PropsWithChildren } from "react"

type CourseGoalPropsWithChildren = PropsWithChildren<CourseGoalProps>
  
  
//  --------------------------
// | ARROW FUNCTION COMPONENT |
//  --------------------------
  
// import { FC } from "react"
  
// const CourseGoal: FC<CourseGoalProps> = ({ title, description }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }

// export default CourseGoal

export default function CourseGoal({ id, title, children, onDelete }: CourseGoalPropsWithChildren) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  )
}