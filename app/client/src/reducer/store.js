import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
  },

  // 비직렬화한 데이터 전송으로 인해 발생되는 에러메세지 감추기
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
