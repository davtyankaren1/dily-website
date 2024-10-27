import { useNavigate } from "react-router-dom";
import "../../styles/SeeAll.scss";
import { ISeeAllProps } from "../../types/types";

const SeeAll = ({ path }: ISeeAllProps) => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate(path);
  };
  return (
    <span className='see-all-text' onClick={handlenavigate}>
      Смотреть все
    </span>
  );
};

export default SeeAll;
