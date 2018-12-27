/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class ScrollingBackgroundImage extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image, updateStateMilliseconds,v)
    {
        super(updateStateMilliseconds); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.image = image;

        this.x = canvas.height;
        this.v = v;

    }

    updateState()
    {   
        this.x-=this.v;
        if (this.x <= 0)
        {
            this.x = canvas.height;
        }
    }

    render()
    {
        ctx.drawImage(this.image, 0, 0 - this.x, canvas.width, canvas.height);
        ctx.drawImage(this.image, 0, canvas.height - this.x, canvas.width, canvas.height);

        console.log(canvas.height - this.x);

    }

    setV(v){
        this.v = v;
    }


}
