export const getDateHistory = () => {
    const date = new Date();

    function preparingDaye(date: number) {
      return date < 10 ? "0" + date : date
    }

    return preparingDaye(date.getDate()) + "." + preparingDaye(date.getMonth()) + "." + date.getFullYear() + "  " + preparingDaye(date.getHours()) + ":" + preparingDaye(date.getMinutes());
}