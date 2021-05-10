import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { sagaADDUsers } from '../../redux/sagaActionCreators/sagaActionCreators';

function Form(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const nameInput = useRef();
  const ageInput = useRef();
  const heightInput = useRef();
  

  const formHandler = (event) => {
    event.preventDefault();

   
      

    // После Redux Sag
    dispatch(
      sagaADDUsers({
        name: nameInput.current.value,
        age: ageInput.current.value,
        height: heightInput.current.value,
        sex:  event.target.sex.value,
      })
    );

    history.push('/list');
  };

  return (
    <div className="container text-center m-auto">
      <form onSubmit={(event) => formHandler(event)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            NAME
          </label>
          <input
            type="text"
            ref={nameInput}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            AGE
          </label>
          <input
            type="number"
            ref={ageInput}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            HEIGHT
          </label>
          <input
            type="number"
            ref={heightInput}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-radio">
          <input
            type="radio"
            className="form-check-input"
            name="sex"
            id="exampleCheck1"
            value="man"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Man
          </label>
          <input
            type="radio"
            className="form-check-input"
            name="sex"
            id="exampleCheck2"
            value="woman"
          />
          <label className="form-check-label" htmlFor="exampleCheck2">
            Woman
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
}

export default Form;
