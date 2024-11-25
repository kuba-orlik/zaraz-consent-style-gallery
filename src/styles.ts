export type Style = { id: number; css: string; author: string; name: string }

export async function getStyles(db: D1Database): Promise<Style[]> {
	const { results } = await db.prepare('SELECT * FROM styles').all()
	return results as Style[]
}
