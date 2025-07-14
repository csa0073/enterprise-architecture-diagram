import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import CopilotPanel from "./CopilotPanel";
import HistoryPanel from "./HistoryPanel";

const DiagramEditor = () => {
  return (
    <div className="flex flex-col h-screen">
      <Toolbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 bg-white p-8 overflow-auto">
          <p className="text-gray-500 text-center text-xl">
            Canvas Placeholder (React Flow will go here)
          </p>
        </div>
        <HistoryPanel />
      </div>
      <CopilotPanel />
    </div>
  );
};

export default DiagramEditor;
