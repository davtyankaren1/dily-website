import { useNavigate } from "react-router-dom";
import TextFieldParagraph from "../texts/TextFieldParagraph";
import "../../styles/BackButton.scss";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className='back-button' onClick={() => navigate(-1)}>
      <TextFieldParagraph underline={true} text='Назад' />
    </div>
  );
};

export default BackButton;
