
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';

class State {
	constructor(prev) {
		this.laptimeM = 2;
		this.laptimeS = 10;
		this.raceLength = 20; //minutes
		this.literPerLap = 2.60;
		this.maxTank = 105; // capacity
		this.onChange = () => {};
		if (prev) {
			this.setState = prev.setState;
			this.laptimeM = prev.laptimeM;
			this.laptimeS = prev.laptimeS;
			this.raceLength = prev.raceLength;
			this.literPerLap = prev.literPerLap;
			this.maxTank = prev.maxTank;
			this.onChange = prev.onChange;
		}
		
		this.compute();
	}

	set(attr, value) {
		
		let v = value;
		if (typeof value === 'string') {
			if (value.indexOf('.') !== -1) {
				v = parseFloat(value);
			} else {
				v = parseInt(value, 10);
			}
		}
		console.log(`set attr ${attr} ${value} => ${v}`)
		if (!isNaN(v)) {
			this[attr] = v;
			this.compute();
			this.onChange();
		} else {
			console.error(`Try to set ${attr} to a value which is not a number`);
		}
	}
	compute() {
		this.laps = (this.raceLength * 60) / ((this.laptimeM * 60 + this.laptimeS) + 0.5) + 1;
		this.litersTotal = this.laps * this.literPerLap + 1.5;
		this.pitstopRequired = this.litersTotal / this.maxTank;
		this.possibleLapsOnTank = (this.maxTank / this.literPerLap) - 0.5;
	}
}

function useCalc() {
	const [state, setState] = useState(new State());
	useEffect(() => {
		state.onChange = () => setState(new State(state));
	}, [state]);
	return state;
}

function format(n) {
	return Math.floor(n);
}

function onChange(event, state) {
	console.log(state);
	state.set(event.target.name, event.target.value);
}

export const Calc = () => {
	const state = useCalc();
	return (
		<form class={style.form}>
			<div class="row">
				<div class="col-sm">
					<div class="container">
						<div class="form-group">
							<label>Lap time (minutes / seconds)</label>
							<div class="form-row">
								<div class="col">
									<input type="number" class="form-control" value={state.laptimeM} name="laptimeM" onChange={e => onChange(e, state)} />
								</div>
								<div class="col">
									<input type="number" class="form-control" value={state.laptimeS} name="laptimeS" onChange={e => onChange(e, state)} />
								</div>
							</div>
						</div>

						<div class="form-group">
							<label>Race length (minutes)</label>
							<input type="number" class="form-control" value={state.raceLength} name="raceLength" onChange={e => onChange(e, state)} />
						</div>
						<div class="form-group">
							<label>Consumption (liters/lap)</label>
							<input type="number" class="form-control" value={state.literPerLap} name="literPerLap" onChange={e => onChange(e, state)} />
						</div>
						<div class="form-group">
							<label>Max tank capacity (liters)</label>
							<input type="number" class="form-control" value={state.maxTank} name="maxTank" onChange={e => onChange(e, state)} />
						</div>
					</div>
				</div>
				<div class="col-sm">
					<div class="container">
						<div class="form-group">
							<label>Total fuel needed (liters)</label>
							<input type="number" class="form-control" value={format(state.litersTotal)} readOnly />
						</div>
						<div class="form-group">
							<label>Total Laps (with formation lap)</label>
							<input type="number" class="form-control" value={format(state.laps)} readOnly />
						</div>
						<div class="form-group">
							<label>Number of pit stop required</label>
							<input type="number" class="form-control" value={format(state.pitstopRequired)} readOnly />
						</div>
						<div class="form-group">
							<label>Possible laps on tank</label>
							<input type="number" class="form-control" value={format(state.possibleLapsOnTank)} readOnly />
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

