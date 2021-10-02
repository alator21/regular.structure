import {Shape} from "./Shape";
import {Point} from "./Point";

export class Circle extends Shape {
	private readonly _center: Point;
	private readonly _radius: number;


	constructor(center: Point, radius: number) {
		super();
		this._center = center;
		this._radius = radius;
	}


	get center(): Point {
		return this._center;
	}

	get radius(): number {
		return this._radius;
	}
}
