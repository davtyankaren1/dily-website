import CharityHero from "./CharityHero";
import WhomWeHelp from "./WhomWeHelp";
import HowCanWeHelp from "./HowCanWeHelp";
import WhereToSellThings from "./WhereToSellThings";
import WeNeedHelp from "./WeNeedHelp";
import "../../styles/Charity.scss";

const Charity = () => {
  return (
    <div className='charity'>
      <div className=''>
        <div className='charity__inner'>
          <CharityHero />
          <WhomWeHelp />
          <HowCanWeHelp />
          <WhereToSellThings />
          <WeNeedHelp />
        </div>
      </div>
    </div>
  );
};

export default Charity;
