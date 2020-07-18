export type Piece = number[][];

const piece1: Piece = [
	[1, 0, 0],
	[1, 1, 0],
	[0, 1, 1],
	[0, 0, 1]
];

export class Grid {
	private grid: number[][];

	private height = 12;
	private width = 11;

	constructor() {
		if (!this.grid) this.build();
		console.table(this.grid);
		this.place(piece1, [0, 0]);
	}

	build() {
		this.grid = [];
		for (let i = 0; i < this.height; i++) {
			this.grid[i] = [];
			for (let j = 0; j < this.width; j++) {
				this.grid[i][j] = i ** j;
			}
		}
	}

	place(piece: Piece, [x, y]: [number, number]) {
		const root = this.grid[x][y];

		console.log(piece[0].length, piece.length);

		if (x + piece[0].length <= this.width && y + piece.length <= this.height) {
			// for (let [a, b, c] of piece) {
			// 	console.log(a, b, c);
			// }

			for (let i = x; i < piece.length; i++) {
				for (let j = y; j < piece[0].length; j++) {
					console.log(this.grid[i][j]);
				}
			}
		} else {
			console.error('out of bounds');
		}
		// console.log(root, piece);
	}
}
