document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start ,
        range = end - start ,
        increment = end > start ? 1 : -1 ,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>{
            current+= increment ;
            obj.textContent = current ;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",122800,122840,50000);
    counter("count2",0,187,50);
    counter("count3",0,120,50);
    counter("count4",6,690,50);
});