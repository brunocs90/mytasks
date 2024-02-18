'use client';
import Tasks from '../Components/Tasks/Tasks';
import { useGlobalState } from '../context/globalProvider';

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { importantTasks } = useGlobalState();
  return <Tasks title='Important Tasks' tasks={importantTasks} />;
}

export default page;
