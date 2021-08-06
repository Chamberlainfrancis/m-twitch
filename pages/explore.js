import Menubar from '../src/menu/Menubar';
import Categories from '../src/categories';

let games = ['Music','Apex','Fornite','Grand Theft','Dead by daylight', 'Escape from Tacov'];

const category = games.map( function(name, key) {
    let categoryImage;
    switch(name) {
        case 'Music':
            categoryImage = '/images/Music.jpg';
            break;
        case 'Apex':
            categoryImage = '/images/Apex.jpg';
            break;
        case 'Fornite':
            categoryImage = '/images/Fortnite.jpg';
            break;
        case 'Grand Theft':
            categoryImage = '/images/Grand-Theft-Auto.jpg';
            break;
        case 'Escape from Tacov':
            categoryImage = '/images/Escape-from-Tarkov.jpg';
            break;
        case 'Dead by daylight':
            categoryImage = '/images/Dead-by-Daylight.jpg';
            break;
        default:
            categoryImage = '/images/cod.jpg';
    }

    return (
        <div className="col-6" key={key}>
            <Categories coverImg={categoryImage}
                title={name}
                name="Chamberlain" 
                language="English"
            />
        </div>
    );
  });

export default function Explore() {

  return (
    <>
      <Menubar />
      <div className="container-fluid mt-5 pt-5">
          <div className="row g-2">
              {category}
          </div>
      </div>
    </>
  );
}
