import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("individual");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Register Page</h2>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setUserType("individual")}
          className={`px-4 py-2 rounded ${
            userType === "individual" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Individual
        </button>
        <button
          onClick={() => setUserType("enterprise")}
          className={`px-4 py-2 rounded ${
            userType === "enterprise" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Enterprise
        </button>
      </div>

      <div className="border p-4 rounded bg-white w-80 text-center">
        <p className="text-gray-600 mb-2">
          Skeleton form for {userType} registration.
        </p>
        <button
          onClick={() => navigate("/editor")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Proceed to Editor →
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
