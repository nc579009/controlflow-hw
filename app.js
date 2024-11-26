const pi =3.1415
let r = 5
let area = pi*r*r

let pArea = 0.8
let pNum1= 20
let pNum2 = pNum1*2
let pNum3 = pNum2*2
let wArea1 = pNum1*pArea
let wArea2 = pNum2*pArea
let wArea3 = pNum3*pArea
//  console.log (area, wArea3, wArea2)
let prune = .8*area
let plant = .5*area
if (wArea3< plant){
    console.log("plant more")
}else if (wArea3<= prune){
    console.log("Monitor")
}else {
    console.log("prune plants")
}
//Part 2
let num1= 100
let num2= num1*2
let num3 = num2 * 2
let num4 = num3 * 2
let num5 = num4 * 2
let num6 = num5 * 2
let num7 = num6 * 2
let num8 = num7 * 2
let num9 = num8 * 2
let num10 = num9 * 2
let newArea =num10* pArea
let r2= newArea/pi
let newr= Math.sqrt(r2)
console.log(`the new radius is ${newr}`)

// part 3
let newparea = num1*pArea

try{
    if( newparea< area){
        console.log("fine")
    }else{
        throw "error"
    }
} catch (error){
    console.log(error)
}   