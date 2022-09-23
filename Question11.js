const getSecondsToday = () => {
    const midnight = new Date();
    midnight.setHours(0, 0, 0 ,0);
    const now = new Date();
    let timeElapsed = (now - midnight)/1000;
    console.log(timeElapsed); 
}

getSecondsToday();