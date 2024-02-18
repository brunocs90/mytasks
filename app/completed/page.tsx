'use client';
import Tasks from '../Components/Tasks/Tasks';
import { useGlobalState } from '../context/globalProvider';

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { completedTasks } = useGlobalState();

  return <Tasks title='Completed Tasks' tasks={completedTasks} />;
}

export default page;
