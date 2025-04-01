import { ChangeEventHandler } from "react";
import { Form } from "react-bootstrap";

type Props = {
  image?: string, 
  handleChange:ChangeEventHandler
};

//changed from taking a file upload to a image link due to issues with hosting, would cause image to show as a broken link since it was showing as hosted locally instead of on the api
const RecipeImage = (propsIn: Props) => {
  const { image, handleChange } = { ...propsIn };
  return (
    <>
          {image ? <img src={`${image}`} alt="food" />: ""}
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Recipe Image</Form.Label>
        <Form.Control
          type="text"
          //accept=".jpg, .jpeg, .png, .webp, .bmp"
          name="image"
          defaultValue={image}
          onChange={handleChange}
        />
      </Form.Group>
    </>
  );
};

export default RecipeImage;
