// submit.js
import { useStore, selector } from "./store";
import { shallow } from "zustand/shallow";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const submitPipeline = async (nodes, edges) => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });
      alert(
        `Nodes: ${response.num_nodes}, Edges: ${response.num_edges}, Is DAG: ${response.is_dag}`
      );
    } catch (error) {
      console.error("Error submitting pipeline:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitPipeline(nodes, edges);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
};
