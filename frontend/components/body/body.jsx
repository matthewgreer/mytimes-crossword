import React from 'react';
import { Link } from 'react-router-dom';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
    
    const currentUser = this.props.currentUser;
    // get current date and time
    // eventually have it update regularly
    const todaysDate = new Date();

    const months = [
      'Jan.','Feb.','Mar.','Apr.','May','June',
      'July','Aug.','Sept.','Oct.','Nov.','Dec.'
    ]

    const weekdays = [
      'Sunday','Monday','Tuesday','Wednesday',
      'Thursday','Friday','Saturday'
    ]

    this.year = todaysDate.getFullYear();
    this.month = months[todaysDate.getMonth()];
    this.date = todaysDate.getDate();
    this.day = weekdays[todaysDate.getDay()];
    this.fullDate = `${this.day}, ${this.month} ${this.date}, ${this.year}`
    
    // this.isSubscriber = currentUser ? "subscriber" : "non-subscriber";
    // this.crosswordStatus = currentUser ? "completed" : "logged-out"
    if (currentUser) {
      this.isSubscriber = "subscriber";
      this.crosswordStatus = "completed";
      this.ribbonText = "Complete";
      this.puzzleText = <span>You're on a 225 day streak!&nbsp;<span className="emphatic">Keep it up!</span></span>;
    } else {
      this.isSubscriber = "non-subscriber";
      this.crosswordStatus = "logged-out";
      this.ribbonText = "Subscribe";
      this.puzzleText = <span>Want to play online?&nbsp;<span className="emphatic">Subscribe today!</span></span>;
    }
  }

  render() {
    return (
      <main>
        <div className="banner-buffer"></div>
        <aside className={this.isSubscriber}>
          <div className="advertising-section" >
            <img className="dummy-ad" src={window.dummy_ad} />
          </div>
        </aside>
        <div className="main-dashboard">
          <div className="dashboard-sections-container">
            <div className="dashboard-section mini-puzzle">
              <a className="mini-puzzle-click-area" href="">
                <div className="puzzle-info-wrapper" >
                  <div className="mini-puzzle-icon-wrapper">
                    <div className="mini-puzzle-status-icon" />
                    <div className="play-ribbon">
                      Play
                    </div>
                  </div>
                  <h3>The Mini</h3>
                </div>
                <div className="mini-puzzle-date-text-wrapper">
                  {this.fullDate}
                </div>
                <hr />
                <div className="puzzle-byline">
                  by Joel Fagliano
                </div>
              </a>
            </div>
            <div className="dashboard-section daily-crossword">
              <Link to="/subscribe" className="daily-crossword-click-area">
                <div className={`puzzle-info-wrapper ${this.isSubscriber}`}>
                    <div className="daily-crossword-icon-wrapper">
                    <div className={`daily-crossword-status-icon ${this.crosswordStatus}`} />
                      <div className="subscribe-ribbon">
                        {this.ribbonText}
                      </div>
                    </div>
                  <h3>The Crossword</h3>
                </div>
                <div className={`daily-crossword-date-text-wrapper ${this.isSubscriber}`}>
                  {this.fullDate}
                </div>
                <hr/>
              </Link>
              <Link to="/subscribe" className="daily-crossword-info-text-wrapper">
                {this.puzzleText}
              </Link>
            </div>
            <div className="dashboard-section other-puzzle">
              <a className="mini-puzzle-click-area" href="">
                <div className="puzzle-info-wrapper" >
                  <div className="mini-puzzle-icon-wrapper">
                    <div className="other-puzzle-icon" />
                    <div className="new-badge">
                      New
                    </div>
                  </div>
                  <h3>Tiles</h3>
                </div>
                <div className="other-puzzle-description">
                  Get lost in patterns with our visual matching game.
                </div>
              </a>
            </div>
          </div>
          <div className="dashboard-wordnerd-text-wrapper">
            <a className="dashboard-read-wordnerd-text">
              Read about today's puzzle on Wordnerd
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Body;
/* 

should receive currentUser 
<Route exact path="/" component={BodyContainer} />

this should be similar to what's needed for a logged in puzzle page:


Define a <ProtectedRoute> helper method in your route_util.js. It should:
Check to see if the application state has a currentUser property. You can use the loggedIn boolean like we did in our AuthRoute component.
If true, render the component.
Otherwise, Redirect to "/login".

<ProtectedRoute exact path="benches/new" component="{BenchFormContainer}" />

and ultimately this should be similar to rendering the actual puzzle's page

a full-body component that displays the puzzle and its accompanying info
should mount when a user clicks on the icon on the splash page or on
the link in the nav drawer

create a new Route for PuzzleContainer that has a puzzleId param

*/