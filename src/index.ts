type Bill = 1 | 2 | 5 | 10 | 20 | 25 | 50;
const BILLS: Bill[] = [1, 2, 5, 10, 20, 25, 50];

export type BillToGive = Partial<Record<Bill, number>>;

const findNextBill = (currentBill: Bill) => {
  const currentBillIndex = BILLS.indexOf(currentBill);
  return BILLS[currentBillIndex - 1];
};

export const atm2 = (amount: number, currentBill: Bill = 50): BillToGive => {
  const rest = amount % currentBill;
  const numberOfCurrentBillToGive = Math.floor(amount / currentBill);
  const nextBill = findNextBill(currentBill);

  if (nextBill === 1) {
    if (numberOfCurrentBillToGive === 0) return {};
    return {
      [currentBill]: numberOfCurrentBillToGive,
    };
  }

  if (numberOfCurrentBillToGive === 0) {
    return {
      ...atm2(rest, nextBill),
    };
  }

  return {
    [currentBill]: numberOfCurrentBillToGive,
    ...atm2(rest, nextBill),
  };
};

const amountOfBill = (bills: BillToGive) => {
  return Object.entries(bills).reduce<number>((acc, [_, amount]) => acc + amount, 0);
};

const isSolutionWithLessAmountOfBills = (acc, solution) => {
  const solutionAmountOfBill = amountOfBill(solution);
  const accNumberOfBill = amountOfBill(acc);
  if (solutionAmountOfBill < accNumberOfBill) {
    return solution;
  }
  return acc;
};

export const atm = (amount: number): BillToGive => {
  const allSolutions = BILLS.map((bill) => atm2(amount, bill));
  console.log(allSolutions);
  const solutionWithLessAmountOfBills = allSolutions.reduce(isSolutionWithLessAmountOfBills);
  return solutionWithLessAmountOfBills;
};
