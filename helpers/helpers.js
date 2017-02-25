import axios from 'axios';

const helpers = {
  camera: {
    imageRecognition: (data) => {
      const URL = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAA14j-7sIJLDTRZd3bYpZrmCEoFA9IN40';

      const request = {
        "requests": 
        [
          {
            "features": 
            [
              {
                "type": "LABEL_DETECTION"
              }
            ],
            "image": 
            {
              "content": data
            }
          }
        ]
      }

      return axios.post(URL, request)
    }
  },
  foodpairing: {
    getFoodpairings: (data) => {
      const options = { data: data }
      return axios.post('http://localhost:8000/foodPairing', options)
    }
  },
  recipes: {
    getRecipeList: (data) => {
      const options = { data: data }
      return axios.post('http://localhost:8000/recipeList', options)
    },
    getRecipe: (id) => {
      const options = { data: id }
      return axios.post('http://localhost:8000/recipeSelector', options)
    }
  }
}
export default helpers;
