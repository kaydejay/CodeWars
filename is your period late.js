function periodIsLate(last, today, cycleLength) {
  const numberDaysLast = last.getTime() / (1000 * 3600 * 24)
  const numberDaysToday = today.getTime() / (1000 * 3600 * 24)
  const diferenceDays = numberDaysToday - numberDaysLast

  return diferenceDays > cycleLength
}
