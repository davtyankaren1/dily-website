import GuaranteeSvg from "../../../assets/svgs/GuaranteeSvg";
import PerfectPrice from "../../../assets/svgs/PerfectPrice";
import ProfessionalSvg from "../../../assets/svgs/ProfessionalSvg";
import QuicklySvg from "../../../assets/svgs/QuicklySvg";
import { motion } from "framer-motion";

import "../../../styles/ServicesIntroducing.scss";

const IntroducingServices = [
  {
    id: 1,
    titlee: "Быстро",
    svg: <QuicklySvg />
  },
  {
    id: 2,
    titlee: "С гарантией",
    svg: <GuaranteeSvg />
  },
  {
    id: 3,
    titlee: "Профессионально",
    svg: <ProfessionalSvg />
  },
  {
    id: 4,
    titlee: "Отличная цена",
    svg: <PerfectPrice />
  }
];

const ServicesIntroducing = () => {
  return (
    <div className='services-introducing'>
      <div className='container'>
        <div className='services-introducing__inner'>
          <div className='services-introducing-items'>
            {IntroducingServices.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  className='services-introducing-items-item'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span>{item.titlee}</span>
                  <div>{item.svg}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesIntroducing;
