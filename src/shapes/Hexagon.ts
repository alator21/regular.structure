import {Shape} from "./Shape";

export class Hexagon extends Shape {
	private readonly _points: Array<[x: number, y: number]>;


	constructor(points: Array<[x: number, y: number]>) {
		super();
		if (points.length !== 6){
			throw new Error('6 points are needed for a hexagon!');
		}
		this._points = points;
	}


	get points(): Array<[x: number, y: number]> {
		return this._points;
	}
}
