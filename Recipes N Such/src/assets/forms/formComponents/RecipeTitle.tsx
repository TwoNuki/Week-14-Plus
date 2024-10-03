import { ChangeEventHandler } from "react";
import { Form } from "react-bootstrap";

type Props = {
  title?: string;
  handleChange: ChangeEventHandler;
};

const RecipeTitle = (propsIn: Props) => {
  const { title, handleChange } = { ...propsIn };

  return (
    <>
      <Form.Group className="mb-3" controlId="formRecipeTitle">
        <Form.Label>Recipe Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Recipe Title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </>
  );
};

export default RecipeTitle;
