import HighlightCard from '../components/HighlightCard.tsx';
import Footer from '../components/Footer.tsx';

function Favorites() {
  return (
    <>
      <div className="bg-gray-200 p-10" dir="rtl">
        <HighlightCard id={'2'} highlight={'s'} />
        <HighlightCard id={'2'} highlight={'s'} />
        <HighlightCard id={'2'} highlight={'s'} />
        <HighlightCard id={'2'} highlight={'s'} />
      </div>
      <Footer />
    </>
  );
}
export default Favorites;
