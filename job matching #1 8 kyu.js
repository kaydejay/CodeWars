function match(candidate, job) {
  let minSalary = candidate.minSalary - (candidate.minSalary * 0.10);
  let maxSalary = job.maxSalary;

  return (!minSalary || !maxSalary) ? error : minSalary <= maxSalary ? true : false;
}
