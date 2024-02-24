import React, { useState, useEffect } from 'react';
import './TaskScheduler.css';


const TaskScheduler = () => {
  const [selectedOption, setSelectedOption] = useState('monthly'); // Default selection is monthly
  const [renewalDate, setRenewalDate] = useState(null);
  const [displayLabel, setDisplayLabel] = useState('Month');
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);

    // Calculate renewal date based on the current date
    const currentDate = new Date();
    let nextRenewalDate;

    switch (option) {
      case 'monthly':
        nextRenewalDate = new Date(currentDate);
        nextRenewalDate.setMonth(currentDate.getMonth() + 1);
        setDisplayLabel('Month');
        break;
      case 'quarterly':
        nextRenewalDate = new Date(currentDate);
        nextRenewalDate.setMonth(currentDate.getMonth() + 3);
        setDisplayLabel('3 Months');
        break;
      case 'yearly':
        nextRenewalDate = new Date(currentDate);
        nextRenewalDate.setFullYear(currentDate.getFullYear() + 1);
        setDisplayLabel('Year');
        break;
      default:
        break;
    }

    setRenewalDate(nextRenewalDate);
  };

  useEffect(() => {
    // Set the default selection and calculate the initial renewal date
    handleOptionClick('monthly');
  }, []);

  const calculatePremium = (selectedOption) => {
    const premiumPerYear = 3600;
    switch (selectedOption) {
      case 'monthly':
        return premiumPerYear / 12;
      case 'quarterly':
        return premiumPerYear / 4;
      case 'yearly':
        return premiumPerYear;
      default:
        return 0;
    }
  };

  const premium = calculatePremium(selectedOption);

  return (
    <div className="task-scheduler-container">
      
      <button
        onClick={() => handleOptionClick('monthly')}
        className={`frequency-button ${selectedOption === 'monthly' ? 'selected' : ''}`}
      >
        Monthly
      </button>
      <button
        onClick={() => handleOptionClick('quarterly')}
        className={`frequency-button ${selectedOption === 'quarterly' ? 'selected' : ''}`}
      >
        Quarterly
      </button>
      <button
        onClick={() => handleOptionClick('yearly')}
        className={`frequency-button ${selectedOption === 'yearly' ? 'selected' : ''}`}
      >
        Yearly
      </button>

      {selectedOption && renewalDate && (
        <div>
            
                <div className='total-premium'>
                    <p>Total Premium: </p> 
                    <p> {premium} </p>  
                </div>
                <div className='renewal-info'>
                    <p>Renews on: {renewalDate.toLocaleDateString()}</p>
                    <p>Charged every: {displayLabel}</p>
                </div>

                <button
                    className={`payment-button`}
                >
                    Complete Payment
                </button>
                <div>
                    <p>Your card will be charged every {displayLabel} for the amount stated above.</p>
                </div>
            
        </div>
      )}
    </div>
  );
};

export default TaskScheduler;



