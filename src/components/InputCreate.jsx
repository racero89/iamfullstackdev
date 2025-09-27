
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputCreate() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Por favor escribe una tarea");
      return;
    }

    try {
      await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      setTitle("");
      navigate("/"); 
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  };

  return (
    <div className="p-4">
      <h2>Crear nueva tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
}

export default InputCreate;
