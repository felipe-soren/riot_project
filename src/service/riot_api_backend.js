import axios from 'axios';

export const mainApi = axios.create({
  baseURL: 'https://riotapibackend.herokuapp.com/'
})

export const API_KEY = "RGAPI-9a06838c-3c12-4410-a7a1-416c01ba69b0";