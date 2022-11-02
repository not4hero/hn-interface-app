export const convertFromUnixTimeStamp = (unixTime) => {

    var date = new Date( unixTime * 1000 );

    return { day: date.getDay(), mounts: date.getMonth(),  year: date.getFullYear() }
    
  }
