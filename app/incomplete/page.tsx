'use client';
import Tasks from '../Components/Tasks/Tasks';
import { useGlobalState } from '../context/globalProvider';

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { incompleteTasks } = useGlobalState();
  return <Tasks title='Incomplete Tasks' tasks={incompleteTasks} />;
}

export default page;
