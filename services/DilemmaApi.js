import axios from "./backendApi";

const getDilemmas = async (selected) => {
  const selectedJSON = JSON.stringify(selected);
  try {
    // Vervang met backend url..
    const res = await axios.get(
      "http://localhost:5001/api/questions/ByActiveQuiz",
      selectedJSON
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default getDilemmas;
