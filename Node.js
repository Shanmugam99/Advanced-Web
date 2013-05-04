//1
var os = require('os');

var message = 'This script is running on Node.js ' + process.version +
  		' on a ' + os.type() + '-based operating system.';
//2
console.log(message);

a

var a

a + 5

a = 5

a + 5

a

a = a + 5

a

b = 1

b++

b++

++b

_

os = require('os')

os.type

os.type()

global

function hello (name) {
  return 'Hello ' + name;
}

hello('Joe');

^C ^C
^D
process.exit()

//3
var os = require('os');

var message = 'This script runs on Node.js ' + process.version +
  		' on a ' + os.type() + '-based operating system.';

console.log(message);

//4
var os = require('os');

var message = 'This script is running on Node.js ' + process.version +
  		' on a ' + os.type() + '-based operating system.';

console.log(message);

//5
var parser = require('node-markdown');

var html = parser.Markdown('Using **markdown** helps you focus on writing, *not* on markup.');

console.log(html);

//6
var argv = require('optimist').argv;

for (var i=0; i < argv.times; i++) {
  console.log(argv._[0] + ' on loop number ' + (i + 1));
}

//7
var rl = require('readline');

var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("How many servings of fruits and vegetables do you eat each day? ", function  (servings) {
  var message = '';

	if (servings < 5) {
		message = "Since you're only eating " + servings + 
		" right now, you might want to start eating " + (5 - servings) + " more.";
	} else {
		message = "Excellent, your diet is on the right track!";
	}
	
	console.log(message);
	
  process.exit();
});

//8
var argv = require('optimist').argv,
  $ = require('jquery'),
	fs = require('fs');

var file = argv._[0];

var html = fs.readFileSync(file, 'UTF-8');

$(html).find('p').each(function(index) {
	var content = $(this).html();

	console.log('Paragraph ' + (index + 1) + ': ' + content);
});

//9
function messy_javascript () {
  console.log("This is a line with " +  "good" + " concatenation.");
}

//10
function messy_javascript () {
  "This is a line with " "bad" " concatenation.";
}

//11
var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<html><body>Home, URL was: ' + request.url + '</body></html>');
}).listen(3000, 'localhost');

console.log('Server running at http://localhost:3000/');

//12
var connect = require('connect');

var app = connect()
  .use(connect.bodyParser())
	.use(connect.static('public'))
	.use(function (req, res) {
		if (req.url === '/process') {
			res.end(req.body.name + ' would repeat ' + req.body.repeat + ' times.');
		} else {
			res.end("Invalid Request");
		}
	})
	.listen(3000);

//13
var connect = require('connect');

var app = connect()
  .use(function (req, res) {
		res.end("Forbidden");
	})
	.listen(3000);

//14
var connect = require('connect');

var my_data = {
  'fruit': 'apple',
	'number': '555-1212',
	'color': 'purple'
};

var app = connect()
	.use(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(my_data));
	})
	.listen(3000);

//15
var express = require('express');

var app = express.createServer();

app.get('/recipes', function(req, res){
  res.send('<h1>All Recipes</h1>');
});

app.get('/recipes/:title', function(req, res) {
 res.send('<h1>' + req.params.title + '</h1>');
});

app.get('/*', function(req, res) {
 res.send('if all else fails, we hit this page');
});

app.listen(3000);

//16
var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/recipes', function(req, res){
  res.render('layout.ejs', {
    title: 'Clever Kitchens - Recipes', 
    body: '<h1>All Recipes</h1>'
  });
});

app.get('/recipes/:title', function(req, res) {
 res.send('<h1>' + req.params.title + '</h1>');
});

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);

//17
var express = require('express');

var app = express.createServer();

var recipes = require('./data/recipes').data;

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/recipes', function(req, res){
  res.render('recipes.ejs', {
    title: 'Clever Kitchens - Recipe List',
    recipes: recipes
  });
});

app.get('/recipes/:title', function(req, res) {
  res.send('<h1>' + req.params.title + '</h1>');
});

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);

//18
var express = require('express');

var app = express.createServer();

var recipes = require('./data/recipes').data;

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/recipes', function(req, res){
  res.render('recipes.ejs', {
    title: 'Clever Kitchens - Recipe List',
    recipes: recipes
  });
});

app.get('/recipes/:title', function(req, res) {
  var data = recipes.filter(function  (recipe) {
    return (recipe.url === req.params.title);
  });

  if (data.length > 0) {
    data = data[0];
    data.title = 'Clever Kitchens - Recipe';

    res.render('recipe.ejs', data);
  } else {
    res.status(404).render('error.ejs', {title: 'Recipe Not Found'});
  }
});

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);

//19
var recipes = require('./data/recipes').data;

exports.list = function(req, res){
  res.render('recipes.ejs', {
    title: 'Clever Kitchens - Recipe List',
    recipes: recipes
  });
};

exports.single = function(req, res) {
  var data = recipes.filter(function  (recipe) {
    return (recipe.url === req.params.title);
  });

  if (data.length > 0) {
    data = data[0];
    data.title = 'Clever Kitchens - Recipe';

    res.render('recipe.ejs', data);
  } else {
    res.status(404).render('error.ejs', {title: 'Recipe Not Found'});
  }
};

//20
var express = require('express');

var app = express.createServer();

var recipes = require('./recipes');

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/recipes', recipes.list);
app.get('/recipes/:title', recipes.single);

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

//21
var recipes = require('./data/recipes').data;

exports.list = function(req, res){
  res.render('recipes.ejs', {
    title: 'Clever Kitchens - Recipe List',
    recipes: recipes
  });
};

exports.single = function(req, res) {
  var data = recipes.filter(function  (recipe) {
    return (recipe.url === req.params.title);
  });

  if (data.length > 0) {
    data = data[0];
    data.title = 'Clever Kitchens - Recipe';

    res.render('recipe.ejs', data);
  } else {
    res.status(404).render('error.ejs', {title: 'Recipe Not Found'});
  }
};

exports.suggest = function(req, res) {
  res.render('suggest_result.ejs', {
    title: 'Clever Kitchens - Thanks!',
    name: req.body.name,
    ingredients: req.body.ingredients,
    directions: req.body.directions
  });
};

/22
var express = require('express');

var app = express.createServer();
app.use(express.bodyParser());

var recipes = require('./recipes.js');

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/recipes', recipes.list);

app.get('/recipes/suggest', function(req, res) {
  res.render('suggest.ejs', {title: 'Suggest a Recipe'});
});

app.post('/recipes/suggest', recipes.suggest);

app.get('/recipes/:title', recipes.single);

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);

//23
var io = require('socket.io'),
  connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var socket = io.listen(app);

//24
var io = require('socket.io'),
  connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chat_room.sockets.on('connection', function (socket) {  
  chat_room.sockets.emit('entrance', {message: 'A new chatter is online.'});
});

//24
var io = require('socket.io'),
  connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chat_room.sockets.on('connection', function (socket) {
  socket.emit('entrance', {message: 'Welcome to the chat room!'});

  socket.on('disconnect', function  () {
    chat_room.sockets.emit('exit', {message: 'A chatter has disconnected.'});
  });

  chat_room.sockets.emit('entrance', {message: 'A new chatter is online.'});
});

//25
var io = require('socket.io'),
  connect = require('connect');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chat_room.sockets.on('connection', function (socket) {
  socket.emit('entrance', {message: 'Welcome to the chat room!'});

  socket.on('disconnect', function  () {
    chat_room.sockets.emit('exit', {message: 'A chatter has disconnected.'});
  });

  socket.on('chat', function  (data) {
    chat_room.sockets.emit('chat', {message: '# ' + data.message});
  });

  chat_room.sockets.emit('entrance', {message: 'A new chatter is online.'});
});

//26
var io = require('socket.io'),
  connect = require('connect'),
  chatter = require('chatter');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chatter.set_sockets(chat_room.sockets);

chat_room.sockets.on('connection', function (socket) {
  chatter.connect_chatter({
    socket: socket,
    username: socket.id
  });
});

//27 CHATROOOM
<html>
<head>
<script src="http://localhost:3000/socket.io/socket.io.js"></script>
<script src="jquery-1.7.2.min.js"></script>
<script type="text/javascript" charset="utf-8">
jQuery(document).ready(function () {
  var log_chat_message = function  (message, type) {
		var li = jQuery('<li />').text(message);
		
		if (type === 'system') {
			li.css({'font-weight': 'bold'});
		} else if (type === 'leave' || type === 'error') {
			li.css({'font-weight': 'bold', 'color': '#F00'});
		}
				
		jQuery('#chat_log').append(li);
	};

	var socket = io.connect('http://localhost:3000');

	socket.on('entrance', function  (data) {
		log_chat_message(data.message, 'system');
	});

	socket.on('exit', function  (data) {
		log_chat_message(data.message, 'leave');
	});

	socket.on('chat', function  (data) {
		log_chat_message(data.message, 'normal');
	});

	socket.on('error', function  (data) {
		log_chat_message(data.message, 'error');
	});

	jQuery('#chat_box').keypress(function (event) {
		if (event.which == 13) {
			socket.emit('chat', {message: jQuery('#chat_box').val()});
			jQuery('#chat_box').val('');
		}
	});
});

</script>
<style type="text/css" media="screen">
	div#chatroom {
		display: block;
		height: 300px;
		border: 1px solid #999;
		overflow: auto;
		width: 100%;
		margin-bottom: 10px;
		position: relative;
	}

	ul#chat_log {
		list-style: none;
		position: absolute;
		bottom: 0px;
	}

	input#chat_box {
		width: 99%;
	}
</style>
</head>
<body>

	<div id="chatroom">
		<ul id="chat_log">
		</ul>
	</div>

	<input type="text" name="chat_box" value="" id="chat_box" placeholder="type to chat..." />

</body>
</html>

//BACKEND
var wp_auth = require('wordpress-auth').create('http://enter/url/here',
  'LOGGED_IN_KEY',
  'LOGGED_IN_SALT',
  'enter host here',
  'enter username here',
  'enter password here',
  'enter database here',
  'enter table prefix here'
);


var io = require('socket.io'),
  connect = require('connect'),
  chatter = require('chatter');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chatter.set_sockets(chat_room.sockets);

chat_room.sockets.on('connection', function (socket) {

  wp_auth.checkAuth(socket.handshake).on( 'auth', function  (auth_is_valid, user_id) {
    if (!auth_is_valid) {
      chatter.failure(socket);
    } else {
      wp_auth.db.query("select meta_value from wp_usermeta where meta_key = 'nickname' and user_id = '" + user_id + "'").on('row', function  (row) {
        chatter.connect_chatter({
          socket: socket,
          all_sockets: chat_room.sockets,
          username: row.meta_value
        });
      });
    }
  });  
});

//28 Drupol CHATROOM
<html>
<head>
<script src="http://localhost:3000/socket.io/socket.io.js"></script>
<script src="jquery-1.7.2.min.js"></script>
<script type="text/javascript" charset="utf-8">
jQuery(document).ready(function () {
  var log_chat_message = function  (message, type) {
		var li = jQuery('<li />').text(message);
		
		if (type === 'system') {
			li.css({'font-weight': 'bold'});
		} else if (type === 'leave' || type === 'error') {
			li.css({'font-weight': 'bold', 'color': '#F00'});
		}
				
		jQuery('#chat_log').append(li);
	};

	var socket = io.connect('http://localhost:3000');

	socket.on('entrance', function  (data) {
		log_chat_message(data.message, 'system');
	});

	socket.on('exit', function  (data) {
		log_chat_message(data.message, 'leave');
	});

	socket.on('chat', function  (data) {
		log_chat_message(data.message, 'normal');
	});

	socket.on('error', function  (data) {
		log_chat_message(data.message, 'error');
	});

	jQuery('#chat_box').keypress(function (event) {
		if (event.which == 13) {
			socket.emit('chat', {message: jQuery('#chat_box').val()});
			jQuery('#chat_box').val('');
		}
	});
});

</script>
<style type="text/css" media="screen">
	div#chatroom {
		display: block;
		height: 300px;
		border: 1px solid #999;
		overflow: auto;
		width: 100%;
		margin-bottom: 10px;
		position: relative;
	}

	ul#chat_log {
		list-style: none;
		position: absolute;
		bottom: 0px;
	}

	input#chat_box {
		width: 99%;
	}
</style>
</head>
<body>

	<div id="chatroom">
		<ul id="chat_log">
		</ul>
	</div>

	<input type="text" name="chat_box" value="" id="chat_box" placeholder="type to chat..." />

</body>
</html>

//BACKEND
var drupal = require('drupal'), 
  connect = require('connect'),
  io = require('socket.io'),
  chatter = require('chatter'),
  cookie = require('cookie');

var app = connect().use(connect.static('public')).listen(3000);
var chat_room = io.listen(app);

chatter.set_sockets(chat_room.sockets);

drupal.db.connect({
  host: 'add host here',
  user: 'add username here',
  password: 'add password here',
  database: 'add database here'
});

chat_room.sockets.on('connection', function (socket) {

  var cookies = cookie.parse(socket.handshake.headers.cookie);

  var found_session = false;

  Object.keys(cookies).forEach(function (key) {
    if (key.indexOf('SESS') === 0) {
      found_session = cookies[key];
    }    
  });
  
  if (found_session === false) {
    chatter.failure(socket);
  } else {
    drupal.user.session_load(found_session, function  (error, result) {
      if (result === null) {
        return false;
      }
      
      drupal.user.load(result.uid, function  (error, row) {
        if (row === null) {
          chatter.failure(socket);
        } else {
          chatter.connect_chatter({
            socket: socket,
            all_sockets: chat_room.sockets,
            username: row.name
          });
        }
      });

    });
  }

});

