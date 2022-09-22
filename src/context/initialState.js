import { fetchUser } from "../utils/fetchLocalStorageDate"


const userInfo = fetchUser();
export const initialState = {
    user : userInfo,
};