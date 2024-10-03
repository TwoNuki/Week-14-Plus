import { ChangeEventHandler } from "react";
import { Form } from "react-bootstrap";

type Props = {
  ingredients?: string[];
  handleLists: ChangeEventHandler;
};

const RecipeIngredients = (propsIn: Props) => {
  const { ingredients, handleLists } = { ...propsIn };

  return (
    <>
      <Form.Group className="mb-3" controlId="formRecipeIngredients">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          placeholder="Type Ingredients Here"
          name="ingredients"
          value={ingredients}
          onBlur={handleLists}
        />
      </Form.Group>
    </>
  );
};

export default RecipeIngredients;
