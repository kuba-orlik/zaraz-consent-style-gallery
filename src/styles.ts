export type Style = { id: number; css: string; author: string; name: string }

export async function getStyles(db: D1Database): Promise<Style[]> {
	const time_start = Date.now()
	const { results, meta } = await db
		.prepare('SELECT * FROM styles WHERE approved=1')
		.all()
	console.log('SQL QUERY TOOK', Date.now() - time_start)
	console.log(JSON.stringify({ meta }))
	return results as Style[]
}

export async function createStyle(
	db: D1Database,
	{ name, css, author }: Record<'name' | 'css' | 'author', string>,
): Promise<Style[]> {
	const { results, meta } = await db
		.prepare(
			'INSERT INTO styles (name, css, author, approved) VALUES (?,?,?,?)',
		)
		.bind(name, css, author, 0)
		.run()

	return results as Style[]
}
