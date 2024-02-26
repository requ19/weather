import './Form.css'
import Button from '../Button/Button';
const Form = ({weather, setWeather, city, setCity}) => {

  return (
    <div className='wrapper'>
      <form className='form'>
        <input
          type="text"
          placeholder='Search city...'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button city={city} weather={weather} setWeather={setWeather} />
      </form>
      
      
    </div>
  );
};

export default Form;
