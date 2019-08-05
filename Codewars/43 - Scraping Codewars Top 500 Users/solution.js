// Codewars Link: https://www.codewars.com/kata/581c06b95cfa838603000435

// You should get and parse the html of the codewars leaderboard page.

// You can use Nokogiri(Ruby) or BeautifulSoup(Python) or CheerioJS(Javascript).

// For Javascript: Return a Promise resolved with your 'Leaderboard' Object!

// You must meet the following criteria:

// Return a 'Leaderboard' object with a position property. ``` Leaderboard#position should contain 500 'User' objects. Leaderboard#position[i] should return the ith ranked User(1 based index). ```
// Each User should have the following properties:

// User#name    # => the user's username, not their real name
// User#clan    # => the user's clan, empty string if empty clan field
// User#honor   # => the user's honor points as an integer
// Ex:

//   an_alien = leaderboard.position[3]   # => #<User:0x3124da0 @name="myjinxin2015", @clan="China Changyuan", @honor=21446>
//   an_alien.name                        # => "myjinxin2015"
//   an_alien.clan                        # => "China Changyuan"
//   an_alien.honor                       # => 21446


const request = require('request');
const cheerio = require('cheerio');
const URL = 'https://www.codewars.com/users/leaderboard';

function solution() {
  let leaderboard = { position: [] };

  const a = new Promise(function(resolve, reject){
    request(URL, function (error, response, html) {
      const $ = cheerio.load(html);
      
      $('.leaderboard tr').each(function(index, item){
        if(index !== 0) {
          let honor = $(item).children('td').eq(3).text();
          let commaIndex = honor.indexOf(',');
          honor = honor.slice(0, commaIndex) + honor.slice(commaIndex + 1);
          
          leaderboard.position[index] = {};
          leaderboard.position[index]['name'] = $(item).data('username');
          leaderboard.position[index]['clan'] = $(item).children('td').eq(2).text();
          leaderboard.position[index]['honor'] = Number(honor);        
        }

      });
      
      resolve(leaderboard);
    });
  });
  
  return a.then(data => data);
}