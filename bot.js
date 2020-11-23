const fs = require('fs')
const Twit = require('twit')

const T = new Twit({
	// Type your personal keys and tokens
	  consumer_key:         '',
	  consumer_secret:      '',
	  access_token:         '',
    access_token_secret:  '',
    timeout_ms: 60*1000,
    strictSSL: true,
})

// Check if authorization works

console.log('Authorization works');

const texts = fs.readFileSync(__dirname + '/texts.txt', 'utf8')

let tweets = texts.split(/\n\n/)
tweets = tweets.map(el => el.split('\n').slice(1).filter(el => el.length))

setInterval(tweetIt, 1000*60*60)
tweetIt();

function tweetIt() {

	const oneTweet = tweets[Math.floor(Math.random() * songs.length)]
	let phrase = Math.floor(Math.random() * (song.length - 1))

	let l = 0
	let first = true
	let str = ''

	while (l <= 280 && phrase < phrase.length) {
		let p = oneTweet[phrase]
		if (!p) {
		  return;
		}

		l += p.length
	
		if (!first) {
			l += 1
			str += '\n'
		}

		if (l <= 280) {
			str += p 
		}

		phrase++
		first = false
	}

	str = str.replace(/,?\n$/,'')

	let tweet = {
		status: oneTweet[phrase]
	}

	T.post('statuses/update', tweet, function(err, data, response) {
		console.log(data)
	})
}

process.on('uncaughtException', function tweetIt(){})
