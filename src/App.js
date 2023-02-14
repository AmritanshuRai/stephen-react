import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import Cortana from './images/cortana.png';

//This is converted to base 64 image url which has every data of image. Webpack dev server does this for every image less than 10k bytes
// ex: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAkFBMVEX///+a2vYcn+ef3feY2faT2PUAmuYAm+YUneeg3vcAmOX6/f+35Pio3/...large string"
// console.log('Cortana: ', Cortana);

//Since this image is more than 10k bytes this gets a relative path by webpack dev
// ex: /static/media/siri.e6a70a555204b3a1f6f0.png
// console.log('SiriImage: ', SiriImage);

const App = () => {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal digital assistent</p>
        </div>
      </section>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                title='alexa'
                handle='@alexa99'
                image={AlexaImage}
                description='alexa was made by amazon to maa chudao'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='cortana'
                handle='@cortana'
                image={Cortana}
                description='alexa was made by amazon to maa chudao'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='siri'
                handle='@siri'
                image={SiriImage}
                description='alexa was made by amazon to maa chudao'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
