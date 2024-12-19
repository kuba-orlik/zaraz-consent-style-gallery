DROP TABLE IF EXISTS styles;

CREATE TABLE IF NOT EXISTS styles (id INTEGER PRIMARY KEY, name TEXT, css TEXT, author TEXT, approved BOOLEAN);

INSERT INTO styles (id, name, author, css, approved)
   VALUES (1, "Everything is red", 'Kuba', '.cf_modal > * {color: red}', 1),
          (2, "Rolling green hills", 'Another Kuba', '.cf_modal * {color: green}', 1),
	  (3, "I'm feeling blue", 'The same Kuba', '.cf_modal * {color: blue}', 1),
	  (4, "Why is the snow yellow", "Kubas love for React", '.cf_modal * {color: yellow}', 1),
	  (5, "CMP is at the bottom", "Kuba is back", '.cf_modal {    width: 100%;    max-width:none;    margin-bottom:0;}', 1);
