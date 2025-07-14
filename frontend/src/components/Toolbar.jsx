const Toolbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b">
      <h1 className="text-lg font-semibold text-gray-700">Toolbar</h1>
      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
        Export PNG
      </button>
    </div>
  );
};

export default Toolbar;
