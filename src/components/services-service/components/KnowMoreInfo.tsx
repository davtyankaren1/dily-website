import Bg from "../../../assets/images/background.png";
import TextFieldHeader from "../../texts/TextFieldHeader";
import TextFieldAlternative from "../../texts/TextFieldAlternative";
import { Button } from "../../customs";
import "../../../styles/KnowMoreInfo.scss";

const KnowMoreInfo = () => {
  return (
    <div className='know-more-info'>
      <div className='know-more-info__inner'>
        <img src={Bg} alt='' />
        <TextFieldHeader
          color='#00C65E'
          text='Узнайте стоимость ремонта онлайн '
        />
        <TextFieldAlternative text='И получите скидку 5%' />
        <div className='know-more-info_btn'>
          <Button children='Узнать' />
        </div>
      </div>
    </div>
  );
};

export default KnowMoreInfo;
