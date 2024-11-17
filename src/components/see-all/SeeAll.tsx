import { useNavigate } from "react-router-dom";
import { ISeeAllProps } from "../../types/types";
import "../../styles/SeeAll.scss";
import { useTranslation } from "react-i18next";

const SeeAll = ({ path }: ISeeAllProps) => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate(path);
  };

  const { t } = useTranslation();

  return (
    <span className='see-all-text' onClick={handlenavigate}>
      {t("see_all")}
    </span>
  );
};

export default SeeAll;
