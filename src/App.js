import {Button, Download, Features, SectionWrapper} from "./components";
import assets from "./assets";

function App() {
  return (
      <>
          <SectionWrapper
              title="You own store of Nifty NFTs. Start Selling & Growing"
              description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
              showBtn
              mockupImg={assets.homeHero}
              banner="banner"
          />
          <SectionWrapper
              title="Smart User Interface Marketplace"
              description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
              mockupImg={assets.homeCards}
              reverse
          />
          <Features />
      </>
  );
}

export default App;
