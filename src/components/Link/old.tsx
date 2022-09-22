export default function n(){
    return null
}

// function pathOut(key:string){

//     let r = 30
//     let H = Math.abs(position.p1.y - position.p2.y)
//     let W = Math.abs(position.p1.x - position.p2.x)
//     let out:number[] = [position.p1.x,      position.p1.y]

//     switch (key) {
//         case "31":
//             out = out.concat([ position.p1.x,      (position.p1.y + (H/2)), 
//                     (position.p1.x+W),  (position.p1.y + (H/2))]);        
//             break;
//         case "32":
//             out = out.concat([ position.p1.x,      (position.p1.y + (H/2)), 
//                 (position.p1.x+W + r),  (position.p1.y + (H/2)), 
//                 (position.p1.x+W + r),  (position.p1.y + H)]);  
//             break;
//         default:
//             break;
//     }
//     out = out.concat([(position.p1.x+W),  (position.p1.y + H)])
//     return out 
// }


// function test(){

//     let out = ''

//     if(position.p1.vx == 1){
//         out = '2'
//     }else if (position.p1.vx == -1){
//         out = '4'
//     }

//     if(position.p1.vy == 1){
//         out = '3'
//     }else if (position.p1.vy == -1){
//         out = '1'
//     }

    
//     if(position.p2.vx == 1){
//         out = out + '2'
//     }else if(position.p2.vx == -1){
//         out = out + '4'
//     }

//     if(position.p2.vy == 1){
//         out = out + '3'
//     }else if(position.p2.vy == -1){
//         out = out + '1'
//     }

//     return out
//     // console.log(Math.sign(position.p1.x-position.p2.x))
//     // console.log(Math.sign(position.p1.y-position.p2.y))

// }