export const ModalPayment = (link, type) => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    if(screenWidth < 768){
        window.open(link, '_blank');
    }
    const functions ={
        _blank: () => window.open(link, '_blank'),
        _500:()=>{
            const left = (screenWidth/2) - (500/2);
            const top = (screenHeight/2) - (500/2);
            window.open(link, '_blank', `width=500,height=500,left=${left},top=${top}`);
        },
        _special: () => {
            const width = (screenWidth/3)
            const height = (screenHeight/1.5)
            const left = (screenWidth/2) - (width/2);
            const top = (screenHeight/2) - (height/2);
            window.open(link, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
        },
        _complete: () => {
            window.open(link, '_blank', `width=${screenWidth}`);
        }
    }
    functions[type]();
}