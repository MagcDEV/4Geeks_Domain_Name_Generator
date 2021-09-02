//write your code here
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let domain = ['.com', '.ve']


for (var h=0;h<pronoun.length;h++){
  var prono = pronoun[h];
  for (var s=0;s<adj.length;s++){
    var ad = adj[s];
    for (var p=0;p<noun.length;p++){
      var nou = noun[p];
      for (var e=0;e<domain.length;e++){
        var domai = domain[e];
        console.log(prono+ad+nou+domai);        
      }
    }
  }
}


