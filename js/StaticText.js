const STATIC_TEXT_CENTRE = -1;

class StaticText extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(text, x, y, font, fontSize, colour, pointFlag)
    {
        super(1000); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.text = text;
        this.x = x;
        this.y = y;
        this.font = font;
        this.fontSize = fontSize;
        this.colour = colour;
        this.pointFlag = pointFlag;
        

        ctx.font = this.fontSize + "px " + this.font;
        this.width = ctx.measureText(this.text).width;
        if (this.x === STATIC_TEXT_CENTRE)
        {
            this.x = (canvas.width - this.width) / 2;
        }
    }

    updateState()
    {
         if (this.colour == "white"){
             this.colour = "green";
         } else if(this.colour == "green"){
            this.colour = "white"
         }

         if(this.pointFlag == 1){
             this.text++;
         } else if(this.pointFlag ==2){
            this.text--;
         }
    }

    setText(text)
    {
        this.text = text;
    }

    setValue(value){
        this.text = this.text + value;
    }

    centerText()
    {
        this.width = ctx.measureText(this.text).width;
        this.x = (canvas.width - this.width) / 2;
    }

    render()
    {
        ctx.fillStyle = this.colour;
        ctx.fillText(this.text, this.x, this.y);
    }
}