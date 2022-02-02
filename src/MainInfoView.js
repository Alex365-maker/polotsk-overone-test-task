
import classes from './MainInfoView.module.css';
import img2 from './photos/img2.png';
import img3 from './photos/img3.png';
import img4 from './photos/img4.png';



function MainInfoView() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>

      
          <h1 className={classes.name1}>Proven and Trusted</h1>
          <h1 className={classes.name2}>Cryptourrency Portal</h1>
       

        <div className={classes.section1}>
          <img src={img2} />
          <div className={classes.sectionText}>
            <h1 className={classes.sectionHead}>Low Rates</h1>
            <p className={classes.sectionP}>Consistently low fees compared to other bitcoin service portals</p>
          </div>
        </div>

        <div className={classes.section2}>
          <img src={img3} />
          <div className={classes.sectionText} >
            <h1 className={classes.sectionHead}>Fast and Simple</h1>
            <p className={classes.sectionP}>Transact in seconnds hassle-free. We specifically designed our Bitcoin service to be simple, easily navigated and used even for first time traders</p>
          </div>
        </div>

        <div className={classes.section3}>
          <img src={img4} />
          <div className={classes.sectionText}>
            <h1 className={classes.sectionHead}>Highly Secured</h1>
            <p className={classes.sectionP}>All activity and transactions are encrypted and secured to ensure the highest standards for privacy and security of all buyers and sellers</p>

          </div>


        </div>

      </div>
    </div>

  );
}

export default MainInfoView;
