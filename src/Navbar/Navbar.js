
// import { bubble as Menu } from 'react-burger-menu'
// import React, { Component } from 'react';
// import { Home, UserFemale, Workshop, Tools, ContactInfo } from 'grommet-icons';
// import { Link,  Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



// class Example extends Component {

//   constructor(props) {
//     super(props);
//     this.scrollToTop = this.scrollToTop.bind(this);
//   }

//   componentDidMount() {

//     Events.scrollEvent.register('begin', function (to, element) {
//       console.log("begin", to, element,    arguments);
//     });

//     Events.scrollEvent.register('end', function () {
//       console.log("end", arguments);
//     });

//   }
//   scrollToTop() {
//     scroll.scrollToTop();
//   }
//   scrollTo() {
//     scroller.scrollTo('scroll-to-element', {
//       duration: 800,
//       delay: 0,
//       smooth: 'easeInOutQuart'
//     })
//   }
//   scrollToWithContainer() {

//     let goToContainer = new Promise((resolve, reject) => {

//       Events.scrollEvent.register('end', () => {
//         resolve();
//         Events.scrollEvent.remove('end');
//       });

//       scroller.scrollTo('scroll-container', {
//         duration: 800,
//         delay: 0,
//         smooth: 'easeInOutQuart'
//       });

//     });

//     goToContainer.then(() =>
//       scroller.scrollTo('scroll-container-second-element', {
//         duration: 800,
//         delay: 0,
//         smooth: 'easeInOutQuart',
//         containerId: 'scroll-container'
//       }));
//   }
//   componentWillUnmount() {
//     Events.scrollEvent.remove('begin');
//     Events.scrollEvent.remove('end');
//   }
//   showSettings(event) {
//     event.preventDefault();

//   }
//   handleSetActive(to) {
//     console.log(to);
//   }
//   render() {
//     const styles = {
//       bmBurgerButton: {
//         position: 'fixed',
//         width: '36px',
//         height: '30px',
//         left: '36px',
//         top: '36px'
//       },
//       bmBurgerBars: {
//         background: '#373a47'
//       },
//       bmBurgerBarsHover: {
//         background: '#a90000'
//       },
//       bmCrossButton: {
//         height: '24px',
//         width: '24px'
//       },
//       bmCross: {
//         background: '#bdc3c7'
//       },
//       bmMenuWrap: {
//         position: 'fixed',
//         height: '100%',
//       },
//       bmMenu: {
//         background: '#373a47',
//         padding: '2.5em 1.5em 0',
//         fontSize: '1.15em'
//       },
//       bmMorphShape: {
//         fill: '#373a47'
//       },
//       bmItemList: {
//         color: '#b8b7ad',
//         padding: '0.8em'
//       },
//       bmItem: {
//         display: 'inline-block'
//       },
//       bmOverlay: {
//         background: 'rgba(0, 0, 0, 0.3)'
//       }
//     }
//     return (
//       <Menu pageWrapId={"page-wrap"} styles={styles} >
//         {/* <main id="page-wrap"> */}
//           <div>
//             <Link containerId="home" className="tools" spy={false} smooth={true} duration={250} isDynamic={true} to="/"  
//             ><Home color='yellow' size='large'/>Home</Link>
//           </div>
//           <div>
//             <Link activeClass="active" className="menu-item" spy={true} smooth={true} duration={250} to="about"><UserFemale color='yellow' size='large'/>About me</Link>
//           </div> 
//           <div>
//             <Link activeClass="active" className="menu-item" spy={true} smooth={true} duration={250} to="works"><Workshop color='yellow' size='large' />Works</Link>
//           </div>
//           <div>
//             <Link activeClass="active" className="menu-item" spy={true} smooth={true} duration={250} to="tools"><Tools color='yellow' size='large' />Tools</Link>
//           </div>
//           <div>
//             <Link activeClass="active" className="menu-item" spy={true} smooth={true} duration={250} to="contact"><ContactInfo color='yellow' size='large'/>Contact</Link>
//           </div>
//         {/* </main> */}


//         <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}><ContactInfo color='yellow' size='large'/>Contact</Link>

//       </Menu>
//     );
//   }
// }

// export default Example;










// import { bubble as Menu } from 'react-burger-menu'
// import React, { Component } from 'react';
// import { Home, UserFemale, Workshop, Tools, ContactInfo } from 'grommet-icons';
// import { Link,  Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



// class Example extends Component {

//   constructor(props) {
//     super(props);
//     this.scrollToTop = this.scrollToTop.bind(this);
//     this.handleSetActive=this.handleSetActive.bind(this);
//   }

//   componentDidMount() {

//     Events.scrollEvent.register('begin', function () {
//       console.log("begin", arguments);
//     });

//     Events.scrollEvent.register('end', function () {
//       console.log("end", arguments);
//     });

//   }
//   scrollToTop() {
//     scroll.scrollToTop();
//   }
//   scrollTo() {
//     scroller.scrollTo('scroll-to-element', {
//       duration: 800,
//       delay: 0,
//       smooth: 'easeInOutQuart'
//     })
//   }
//   scrollToWithContainer() {

//     let goToContainer = new Promise((resolve, reject) => {

//       Events.scrollEvent.register('end', () => {
//         resolve();
//         Events.scrollEvent.remove('end');
//       });

//       scroller.scrollTo('scroll-container', {
//         duration: 800,
//         delay: 0,
//         smooth: 'easeInOutQuart'
//       });

//     });

//     goToContainer.then(() =>
//       scroller.scrollTo('scroll-container-second-element', {
//         duration: 800,
//         delay: 0,
//         smooth: 'easeInOutQuart',
//         containerId: 'scroll-container'
//       }));
//   }
//   componentWillUnmount() {
//     Events.scrollEvent.remove('begin');
//     Events.scrollEvent.remove('end');
//   }
//   showSettings(event) {
//     event.preventDefault();

//   }
//   handleSetActive(to) {
//     console.log(to);
//   }
//   render() {
//     const styles = {
//       bmBurgerButton: {
//         position: 'fixed',
//         width: '36px',
//         height: '30px',
//         left: '36px',
//         top: '36px'
//       },
//       bmBurgerBars: {
//         background: '#373a47'
//       },
//       bmBurgerBarsHover: {
//         background: '#a90000'
//       },
//       bmCrossButton: {
//         height: '24px',
//         width: '24px'
//       },
//       bmCross: {
//         background: '#bdc3c7'
//       },
//       bmMenuWrap: {
//         position: 'fixed',
//         height: '100%',
//       },
//       bmMenu: {
//         background: '#373a47',
//         padding: '2.5em 1.5em 0',
//         fontSize: '1.15em'
//       },
//       bmMorphShape: {
//         fill: '#373a47'
//       },
//       bmItemList: {
//         color: '#b8b7ad',
//         padding: '0.8em'
//       },
//       bmItem: {
//         display: 'inline-block'
//       },
//       bmOverlay: {
//         background: 'rgba(0, 0, 0, 0.3)'
//       }
//     }
//     return (
//       <Menu pageWrapId={"page-wrap"} styles={styles} >
//       {/* <div> */}
//         {/* <nav className="navbar navbar-default navbar-fixed-top"> */}
//           {/* <div className="container-fluid"> */}
//             {/* <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> */}
//             <Link activeClass="active" className="menu-item" to="/" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive} ><Tools color='yellow' size='large' />Tools</Link>
//             {/* </div> */}
//           {/* </div>
//         </nav>
//       </div> */}
//       </Menu>

//     );
//   }
// }

// export default Example;







import { bubble as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import { Home, UserFemale, Workshop, Tools, ContactInfo } from 'grommet-icons';
import { Link, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import About from '../About/About';




class Example extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("end", arguments)
    });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 5,
      smotth: 'easeInOutQutQuart'
    });
  }
  // scrollToWithContainer() {
  //   let goToContainer = new Promise((resolve, reject) => {
  //     Events.scroll.register('end', () => {
  //       resolve();
  //       Events.scrollEvent.remove('end');
  //     });
  //     scroller.scrollTo('scroll-container', {
  //       duration: 800,
  //       delaay: 0,
  //       smooth: 'easeInOutQuart'
  //     });
  //   });
  //   // goToContainer.then(() =>
  //   //   scroller.scrollTo('scroll-container-second-element', {
  //   //     duration: 800,
  //   //     delay: 0,
  //   //     smooth: 'easeInOutQuart',
  //   //     containerId: 'scroll-container'
  //   //   }));
  // }
    componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmBurgerBarsHover: {
        background: '#a90000'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%',
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmItem: {
        display: 'inline-block'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }
    return (
      <Menu pageWrapId={"page-wrap"} styles={styles}>
        <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={250} >Test 1</Link></li>
        <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={250}>Test 2</Link></li>
        <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={250} >Test 3</Link></li>           
        <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={250}>Test 4</Link></li>

        <Link to="test1" containerId="containerElement">
          About me
        </Link>

      </Menu>

    )
  }
}

export default Example;