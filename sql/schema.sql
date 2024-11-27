DROP TABLE IF EXISTS styles;

CREATE TABLE IF NOT EXISTS styles (id INTEGER PRIMARY KEY, name TEXT, css TEXT, author TEXT);

INSERT INTO styles (id, name, author, css)
   VALUES (1, "Everything is red", 'Kuba', '.cf_modal * {color: red}'),
          (2, "Rolling green hills", 'Another Kuba', '.cf_modal * {color: green}'),
	  (3, "I'm feeling blue", 'The same Kuba', '.cf_modal * {color: blue}'),
	  (4, "Why is the snow yellow", "Kubas love for React", '.cf_modal * {color: yellow}'),
	  (5, "CMP is at the bottom", "Kuba is back", '.cf_modal_container {
    display: grid;
    grid-template-rows: 1fr 400px;
    grid-template-columns: 1fr;
}

.cf_modal {
    grid-row: 2/3; 
    position: static!important; 
    max-width: 100vw; 
    box-shadow: -1px 2px 11px black; }');
