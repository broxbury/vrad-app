

export const getAreaData = () => {
  const url = 'https://vrad-api.herokuapp.com'
  fetch(url + '/api/v1/areas')
   .then(response => response.json())
   .then(areaData => {
     areaData.areas.map(area => {
       return fetch(url + area.details)
       .then(response => response.json())
       .then(info => {
         return {
           nickname: area.area,
           ...info
         }
       })
     })
    // Promise.all(areaPromises).then(completeAreaData => this.setState({ areas: completeAreaData }))
  })
}
