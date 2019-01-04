class StaticImage extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image, x, y, width, height, player)
    {
        super(1); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.flag = true;
        this.player = player
    }

    updateState()
    {   
        if(this.player == false){
         this.y+=1;
         if (this.y > canvas.height)
         {
            this.y = 0;
            this.randomSet();
         }
        }   
    }

    render()
    {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    movePlayer(positionX){

        var actualCarX = this.x
        if(positionX <= (canvas.width / 2)){ //go left
            if(actualCarX == 235){
                this.x = 110;
            }else if(actualCarX == 360){
                this.x = 235;
            }
        }else{//go right
            if(actualCarX == 235){
                this.x = 360;
            }else if(actualCarX == 110){
                this.x = 235;
            }
        }

       /* if(this.flag == true){
            this.flag = false
            this.x=330
        }else{
            this.flag = true
            this.x=130
        }*/
    }

    randomSet(){
        var side = Math.floor((Math.random()*3))

        switch (side){
            case 1:
                this.x = 110
                break
            case 2:
                this.x = 235
                break
            case 3:
                this.x = 360
                break
            
        }

    }
}