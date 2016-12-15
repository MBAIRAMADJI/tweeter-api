// TWITTER_API_KEY="97Szrk41In8wVfMpbCgrSRONM"
// TWITTER_SECRET_KEY="asFN6PR7710KfWyEEzjSdUuyT1bd49aQrf23gOM2fEuHN9Cn2I"
// TWITTER_ACCESS_TOKEN="802961122269790208-WuB1gLUsx4aGgscTwlwckA2nybJqzWD"
// TWITTER_ACCESS_TOKEN_SECRET="Wf0t8gvFzKGuoOkcmOl5o3rsPXfU7NacReefROlri4S0W"
// TWITTER_OWNER_ID="802961122269790208"

const cb = new Codebird;

cb.setConsumerKey("97Szrk41In8wVfMpbCgrSRONM", "asFN6PR7710KfWyEEzjSdUuyT1bd49aQrf23gOM2fEuHN9Cn2I");
cb.setToken("802961122269790208-WuB1gLUsx4aGgscTwlwckA2nybJqzWD", "Wf0t8gvFzKGuoOkcmOl5o3rsPXfU7NacReefROlri4S0W");

let params = {
    q: "javascript"
};

cb.__call(
  "search_tweets",
  {
    q: "javascript"
  },
  function (reply) {      
});

cb.__call(
  "statuses_update",
  {
    status: "I'm tweetiiiiin"
  },
  function (reply) {

});

//***************** ET AVEC UNE PROMISE *****************//
// const myPromise = function (api, params) {
//   return new Promise (
//     function ( resolve, reject ) {
//       cb.__call(
//         api,
//         params,
//         function (reply) {
//           resolve(reply);
//       });
//   });
// }

// const RSSFeed = document.getElementById('field');

// myPromise("search_tweets", params).then(function (data) {
//   let tweets = data.statuses;
//   tweets.forEach( function (tweet) {
//     $('#field').append(tweet.text + '<br /><br />');
//   })
// });