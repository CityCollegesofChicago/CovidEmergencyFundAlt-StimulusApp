/**
 * Created by nnaeednamrod on 2/18/17.
 */
angular.module('covidemergencyfundaltApp').value('Toastr',toastr);

angular.module('covidemergencyfundaltApp').factory('Notifier', function(Toastr)
{
	return {
		notify: function(msg) {
			Toastr.success(msg);
			console.log(msg);
		},
		error: function(msg){
			Toastr.error(msg);
			console.log(msg);
		}
	};
});