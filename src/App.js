import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>Name</legend>
          <input
            type='text'
            name='fname'
          />
          <label for='fname'>First Name</label>
          <input
            type='text'
            name='lname'
          />
          <label for='lname'>Last Name</label>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <input
            type='text'
            name='line1'
          />
          <label for='line1'>Street Address</label>
          <input
            type='text'
            name='city'
          />
          <label for='city'>City</label>
          <input
            type='text'
            name='state'
          />
          <label for='state'>State</label>
          <input
            type='text'
            name='zip'
          />
          <label for='zip'>Postal/Zip Code</label>
          <input
            type='text'
            name='country'
          />
          <label for='country'>Country</label>
        </fieldset>
        <fieldset>
          <legend>Personal</legend>
          <input
            type='text'
            name='ssn'
          />
          <label for='ssn'>Social Security Number</label>
          <input
            type='email'
            name='email'
          />
          <label for='email'>Email</label>
          <input
            type='text'
            name='birth'
          />
          <label for='birth'>Date of Birth</label>
        </fieldset>
      </form>
      
    </div>
  );
}

export default App;
