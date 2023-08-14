// // $(document).ready(() => {
// //   const dataLogin = JSON.parse(localStorage.getItem('dataLogin'));

// //          const userDataQuery = `
// //   query getSocialAccountsByOwnerId {
// //       getSocialAccountsByOwnerId(id: ${dataLogin.ownerId}) {
// //         id
// //         name
// //         email
// //         socialAccounts {
// //           id
// //           email
// //           provider
// //           picture
// //         }
// //       }
// //     }`

// //          $.ajax({
// //             url: 'http://localhost:3000/graphql',
// //             method: 'POST',
// //             contentType: 'application/json',
// //             data: JSON.stringify({
// //                query: userDataQuery
// //             }),
// //             success: (res) => {
// //                console.log(res);
// //                if (res.data.getSocialAccountsByOwnerId) {
// //                   const dataUser = {
// //                      id: res.data.getSocialAccountsByOwnerId[0].id,
// //                      name: res.data.getSocialAccountsByOwnerId[0].name,
// //                      email: res.data.getSocialAccountsByOwnerId[0].email,
// //                      socialAccounts: res.data.getSocialAccountsByOwnerId[0].socialAccounts
// //                   };
// //                   localStorage.setItem('dataUser', JSON.stringify(dataUser));
// //                }
// //             },
// //             error: (err) => {
// //                console.log(err);
// //             }
// //          });
// // });

// $(document).ready(function () {
//   // load data login
//   function getQueryParam(param) {
//      const urlParams = new URLSearchParams(window.location.search);
//      return urlParams.get(param);
//   }

//   const dataFromQueryParam = getQueryParam('data');

//   if (dataFromQueryParam) {
//      localStorage.setItem('yourLocalStorageKey', dataFromQueryParam);
//      const savedData = localStorage.getItem('yourLocalStorageKey');
//      console.log('Data from localStorage:', savedData);
//      const dataObject = JSON.parse(savedData);
//      $('#google').text(dataObject.email);
//      $('#statusConnectGoogle').text('Connected');
//      $('#mainTitle').text(`Welcome back ${dataObject.firstName} ${dataObject.lastName}!`);
//      dataObject.statusGoogle = 'Connected';
//      localStorage.setItem('yourLocalStorageKey', JSON.stringify(dataObject));
//   }

  

//   // handle unlink/link google
//   $('#statusConnectGoogle').click(() => {
//      if ($('#statusConnectGoogle').text() === 'Not connected') {
//         window.location.href = 'http://localhost:3000/google';
//      } else {
//         const confirmUnconnect = confirm('Are you sure to unconnect?');
//         if (confirmUnconnect) {
//            $('#google').text('Google');
//            $('#statusConnectGoogle').text('Not connected');
//            const savedData = localStorage.getItem('yourLocalStorageKey');
//            const dataObject = JSON.parse(savedData);
//            dataObject.statusGoogle = 'Unconnected';
//            localStorage.setItem('yourLocalStorageKey', JSON.stringify(dataObject));
//            $('#statusConnectGoogle').removeClass('btn-success');
//            $('#statusConnectGoogle').addClass('btn-light');

//            const deleteGraphlQuery = `
//            mutation unlinkConnectedGoogle {
//             unlinkConnectGoogle(email: ${dataObject.email}) {
//                   email
//             }
//           }
//            `;

//            $.ajax({
//               url: 'http://localhost:3000/graphql',
//               method: 'POST',
//               contentType: 'application/json',
//               data: JSON.stringify({
//                  query: deleteGraphlQuery,
//                  variables: {
//                     ownerId: dataObject.owner.id
//                  }
//               }),
//               success: (res) => {
//                  console.log(res);
//               },
//               error: (err) => {
//                  console.log(err);
//               }
//            })
//         }
//      }
//   })
// });