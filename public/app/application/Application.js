angular.module('covidemergencyfundaltApp').factory('Application', function($resource, $q, $http) {

  var applicationResource = $resource('/covidemergencyfundalt/api/application',{}, {


      save :{
          method: 'POST',
          url: '/covidemergencyfundalt/api/application/save'
      }
      //,
      // getCollegeCount: {
      //     method: 'GET',
      //     url: '/covidemergencyfundalt/api/college/getCollegeCount',
      //     isArray: true
      // },
      // getCollegeAppointments: {
      //     method: 'GET',
      //     url: '/covidemergencyfundalt/api/college/getCollegeAppointments/:college',
      //     isArray: true,
      //     parameters : {
      //         college: '@college'
      //     }
      // },
      //
      // getStudentApplication : {
      //     method:  'GET',
      //     url: '/covidemergencyfundalt/api/getStudentApplication/:studentId',
      //     parameters :{
      //         studentID : '@studentId'
      //     },
      //     isArray : false
      // },
      // getLaptopApplications: {
      //     method: 'GET',
      //     url: '/covidemergencyfundalt/api/getLaptopApplications',
      //     isArray: true
      // },
      // getHotSpotApplications: {
      //     method: 'GET',
      //     url: '/covidemergencyfundalt/api/getHotSpotApplications',
      //     isArray: true
      // }

  });
  return applicationResource;
});