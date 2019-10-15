class Engine {

	static get offset() { return 16 }

	static set position(xy) { this._position = xy }
	static get position () { this._position }

	static onmousemove(ev) {

		this.output.style.left = ev.clientX + this.offset  + 'px'
		this.output.style.top = ev.clientY + this.offset + 'px'
		this.output.innerHTML = ev.clientX + ', ' + ev.clientY
	}

	static onmouseleave(ev) { this.output.style.opacity = 0.4 }

	static onmouseenter(ev) { this.output.style.opacity = 1 }

	static init() {

		this.output = document.querySelector('output')
		document.onmousemove = this.onmousemove.bind(this)
		document.onmouseout = this.onmouseleave.bind(this)
		document.onmouseover = this.onmouseenter.bind(this)
		document.onkeydown
	}
}

Engine.init()