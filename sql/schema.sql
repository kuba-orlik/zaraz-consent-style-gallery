DROP TABLE IF EXISTS styles;

CREATE TABLE IF NOT EXISTS styles (id INTEGER PRIMARY KEY, name TEXT, css TEXT, author TEXT);

INSERT INTO styles (id, name, author, css)
   VALUES (1, "Everything is red", 'Kuba', '* {color: red}'),
          (2, "Rolling green hills", 'Another Kuba', '*{color: green}'),
	  (3, "I'm feeling blue", 'The same Kuba', '*{color: blue}'),
	  (4, "Why is the snow yellow", "Kubas love for React", '*{color: yellow}');
