import React, { useState, useRef } from 'react';

import {sagaDELUsers,sagaEDITUsers,} from '../../redux/sagaActionCreators/sagaActionCreators';

function Card({ info, dispatch }) {
  const [edit, setEdit] = useState(false);
  //const dispatch = useDispatch();
  const modalWindow = () => {
    setEdit((prev) => !prev);
  };

  const nameInput = useRef();
  const ageInput = useRef();
  const heightInput = useRef();

  const deleteHandler = (id) => {
    dispatch(sagaDELUsers({ id: id }));
  };

  const editHandler = (e) => {
    e.preventDefault();
    const id = e.target.id;
    console.log(id);

    dispatch(
      sagaEDITUsers({
        id: id,
        name: nameInput.current.value,
        age: ageInput.current.value,
        height: heightInput.current.value,
      })
    );
    setEdit(false);
  };
  return (
    <div className="me-3">
      <div
        className="card mt-5 bg-light"
        key={info._id}
        style={{ width: '18rem' }}
      >
        <div className="card-body">
          <h5 className="card-title">Name: {info.name}</h5>
          <p className="card-text">Age: {info.age}</p>
          <p className="card-text">Height: {info.height}</p>
          <p className="card-text">Sex: {info.sex}</p>
          <button
            onClick={() => deleteHandler(info._id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={modalWindow}
            type="button"
            className="btn btn-info ms-4"
            id={info._id}
          >
            Edit
          </button>
        </div>
      </div>
      {edit ? (
        <form
          className="mt-3 border border-dark pe-2 p-2"
          id={info._id}
          onSubmit={(event) => editHandler(event)}
        >
          <div className="mb-3">
            <label className="form-label">Enter student name:</label>
            <input ref={nameInput} type="text" className="form-control" defaultValue={info.name} />
          </div>
          <div className="mb-3 ">
            <label className="form-label">Enter student age:</label>
            <input ref={ageInput} defaultValue={info.age} type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              HEIGHT
            </label>
            <input
            defaultValue={info.height}
              type="number"
              ref={heightInput}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default Card;
