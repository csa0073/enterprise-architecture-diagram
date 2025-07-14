import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User logged in:", form);
    navigate("/editor");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="border p-8 rounded bg-white w-96 space-y-4"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Login →
        </button>
      </form>
      <button
        onClick={() => navigate("/")}
        className="text-sm text-gray-500 mt-4 hover:underline"
      >
        Back to Home
      </button>
    </div>
  );
};

export default LoginPage;
