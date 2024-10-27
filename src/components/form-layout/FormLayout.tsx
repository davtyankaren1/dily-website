import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import "../../styles/FormLayout.scss";
import {
  DocumentSvg,
  GavelSvg,
  HandsSvg,
  LogoSvg,
  StorefrontSvg,
  WrenchSvg
} from "../../assets/svgs";
import TextFieldTitle from "../texts/TextFieldTitle";

const FormLayout = () => {
  const mockData = [
    {
      id: 1,
      title: "Размещайте объявления бесплатно",
      component: <DocumentSvg />
    },
    {
      id: 2,
      title: "Продавайте на аукционе",
      component: <GavelSvg />
    },
    {
      id: 3,
      title: "Ремонтируйте свою технику ",
      component: <WrenchSvg />
    },
    {
      id: 4,
      title: "Откройте свой магазин",
      component: <StorefrontSvg />
    },
    {
      id: 5,
      title: "Помогайте нуждающимся ",
      component: <HandsSvg />
    }
  ];

  return (
    <motion.div
      className='form-layout-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className='form-layout'
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LogoSvg />
        <h1 className='form-layout-text'>Супер доска объявлений</h1>
        <div className='form-layout-items'>
          {mockData.map((item) => (
            <motion.div
              key={item.id}
              className='form-layout-item'
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: item.id * 0.05 }}
            >
              <div className='form-layout-icons'>{item.component}</div>
              <TextFieldTitle text={item.title} color='white' />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className='form-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='form-wrapper'>
          <Outlet />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FormLayout;
