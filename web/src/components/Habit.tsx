interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <div className='bg-gray-500 w-10 text-green-600 items-center'>
      <p>{props.completed}</p>
      <p>azul</p>
    </div>

  )
};