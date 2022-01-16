var largestTriangleArea = function(points) {
    let largeX = points[0][0];
    let smallX = points[0][0];
    let largeY = points[0][1];
    let smallY = points[0][1];

    for(let i=1;i<points.length;i++){
        let px = points[i][0] 
        let py = points[i][1] 
        if(px > largeX){
            largeX = px
        }
        if(px < smallX){
            smallX = px
        }
        if(py > largeY){
            largeY = py
        }
        if(py < smallY){
            smallY = py
        }
    }
    return ((largeX - smallX)*(largeY - smallY))/2;
};

console.log(largestTriangleArea([[-2,0],[2,0],[0,2],[0,1],[-1,0],[1,0]]))