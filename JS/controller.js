app.controller("todoCont", function($scope) {
    $scope.task = "";
    $scope.tasks = [];

    $scope.addTask = function() {
        let taskObj = { title: $scope.task, status: false };
        if($scope.task==null || $scope.task=="") {
            //ERROR MESSAGE
        } else {
            $scope.tasks.push(taskObj);
            $scope.task = "";
        }
    }

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.tasks, function(task) {
            count += task.status ? 0 : 1;
        });
        return count;
    }

    $scope.removeTask = function(idx) {
        $scope.tasks.splice(idx,1);
    }

    $scope.clearAll = function() {
        $scope.tasks = []
    }

    $scope.clearCom = function() {
        $scope.tasks = $scope.tasks.filter(function(task) {
            return !task.status;
        });
    }
});