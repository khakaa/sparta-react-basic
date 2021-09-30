import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadBucketFB, createBucketFB } from "./redux/modules/bucket";

import Spinner from "./Spinner";
import BucketList from "./BucketList";
import Detail from "./Detail";
import Progress from "./Progress";
import NotFound from "./NotFound";
import { db } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "@firebase/firestore";
import { Firestore } from "@firebase/firestore";
import { async } from "@firebase/util";

function App() {
  const text = React.useRef(null);
  const dispatch = useDispatch();
  const is_loaded = useSelector((state) => state.bucket.is_loaded);

  React.useEffect(() => {
    dispatch(loadBucketFB());
  }, []);

  const addBucketList = () => {
    dispatch(createBucketFB({ text: text.current.value, completed: false }));
  };

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress />
        <Line />
        <Switch>
          <Route path="/" exact>
            <BucketList />
          </Route>
          <Route path="/detail/:index" exact component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
      {!is_loaded && <Spinner />}
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px solid #ddd;
`;

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;

  & > * {
    padding: 5px;
  }

  & input {
    border: 1px solid #888;
    width: 70%;
    margin-right: 10px;
  }

  & input:focus {
    outline: none;
    border: 1px solid #a673ff;
  }

  & button {
    width: 25%;
    color: #fff;
    border: #673ab7;
    background: #673ab7;
  }
`;
export default App;
