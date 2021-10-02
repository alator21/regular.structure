import {Shape} from "./Shape";
import {Point} from "./Point";

export class Rectangle extends Shape {
	private readonly _topLeftCorner: Point;
	private readonly _width: number;
	private readonly _height: number;


	constructor(topLeftCorner: Point, width: number, height: number) {
		super();
		this._topLeftCorner = topLeftCorner;
		this._width = width;
		this._height = height;
	}


	get topLeftCorner(): Point {
		return this._topLeftCorner;
	}

	get width(): number {
		return this._width;
	}

	get height(): number {
		return this._height;
	}
}
