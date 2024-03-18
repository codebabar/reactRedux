

import TaskForm from "./component/TaskForm";
import ViewTask from "./component/ViewTask";
import { TaskProvider } from "./context/TaskContext";

function App() {

  return (
    <TaskProvider>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column', margin: '0 auto',width:'300px'}}>
           <TaskForm />
           <ViewTask />
         
        </div>
      </TaskProvider>
    );
}

export default App;
