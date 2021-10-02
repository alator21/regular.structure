import {Shape} from "./Shape";

export class Rectangle extends Shape {
	private readonly _topLeftCorner: [x: number, y: number];
	private readonly _width: number;
	private readonly _height: number;


	constructor(topLeftCorner: [x: number, y: number], width: number, height: number) {
		super();
		this._topLeftCorner = topLeftCorner;
		this._width = width;
		this._height = height;
	}


	get topLeftCorner(): [x: number, y: number] {
		return this._topLeftCorner;
	}

	get width(): number {
		return this._width;
	}

	get height(): number {
		return this._height;
	}
}
