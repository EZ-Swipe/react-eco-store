import "./Statistics.scss";

const Statistics = () => {
   return (
      <div className="statistics-section section-padding-y">
         <div>
            <div className="container">
               <div className="statistics">
                  <div className="statistics__item">
                     <p className="statistics__item-value">37+</p>
                     <p className="statistics__item-text">Years of Hard Work</p>
                  </div>
                  <div className="statistics__item">
                     <p className="statistics__item-value">500k+</p>
                     <p className="statistics__item-text">Happy Customer</p>
                  </div>
                  <div className="statistics__item">
                     <p className="statistics__item-value">28</p>
                     <p className="statistics__item-text">Qualified Team Member</p>
                  </div>
                  <div className="statistics__item">
                     <p className="statistics__item-value">750k+</p>
                     <p className="statistics__item-text">Monthly Orders</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Statistics;
