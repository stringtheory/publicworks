import React from "react"
import IconCodepen from '../components/icons/IconCodepen';
import IconGithub from '../components/icons/IconGithub';
import IconLinkedIn  from '../components/icons/IconLinkedIn';

const HomePage = () => (
  <div className="App l_homePage_cotainer">
    <main className="l_homePage_main">
      <h1 className="a_heroHeadline">Diane <br/>Wellman</h1>

      <ul className="o_contactList">
        <li><a href="http://codepen.io/stringtheory">
          <span className="sr_only">Diane Wellman on Codepen</span>
          <IconCodepen />
        </a></li>

        <li><a href="https://github.com/stringtheory">
          <span className="sr_only">Diane Wellman on Github</span>
          <IconGithub />
        </a></li>

        <li><a href="https://www.linkedin.com/in/diane-wellman-0b278283">
          <span className="sr_only">Diane Wellman on Linked In</span>
          <IconLinkedIn />
        </a></li>

        <li><a href="mailto:wellman.diane@gmail.com">wellman.diane@gmail.com</a></li>
      </ul>
    </main>

    <figure className="l_homePage_image">
      <img src={'http://dwellman.com/images/robot_army_dt.jpg'}
           alt="Hello World. We are here for the robot takeover." />
    </figure>

    <footer className="l_homePage_footer">
      <small>© Diane Wellman&nbsp;
        <a href="http://longnow.org/02018" target="”_blank”"
           title="Lean More about this weird looking date at the Long Now Foundation">
          0
          <script type="text/JavaScript">document.write(new Date().getFullYear());</script>
          2020
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="kosmik">𐎐𐎊𐎋𐎟𐎖𐎁𐎋𐎁𐎊</span>
      </small>
    </footer>
  </div>
);

export default HomePage;