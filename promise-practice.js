 function linker(param) {
	 return new Promise(function(resolve, reject) {
		 console.log("resolved linker");
		 resolve();
	 });
 }

 var promise1 = function() {
	 return new Promise(function(resolve, reject) {
		 console.log("resolved 1");
		 resolve("success 1");
	 });
 }

 var promise2 = function() {
	 return new Promise(function(resolve, reject) {
		 setTimeout(function() {
			 console.log("resolved 2");
			 resolve("success 2");
		 }, 3000);
	 });
 }

 var promise3 = function() {
	 return new Promise(function(resolve, reject) {
		 console.log("resolved 3");
		 resolve("success 3");
	 });
 }

 var promise4 = function() {
	 return new Promise(function(resolve, reject) {
		 console.log("resolved 4");
		 resolve("success 4");
	 });
 }

 var promise5 = function() {
	 return new Promise(function(resolve, reject) {
		 console.log("resolved 5");
		 resolve("success 5");
	 });
 }

 var finisher = function() {
	 return new Promise(function(resolve, reject) {
		 console.log("resolved finisher");
		 resolve();
	 });
 }

 //linker().then(promise1).then(promise2).then(promise3).then(promise4).then(promise5).then(finisher);
 Promise.all([linker(), promise1(), promise2(), promise3(), promise4(), promise5(), finisher()]).then(function() {
 	console.log("all done!");
 });













