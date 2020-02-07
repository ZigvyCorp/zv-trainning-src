
// filter grounds
export function fiterPrice(array,range) {

    if (range=="None"){
        return array
    }

    let milestones =range.split('_');
    let floor =Number(milestones[0]);
    let ceil =Number(milestones[1]);

    let result= array.filter(item=>{
        return item.price >= floor && item.price <=ceil;
    });
        return result ;    
}


// Sort grounds
export function sortGrounds(array,topic,value) {

    if (value=="None"){
        return array
    }

    if (topic==="Name"){
        if(value==1){
            let sortedArray=array.sort((a,b)=>{
                return a.title>b.title
            })
            return sortedArray;
        }
        else{
            let sortedArray=array.sort((a,b)=>{
                return a.title<b.title
            })
            return sortedArray;
        } 
    }
    if (topic==="Price"){
        if(value==1){
            let sortedArray=array.sort((a,b)=>{
                return a.price-b.price
            })
            return sortedArray;
        }
        else{
            let sortedArray=array.sort((a,b)=>{
                return b.price-a.price
            })
            return sortedArray;
        } 
    }
  

}