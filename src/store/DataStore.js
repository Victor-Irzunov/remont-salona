import { makeAutoObservable } from 'mobx'

export default class DataStore {
	constructor() {
		this._dataZapisi = []
		
		makeAutoObservable(this)
	}

	setResDataZapisi(data) {
		this._resDataZapisi = data
	}
	
	get dataZapisi() {
		return this._dataZapisi
	}

}
