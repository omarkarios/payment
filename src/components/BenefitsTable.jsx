import './BenefitsTable.css'
export default function BenefitsTable(){
    return(
        <div className="App">
        <header className="App-header">
  
        <h1 className='benefit'>
          Bronze B2C Hospi Cash & Life Nigeria
        </h1>
          
        <table >
                  <thead>
                    <tr>
                      <th>Benefit</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
  
                  <tbody>
                    
                      <tr>
                        <td>Hospital Cash 2+ Nights</td>
                        <td>80,000.00</td>
                      </tr>
                    
                      <tr>
                        <td>Life</td>
                        <td>200,000.00</td>
                      </tr>
                    
                  </tbody>
  
          </table>
          
        </header>
      </div> 
    )
}