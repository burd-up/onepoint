export const eventSwipe = {
    startX: 0,
    endX: 0,
    isSwipe: function () {
        if(this.startX === this.endX){
            return 'null'
        } else if (Math.abs(this.startX-this.endX)>20 && this.startX < this.endX){
            return 'right'
        } else if (Math.abs(this.startX-this.endX)>20 && this.startX > this.endX){
            return 'left'
        }
    }
}