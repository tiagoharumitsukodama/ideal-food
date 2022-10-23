import "./styles.css";

const IngredientForm = () => {
  return (
    <div className="ingredientForm">
      <h1>What do you have?</h1>
      <div className="bodyContent">
        <div className="insertIngredient">
          <input
            className="input ingredientName"
            placeholder="Ingredient name"
          />
          <input
            className="input ingredientUnit"
            placeholder="Ingredient unit"
          />
          <input
            className="input ingredientValue"
            placeholder="Quantity"
          />
        <button className="submit">Add</button>
        </div>
        <div className="ingredientList">
          <div className="ingredientItem">
            <div className="value">50 g</div>
            <div className="name">Banana</div>
            <button className="remove">remove</button>
          </div>
          <div className="ingredientItem">
            <div className="value">50 g</div>
            <div className="name">Banana</div>
            <button className="remove">remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientForm;
