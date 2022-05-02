export const getDateHistory = () => {
    const date = new Date();
    const day = preparingDaye(date.getDate());
    const month = preparingDaye(date.getMonth());
    const year = date.getFullYear();
    const hours = preparingDaye(date.getHours());
    const minutes = preparingDaye(date.getMinutes());

    function preparingDaye(date: number) {
      return date < 10 ? "0" + date : date
    }

    return (
      day + "." + month + "." + year + "  " + hours + ":" + minutes
    )
}