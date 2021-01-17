import { galleryState, TUser, TAlbum, TPhoto} from './types';

const initialState: galleryState = {
  users:  null,
  albums:  null,
  photos: null,
};

const reducer = (state = initialState, action: any): galleryState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
