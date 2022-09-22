
export function getPath(position: Position, a: number) {

    // let a = 50;

    let H = Math.abs(position.p1.y - position.p2.y)
    let W = Math.abs(position.p1.x - position.p2.x)

    // let PX = [position.p1.x-a, position.p1.x, position.p1.x+W/2, position.p2.x, position.p2.x+a]
    // let PY = [position.p1.y-a, position.p1.y, position.p1.y+W/2, position.p2.y, position.p2.y+a]
    // console.log(PX,PY)    

    let ST1 = { x: 0, y: 0 };
    let ST2 = { x: 0, y: 0 };

    let PT1 = { x: 0, y: 0 };
    let PT2 = { x: 0, y: 0 };

    if (position.p1.vx > 0) {
        PT1.y = position.p1.y
        if (position.p2.vx > 0) {

            ST2.x = position.p2.x + a
            ST2.y = position.p2.y
            PT1.x = position.p2.x + a
            // console.log("x1+ x2+")

        } else if (position.p2.vx < 0) {

            PT1.x = position.p1.x + W / 2
            PT2.x = position.p1.x + W / 2
            PT2.y = position.p2.y
            // console.log("x1+ x2-")

        }
        if (position.p2.vy > 0) {

            PT1.x = position.p2.x
            // console.log("x1+ y2+")

        } else if (position.p2.vy < 0) {

            PT1.x = position.p1.x + W / 2
            PT2.x = position.p1.x + W / 2
            PT2.y = position.p2.y + a
            ST2.x = position.p2.x
            ST2.y = position.p2.y + a
            // console.log("x1+ y2-")

        }
    } else if (position.p1.vx < 0) {
        PT1.y = position.p1.y
        ST1.x = position.p1.x - a
        ST1.y = position.p1.y

        if (position.p2.vx > 0) {

            PT1.x = position.p1.x - a
            PT1.y = position.p1.y + H / 2
            PT2.x = position.p2.x + a
            PT2.y = position.p1.y + H / 2
            ST2.x = position.p2.x + a
            ST2.y = position.p2.y
            // console.log("x1- x2+")

        } else if (position.p2.vx < 0) {

            PT1.x = position.p1.x - a
            PT1.y = position.p2.y
            // console.log("x1- x2-")

        }
        if (position.p2.vy > 0) {

            PT1.x = position.p1.x - a
            PT1.y = position.p2.y + a
            ST2.x = position.p2.x
            ST2.y = position.p2.y + a
            // console.log("x1- y2+")

        } else if (position.p2.vy < 0) {

            PT1.x = position.p1.x - a
            PT1.y = position.p1.y + H / 2
            PT2.x = position.p2.x
            PT2.y = position.p1.y + H / 2

            // console.log("x1- y2-")
        }
    }

    if (position.p1.vy > 0) {
        PT1.x = position.p1.x

        if (position.p2.vx > 0) {
            PT1.y = position.p1.y + H / 2
            PT2.x = position.p2.x + a
            PT2.y = position.p1.y + H / 2
            ST2.x = position.p2.x + a
            ST2.y = position.p2.y

            // console.log("y1+ x2+")

        } else if (position.p2.vx < 0) {
            PT1.y = position.p2.y
            // console.log("y1+ x2-")

        }
        if (position.p2.vy > 0) {
            PT1.y = position.p2.y + a
            ST2.y = position.p2.y + a
            ST2.x = position.p2.x
            // console.log("y1+ y2+")

        } else if (position.p2.vy < 0) {
            PT1.y = position.p1.y + H / 2
            PT2.x = position.p2.x
            PT2.y = position.p1.y + H / 2
            // console.log("y1+ y2-")

        }
    } else if ((position.p1.vy < 0)) {
        ST1.x = position.p1.x
        ST1.y = position.p1.y - a
        PT1.y = position.p1.y - a
        if (position.p2.vx > 0) {
            PT1.x = position.p2.x + a
            ST2.x = position.p2.x + a
            ST2.y = position.p2.y
            // console.log("y1- x2+")

        } else if (position.p2.vx < 0) {
            PT1.x = position.p1.x + W / 2
            PT2.x = position.p1.x + W / 2
            PT2.y = position.p2.y
            // console.log("y1- x2-")

        }
        if (position.p2.vy > 0) {
            PT1.x = position.p1.x + W / 2
            PT2.x = position.p1.x + W / 2
            PT2.y = position.p2.y + a
            ST2.x = position.p2.x
            ST2.y = position.p2.y + a
            // console.log("y1- y2+")

        } else if (position.p2.vy < 0) {
            PT1.x = position.p2.x
            // console.log("y1- y2-")
        }
    }

    let out = []

    if (PT2.x == 0 && PT2.y == 0) {
        out = [PT1.x, PT1.y]
    } else {
        out = [PT1.x, PT1.y, PT2.x, PT2.y]
    }

    if (ST1.x != 0 && ST1.y != 0) {
        // out = [ST1.x, ST1.y, ...out]
        out.unshift(ST1.x, ST1.y)
    }

    if (ST2.x != 0 && ST2.y != 0) {
        // out = [...out, ST2.x, ST2.y]
        out.push(ST2.x, ST2.y)
    }

    return pathStringer([position.p1.x, position.p1.y, ...out, position.p2.x, position.p2.y])

}

function pathStringer(input: number[]) {

    let out = ""

    for (let idx = 0; idx < (input.length) / 2; idx++) {
        if (idx == 0) {
            out = out + "M"
        } else {
            out = out + "L"
        }
        let element = input[2 * idx].toString() + "," + input[2 * idx + 1].toString();
        out = out + element
    }

    return out
}

export function posText(side:string, position:any,textWH:any) {

    let x = 0
    let y = 0
    let r = 0

    if(side == 'p1'){
        if(position.p1.vx > 0){
            x = position.p1.x 
            y = position.p1.y - textWH.height/2
        } else if(position.p1.vx < 0){
            x = position.p1.x - textWH.width
            y = position.p1.y - textWH.height/2
        }

        if(position.p1.vy > 0){
            r = -90
            x = position.p1.x - textWH.height/2
            y = position.p1.y + textWH.width
        } else if(position.p1.vy < 0){
            r = -90
            x = position.p1.x - textWH.height/2
            y = position.p1.y 
        }
    } else if(side == 'p2'){
        if(position.p2.vx > 0){
            x = position.p2.x 
            y = position.p2.y - textWH.height/2
        } else if(position.p2.vx < 0){
            x = position.p2.x - textWH.width
            y = position.p2.y - textWH.height/2
        }

        if(position.p2.vy > 0){
            r = -90
            x = position.p2.x + textWH.height
            y = position.p2.y + textWH.width
        } else if(position.p2.vy < 0){
            r = -90
            x = position.p2.x - textWH.height/2
            y = position.p2.y 
        }
    }     

    return 'translate('+(x) +' '+(y)+') rotate('+ (r) +')'

}