import './App.css';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14').toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11').toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <hr />
      <Greetings lang={'de'}>Ludwing</Greetings>
      <Greetings lang={'fr'}>François</Greetings>
      <hr />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <hr />
      <BoxColor r={255} g={0} b={0} hex={'ff0000'} />
      <BoxColor r={128} g={255} b={0} hex={'80ff00'} />
      <hr />
      <CreditCard
        type="Visa"
        img="https://www.lifepng.com/wp-content/uploads/2020/12/Visa-Logo-png-hd.png"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        img="https://cdn.discordapp.com/attachments/1069723253016367184/1114557025641308190/mastercard.png"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        img="https://www.lifepng.com/wp-content/uploads/2020/12/Visa-Logo-png-hd.png"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <hr />
      <Rating num={0}>0</Rating>
      <Rating num={1.49}>1.49</Rating>
      <Rating num={1.5}>1.5</Rating>
      <Rating num={3}>3</Rating>
      <Rating num={4}>4</Rating>
      <Rating num={5}>5</Rating>
      <hr />
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <hr />
      <LikeButton />
      <hr />
      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
      <hr />
      <Dice />
      <hr />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <hr />
      <NumbersTable limit={12} />
      <hr />
    </div>
  );
}

export default App;
