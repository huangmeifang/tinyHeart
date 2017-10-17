var dustObj = function () {
    this.x = [];
    this.y = [];
    this.amp = [];
    this.NO = [];
    this.alpha = 0;
};

dustObj.prototype.num = 30;
dustObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.x[i] = Math.random() * canWidth;
        this.y[i] = Math.random() * canHeight;
        this.amp[i] =  Math.random() * 15 + 20;
        this.NO[i] = Math.floor(Math.random() * 7);
    }
};

dustObj.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        this.alpha += deltaTime * 0.000018999;
        var l = Math.sin(this.alpha);
        var no = this.NO[i];
        ctx1.drawImage(dustPic[no], this.x[i] + l * this.amp[i], this.y[i])
    }
};