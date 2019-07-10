const Trending='Trending'
const NavSearchWrapper='NavSearchWrapper'
const getAllChildNodes=(parent)=>{
    let elements=[];
    elements.push(parent)
    if (parent.childNodes!=null) {
        parent.childNodes.forEach(child => {
            elements.push(child)
            let grandChildren=getAllChildNodes(child)
            if (grandChildren!=null&&grandChildren!=undefined){
                Array.prototype.push.apply(elements, grandChildren)
            }
        });
    }
    return elements
}


export const toggleElement=(e)=>{
    let navSearchWrapper=document.getElementById(NavSearchWrapper)
    let trending=document.getElementById(Trending)
    let elements=getAllChildNodes(navSearchWrapper);
    let match=elements.some((ele)=>{
        return e.target==(ele)
    })
    if(!match){
        trending.classList.add('hide')
    }else{
        trending.classList.remove('hide')
    }
}