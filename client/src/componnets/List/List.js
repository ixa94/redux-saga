
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Cads/Card'
import {sagaINITUsers} from '../../redux/sagaActionCreators/sagaActionCreators'


function List(props) {
  let { user } = useSelector((state) => state.user)

  const dispatch = useDispatch();
 useEffect(() => {    
    dispatch(sagaINITUsers());
  }, []);
  return (
    <div className="container d-flex text-center m-auto flex-column mt-5">
    <h3 className="text-center m-auto">List</h3>
    <div className="container d-flex text-center m-auto me-2 flex-wrap">
      {user && user.length
        ? user?.map((el) => <Card dispatch={dispatch} key={el._id} info={el} />)
        : null}
    </div>
  </div>
  );
}

export default List;
