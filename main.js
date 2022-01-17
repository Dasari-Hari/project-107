function modelReady(){
    classifier.classify(gotResults);
  }
  
  function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
     
    }
  }
    