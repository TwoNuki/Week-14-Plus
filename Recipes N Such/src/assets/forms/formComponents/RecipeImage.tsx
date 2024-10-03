import { ChangeEventHandler } from "react";
import { Form } from "react-bootstrap";

type Props = {
  image?: string, 
  handleFileChange:ChangeEventHandler
};

const RecipeImage = (propsIn: Props) => {
  const { image, handleFileChange } = { ...propsIn };
  return (
    <>
          {image ? <img src={`${image}`} alt="food" />: ""}
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Recipe Image</Form.Label>
        <Form.Control
          type="file"
          accept=".jpg, .jpeg, .png, .webp, .bmp"
          name="image"
          value={image}
          onChange={handleFileChange}
        />
      </Form.Group>
    </>
  );
};

export default RecipeImage;
