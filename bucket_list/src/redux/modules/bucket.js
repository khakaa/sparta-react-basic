import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "@firebase/firestore";

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const DELETE = "bucket/DELETE";
const LOADED = "bucekt/LOADED";

const initialState = {
  is_loaded: false,
  list: [],
};

// Action Creators  액션을 만드는 함수
export function loadBucket(bucket_list) {
  return { type: LOAD, bucket_list };
}

export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}

export function deleteBucket(bucket_index) {
  console.log("지울 버킷 인덱스", bucket_index);
  return { type: DELETE, bucket_index };
}

export function isLoaded(loaded) {
  return { type: LOADED, loaded };
}

//middlewares => 우리가 사용하는 redux-thunk는 함수를 반환한다.
// 파이어베이스와 통신하는 부분
export const loadBucketFB = () => {
  return async function (dispatch) {
    const bucket_data = await getDocs(collection(db, "bucket"));
    // console.log(bucket_data);

    let bucket_list = [];

    bucket_data.forEach((b) => {
      bucket_list.push({ id: b.id, ...b.data() });
    });

    dispatch(loadBucket(bucket_list));
  };
};

export const createBucketFB = (bucket) => {
  return async function (dispatch) {
    dispatch(isLoaded(false));
    const docRef = await addDoc(collection(db, "bucket"), bucket);

    // const _bucket = await getDoc(docRef);
    // dispatch(createBucket({ id: _bucket.id, ..._bucket.data() }));

    // 파라미터로 이미 bucket을 받아왔기때문에 await하지 않고 이렇게 해도 된다
    const bucket_data = { id: docRef.id, ...bucket };
    dispatch(createBucket(bucket_data));
  };
};

export const updateBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "bucket", bucket_id);
    await updateDoc(docRef, { completed: true });

    console.log(getState().bucket);
    const _bucekt_list = getState().bucket.list;
    const bucket_index = _bucekt_list.findIndex((b) => {
      return b.id === bucket_id;
    });
    dispatch(updateBucket(bucket_index));
    console.log(bucket_index);
  };
};

export const deleteBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    if (!bucket_id) {
      window.alert("아이디가 없네요");
    }
    const docRef = doc(db, "bucket", bucket_id);
    await deleteDoc(docRef);

    const _bucekt_list = getState().bucket.list;
    const bucket_index = _bucekt_list.findIndex((b) => {
      return b.id === bucket_id;
    });
    dispatch(deleteBucket(bucket_index));
  };
};

// Reducer
// 파라미터에 기본값을 준것
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return { list: action.bucket_list, is_loaded: true };
    }
    case CREATE: {
      const new_bucket_list = [...state.list, action.bucket];
      return { ...state, list: new_bucket_list, is_loaded: true };
    }

    case UPDATE: {
      const new_bucket_list = state.list.map((l, idx) => {
        if (1 * action.bucket_index === idx) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      return { ...state, list: new_bucket_list };
    }

    case DELETE: {
      const new_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
      });
      return { ...state, list: new_bucket_list };
    }

    case LOADED: {
      return { ...state, is_loaded: action.loaded };
    }
    default:
      return state;
  }
}
