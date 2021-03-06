var ThenJS = require( 'thenjs' );
var count = 0;
ThenJS( function( defer ){
  count++;
  //defer( null, count );
    // 只要defer 的第一个参数不是false 就会执行fail函数
  defer( "error message!" );

}).then( function( defer, value ){
   count = ++value;
   console.log( count );
   defer( null, count );
}).fail( function( defer, err ){
  if( err ){
    console.log( err );
  }
});