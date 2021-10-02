import {Shape} from "./Shape";

export class Circle extends Shape {
	private readonly _center: [x: number, y: number];
	private readonly _radius: number;


	constructor(center: [x: number, y: number], radius: number) {
		super();
		this._center = center;
		this._radius = radius;
	}


	get center(): [x: number, y: number] {
		return this._center;
	}

	get radius(): number {
		return this._radius;
	}
}
