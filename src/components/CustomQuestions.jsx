import { useState } from "react";
import Select from "react-select";
import { getQuestions } from './App';

const CustomQuestions = ({ goBack, setTriviaData }) => {
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const difficultyEnum = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ];
  const categoryEnum = [
    { label: "Music", value: "music" },
    { label: "Sport and Leisure", value: "sport_and_leisure" },
    { label: "Film and TV", value: "film_and_tv" },
    { label: "Arts and Literature", value: "arts_and_literature" },
    { label: "History", value: "history" },
    { label: "Society and Cuture", value: "society_and_culture" },
    { label: "Science", value: "science" },
    { label: "Geography", value: "geography" },
    { label: "Food and Drink", value: "food_and_drink" },
    { label: "General Knowledge", value: "general_knowledge" },
  ];

  const getQueryParams = () => {
    const difficulties = selectedDifficulties
      .map(({ value }) => value)
      .join(",");
    const categories = selectedCategories.map(({ value }) => value).join(",");
    const queryParam = `categories=${categories}&difficulties=${difficulties}`;
    return queryParam;
  };

  const handleStart = async () => {
    const data = await getQuestions(getQueryParams());
    setTriviaData(data);
  };

  return (
    <div className="custom">
      <div>
        <div className="difficulty">
          <h3>Difficulties:</h3>
          <Select
            onChange={(e) => setSelectedDifficulties(e)}
            isMulti
            options={difficultyEnum}
          />
        </div>
        <div className="categories">
          <h3>Categories: </h3>
          <Select
            onChange={(e) => setSelectedCategories(e)}
            isMulti
            options={categoryEnum}
          />
        </div>
      </div>
      <div className="welcome-buttons">
        <div className="welcome-button" onClick={goBack}>
          Back
        </div>
        <div onClick={handleStart}className="welcome-button">Start</div>
      </div>
    </div>
  );
};

export default CustomQuestions;
