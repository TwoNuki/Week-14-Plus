import { ChangeEventHandler } from "react";
import { Form } from "react-bootstrap";

type Props = {
  instructions?: string;
  handleLists: ChangeEventHandler;
};

const RecipeInstructions = (propsIn: Props) => {
  const { instructions, handleLists } = { ...propsIn };

  return (
    <>
      <Form.Group className="mb-3" controlId="formRecipeInstructions">
        <Form.Label>Instructions</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          placeholder="Type Instructions Here"
          name="instructions"
          defaultValue={instructions}
          onBlur={handleLists}
        />
      </Form.Group>
    </>
  );
};

export default RecipeInstructions;
