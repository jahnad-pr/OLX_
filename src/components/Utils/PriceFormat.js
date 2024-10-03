
export function formatToINR(amount) {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR', 
      minimumFractionDigits: 0, // No decimal places
      maximumFractionDigits: 0  
    }).format(amount);
  }