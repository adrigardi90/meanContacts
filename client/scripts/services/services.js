angular.module('mean-app').factory('MainService',['$http','$q','$auth','$window', function($http,$q,$auth,$window){

	function getData(){

		//auth
		this.newUser = function(user){
			var deferred = $q.defer();

			$auth.signup(user).then(function(res){
				console.log(res);
				deferred.resolve(res);
			}).catch(function(err){
				deferred.reject(err);
			});

			return deferred.promise;
		}

		//auth
		this.login = function(user){
			var deferred= $q.defer();
			$auth.login(user).then(function(res){
				console.log(res);
				deferred.resolve(res);
			}).catch(function(err){
				deferred.reject(err);
			});

			return deferred.promise;
		}

		//auth
		this.logout = function(){
			var deferred = $q.defer();
			$auth.logout().then(function(){				
				deferred.resolve();
			}).catch(function(err){
				deferred.reject(err);
			});


			return deferred.promise;
		}

		/*this.getUser = function(id){
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: 'http://localhost:3030/api/contact/' + id
			}).then(function success(res){
				deferred.resolve(res);
			}, function error(err){
				deferred.reject(err);
			});

			return deferred.promise;
		}
*/
	/*	this.updateUser = function(user, id){
			var deferred = $q.defer();

			$http({
				method: 'PUT',
				url: 'http://localhost:3030/api/contact/' + id,
				data: user
			}).then(function success(res){
				deferred.resolve(res);
			}, function error(err){
				deferred.reject(err);
			});

			return deferred.promise;
		}*/

		this.deleteUser = function(id){
			var deferred = $q.defer();
			$http({
				method: 'DELETE',
				url: 'http://localhost:3030/api/contact/' + id
			}).then(function success(res){
				deferred.resolve(res);
			}, function error(err){
				deferred.reject(err);
			});

			return deferred.promise;
		}


		this.updateInfo = function(id, user){
			var deferred = $q.defer();
			$http({
				method: 'PUT',
				url: 'http://localhost:3030/api/contact/' + id,
				data: user
			}).then(function success(res){
				deferred.resolve(res);
			}, function error(err){
				deferred.reject(err);
			});

			return deferred.promise;
		}

		this.addContact = function(id, contact){
			var deferred = $q.defer();
			$http({
				method: 'PUT',
				url: 'http://localhost:3030/api/contact/' + id,
				data: {contacts:contact}
			}).then(function success(res){
				deferred.resolve(res);
			}, function error(err){
				deferred.reject(err);
			});

			return deferred.promise;
		}

		this.getInfo = function(id){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'http://localhost:3030/api/contact/' + id
			}).then(function success(res){
				deferred.resolve(res);
			}, function error(err){
				deferred.reject(err);
			});

			return deferred.promise	
		}

		this.deleteContact = function(id, phone){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'http://localhost:3030/api/deletecontact/' + id + '/' + phone
			}).then(function success(res){
				deferred.resolve(res);
			}, function error(err){
				deferred.reject(err);
			});

			return deferred.promise;
		}

		this.getInfoContact = function(id, phone){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'http://localhost:3030/api/infocontact/' + id + '/' + phone
			}).then(function success(res){
				deferred.resolve(res);
			}, function error(err){
				deferred.reject(err);
			});

			return deferred.promise;
		}

	}

	return new getData();
}]);