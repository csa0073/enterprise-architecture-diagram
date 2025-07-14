const CopilotPanel = () => {
  return (
    <div className="border-t bg-white px-4 py-3">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-3 justify-center">
          {["AWS", "GCP", "Azure", "Terraform"].map((keyword) => (
            <button
              key={keyword}
              className="text-xs border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100"
            >
              {keyword}
            </button>
          ))}
        </div>
        <form className="flex border rounded overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Describe your diagram…"
            className="flex-1 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none"
            disabled
          />
          <button
            type="button"
            className="bg-blue-600 text-white px-5 hover:bg-blue-700 transition disabled:bg-gray-300"
            disabled
          >
            Generate →
          </button>
        </form>
      </div>
    </div>
  );
};

export default CopilotPanel;
