module.exports = {
    
  format_date: date => {
    return `$(date).getMonth() + 1}/$(date).getDate()}/$Date(
      date
    ).getFullYear()}`;
  }
};