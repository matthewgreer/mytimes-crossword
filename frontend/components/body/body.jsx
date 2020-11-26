import React from 'react';
// import { Link } from 'react-router-dom';
import Advert from './advert';
import Dashboard from './dashboard';

class Body extends React.Component {
  constructor(props) {
    super(props);

    /*
      receives as props:
        currentUser: eg. 12,
        ( after fetchMicroAuthor async returns:
          microAuthor: eg. 'Joel Fagliano'
        )
        ( after fetchUserMicro async returns:
          microDataSet: eg. {
            author: eg. 'Joel Fagliano',
            clue_set: eg. {
              a1: {
                boxes: ['0,2', '0,3', '0,4'],
                clue: 'Who can get these nuts?',
                direction: 'across',
                name: 'a1',
                number: 1
              },
              a2: ...etc.
            },
            id: eg. 9,
            label_set: eg. [
              ['#', '#', '1', '2', '3'],
              ['#', '4', ' ', ' ', ' '],
              [] ...etc.
            ],
            micro_id: eg. 12,
            solution: eg. [
              ['#', '#', 'Y', 'O', 'U'],
              [] ...etc.
            ],
            solved: eg. false,
            solving_state: eg. [
              ['#', '#', 'Y', ' ', ' '],
              [] ...etc.
            ],
            timer: eg. ['0', '1', '34'],
            user_id: eg. 3,
            wordcross_date: '2020-11-23T00:00.000Z'
          }
        )
        ( after fetchUserDaily async returns:
          dailyDataSet: eg. {
            author: eg. 'Neville Fogerty',
            clue_set: eg. {
              a1: {
                boxes: ['0,2', '0,3', '0,4'],
                clue: 'Who can get \'deez nuts?\'',
                direction: 'across',
                name: 'a1',
                number: 1
              },
              a2: ...etc.
            },
            id: eg. 9,
            label_set: eg. [
              ['#', '#', '1', '2', '3', '#', '#' '4', '5', '6', '7', '#', '8', '9', '10'],
              ['#', '11', ' ', ' ', ' ', '12', '#', '13', ' ', ' ', ' ' , '14', ' ', ' ', ' '],
              [] ...etc.
            ],
            daily_id: eg. 12,
            solution: eg. [
              ['#', '#', 'Y', 'O', 'U', '#', '#', 'C', 'A', 'N', 'T', '#', 'B', 'R', 'O'],
              [] ...etc.
            ],
            solved: eg. false,
            solving_state: eg. [
              ['#', '#', 'Y', 'O', 'U', '#', '#', ' ', ' ', ' ', ' ', '#', 'B', ' ', ' '],
              [] ...etc.
            ],
            timer: eg. ['0', '1', '34'],
            user_id: eg. 3,
            wordcross_date: '2020-11-23T00:00.000Z'
          }
        )
    */
    
    // get current date and time
    // !!! TO DO: eventually have it update regularly
    this.todaysDate = new Date();

    this.todaysFullDate = this.todaysDate.toLocaleDateString(
      undefined, {
        weekday: 'long', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
      }
    );

// ***  Though the body will always display today's date, I hardcode   ***
// ***  the wordcross's date under the hood. Since I'm not going to    ***
// ***  add new Micro and Daily wordcrosses every day like the NYT, I  ***
// ***  implement a case statement that determines which of my seven   ***
// ***  seeded wordcrosses gets displayed in the body based on the     ***
// ***  current day of the week.                                       ***

    switch (this.todaysDate.getDay()) {
      case 0:
        this.microDate = "2020-08-03";
        // this.dailyDate = "";
        // this.dailyType = "Sunday";
        break;
      case 1:
        this.microDate = "2020-10-22";
        // this.dailyDate = "";
        // this.dailyType = "Monday"
        break;
      case 2:
        this.microDate = "2020-10-26";
        // this.dailyDate = "";
        // this.dailyType = "Tuesday"
        break;
      case 3:
        this.microDate = "2019-09-22";
        // this.dailyDate = "";
        // this.dailyType = "Wednesday"
        break;
      case 4:
        this.microDate = "2020-10-25";
        // this.dailyDate = "";
        // this.dailyType = "Thursday"
        break;
      case 5:
        this.microDate = "2020-10-21";
        // this.dailyDate = "";
        // this.dailyType = "Friday"
        break;
      case 6:
        this.microDate = "2020-08-08";
        // this.dailyDate = "";
        // this.dailyType = "Saturday"
    }
   
    // this.isSubscriber = this.props.currentUser ? "subscriber" : "non-subscriber";

    this.displayDashboard = this.displayDashboard.bind(this);

  };
  
  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchUserMicro(
        this.props.currentUser.id,
        this.microDate
      );
      // this.props.fetchUserDaily(
      //   this.props.currentUser,
      //   this.dailyDate
      // );
    } else {
    this.props.fetchMicroAuthor(this.microDate);
    }
  };

  displayDashboard() {
    if (!this.props.currentUser) {
      return (
        <div className="dashboard-container">
          {this.props.microAuthor && 
            <Dashboard 
              // dailyDataSet = {null}
              // dailyDate = {this.dailyDate}
              // dailyType = {this.dailyType}
              microAuthor = {this.props.microAuthor}
              microDataSet = {null}
              microDate = {this.microDate}
              subscriber="non-subscriber"
              today = {this.todaysDate}
              todaysFullDate = {this.todaysFullDate}
            />
          }
        </div>
      )
    } else {
      return (
        <div className="dashboard-container">
          {(this.props.microDataSet && this.props.dailyDataSet) &&
            <Dashboard 
              // dailyDataSet = {this.props.dailyDataSet}
              // dailyDate = {this.dailyDate}
              // dailyType = {this.dailyType}
              microAuthor = {this.props.microDataSet.author}
              microDataSet = {this.props.microDataSet}
              microDate = {this.microDate}
              subscriber="subscriber"
              today = {this.todaysDate}
              todaysFullDate = {this.todaysFullDate}
            />
          }
        </div>
      )
    }
  };

  render() {
    return (
      <main>
        {
          this.props.currentUser ? 
          <div className="banner-buffer"></div> :
          <div className="banner-buffer with-notification"></div>
        }
        { 
          this.props.currentUser ?
          <Advert order={3} /> :
          <Advert order={1} />
        }
        {this.displayDashboard()}
      </main>
    );
  }
}

export default Body;