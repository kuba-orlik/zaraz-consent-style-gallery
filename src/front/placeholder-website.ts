export const placeholder = () => /* HTML */ `<style>
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
	}

	p {
		display: none;
	}

	main {
		background-color: #ccc;
		display: grid;
		grid-template-areas:
			'nav nav nav'
			'left center right'
			'foot foot foot';

		min-height: 100vh;
		grid-template-rows: 1fr 10fr 80px;
	}

	nav {
		width: 100%;
		background-color: #0000001f;
		grid-area: nav;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		column-gap: 40px;
		row-gap: 20px;
		padding: 20px;

		logo {
			background-color: #0000001f;
			border-radius: 50%;
			height: 100px;
			width: 100px;
			margin-top: auto;
			margin-bottom: auto;
		}

		ul {
			display: flex;
			padding-left: 0;
			flex-flow: row wrap;
			column-gap: 20px;
			row-gap: 10px;
			margin-top: auto;
			margin-bottom: auto;

			li {
				width: 80px;
				height: 30px;
				list-style: none;
				background-color: #0000001f;
			}
		}
	}

	footer {
		grid-area: foot;
		background-color: #0000001f;
		width: 100%;
		color: gray;
		text-align: center;
		padding: 8px 16px;
	}

	article {
		display: flex;
		flex-flow: row wrap;
		gap: 20px;
		margin-top: 20px;
		padding: 20px;
		justify-content: center;

		block {
			background-color: #0000001f;
			width: 300px;
			height: 200px;
			display: block;
		}
	}
</style>
<body>
	<main>
		<nav>
			<logo></logo>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</nav>
		<article>
			<block></block>
			<block></block>
			<block></block>
			<block></block>
			<block></block>
			<block></block>
			<block></block>
			<block></block>
			<block></block>
			<block></block>
		</article>
		<footer>© ${new Date().getFullYear()}</footer>
	</main>
</body>
`
