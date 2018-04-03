var app=angular.module("app",[]);
app.controller("ctrl",($scope,$http,$timeout)=>{
  $scope.selectedQ=0;
  $scope.questions=[];
    $http.get("./sorular.json").then((res)=>{
      $scope.questions=res.data;
    });

    $scope.checkAnswer=(answer)=>{
      if(answer==$scope.questions[$scope.selectedQ].true){
        alert("Doğru")
        $scope.nextQuestion();
      }
      else alert("yanlış");
    };
    $scope.nextQuestion=()=>{
      if($scope.selectedQ+1<$scope.questions.length){
        $scope.selectedQ++;
      }
    };
    $scope.prevQuestion=()=>{
      if($scope.selectedQ>0){
        $scope.selectedQ--;
      }
    };
});
