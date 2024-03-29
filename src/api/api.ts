import axios from "axios";
import {FormDataType} from "../components/Login/LoginForm/LoginForm";
import {UserProfileType} from "../redux/redusers/profile-reducer";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            "API-KEY": "2db0e584-6ebd-4d77-859c-a25eed5599fb"
        }
    })

    export const usersAPI = {
        getUsers(currentPage: number = 0, pageSize: number = 4, term: string = '', friends: null | boolean = null) {
            
            return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}`
                + (friends === null ? '' : `&friend=${friends}` ))
                .then(response => response.data)
        },
        unfollowUser(userID: number) {
            return instance.delete(`follow/${userID}`)
                .then(response => response.data)
        },
        followUser(userID: number) {
            return instance.post(`follow/${userID}`)
                .then(response => response.data)
        }
    }

    export const profileApi = {
        getProfile(userID: string) {
            return instance.get(`profile/${userID}`)
        },
        getStatus(userID: string) {
            return instance.get(`profile/status/${userID}`)
        },
        updateStatus(status: string) {
            return instance.put('profile/status', {status})
        },
        updatePhoto(newPhoto: File){
            const formData = new FormData();
            formData.append('image', newPhoto)
            return instance.put('profile/photo', formData,  {
               headers: {
                   'Content-type': 'multipart/form-data'
               }
            })
        },
        updateProfileData(newProfileData: Partial<UserProfileType>) {
            return instance.put('profile', newProfileData)
        }
    }

    export const authApi = {
        authMe() {
            return instance.get(`auth/me`)
                .then(response => response.data)
        },
        loginIn(FormData: FormDataType) {
          return instance.post('auth/login', FormData)
              .then(response => response.data)
        },
        logout() {
            return instance.delete('auth/login')
                .then(response => response.data)
        }

    }

    export const securityApi = {
        getCaptcha() {
            return instance.get('security/get-captcha-url')
                .then(response => response.data)
        }
    }

    export enum ResultCodes {
        OK = 0,
        ERROR = 1,
        CAPTCHA = 10
    }

    export type FollowUserResponseType = {
        resultCode: ResultCodes
        messages: string[]
        data: {}
    }