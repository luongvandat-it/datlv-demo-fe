// graphqlQuery.js

$(document).ready(function () {
  var ownerId = 1; // Replace with the actual owner ID you want to query

  // Define your GraphQL query
  var graphqlQuery = `
      query Owner($id: Int!) {
        findOneOwner(id: $id) {
          id
          name
          email
          pets {
            id
            name
            type
          }
        }
      }
    `;

  // $.ajax({
  //   url: 'http://localhost:3000/graphql',
  //   method: 'POST',
  //   contentType: 'application/json',
  //   data: JSON.stringify({
  //     query: graphqlQuery,
  //     variables: { id: ownerId }
  //   }),
  //   success: function (response) {
  //     // Handle the response from the server
  //     var ownerData = response.data.findOneOwner;
  //     console.log('Owner Data:', ownerData);
  //   },
  //   error: function (error) {
  //     console.error('Error:', error);
  //   }
  // });
});