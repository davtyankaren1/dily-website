import TextFieldHeader from "../../texts/TextFieldHeader";
import TextFieldParagraph from "../../texts/TextFieldParagraph";

import "../../../styles/MessageSent.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MessageSent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    <div className='message-sent-notify'>
      <TextFieldHeader text='Письмо отправлено' />
      <div className='message-sent-text'>
        <TextFieldParagraph
          text='На ваш e-mail отправлены  инструкции 
по восстановлению паролю'
        />
      </div>
    </div>
  );
};

export default MessageSent;
