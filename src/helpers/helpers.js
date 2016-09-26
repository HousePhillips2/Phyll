import $ from 'jquery';

export const _getPlants = () => {
  $.ajax({
    method: 'GET',
    url: 'api/plantFacts',
    success: (plants) => {
      this.setState({ plants });
    },
    error: (err) => {
      throw new Error(err);
    }
  });
};

export const _getAdmin = () => {
  $.ajax({
    method: 'GET',
    url: 'api/admin',
    success: (admin) => {
      this.setState({ admin });
    },
    error: (err) => {
      throw new Error(err);
    }
  });
};

export const _fetchPlant = (plant) => {
  $.ajax({
    method: 'POST',
    url: 'api/plantFacts',
    json: true,
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify({ plant:plant }),
    success: (plantFacts) => {
      if(plantFacts.length!==0){
        this.setState({plantFacts:plantFacts[0]});
      }
    }
  });
};
