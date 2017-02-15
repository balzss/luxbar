import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'
import ReactRedux from 'react-redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { createStore } from 'redux';

console.clear();
console.log('App started...');

const stateDefault = {
  items: ['Home', 'About', 'Contact'],
  currentTheme: 'luxbar-menu-material-cyan',
  navbarStyle: 'luxbar-fixed',
  menuAlignement: 'luxbar-menu-right',
  hamburgerVisibility: 'always',
  brandVisibility: true,
  hamburgerAnimation: 'luxbar-hamburger-doublespin'
}

var reducer = (state = stateDefault, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.newItem]
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(action.index + 1)
        ]
      }
    case 'CHANGE_THEME':
      return {
        ...state,
        currentTheme: action.newTheme
      }
    case 'CHANGE_STYLE':
      return {
        ...state,
        navbarStyle: action.newStyle
      }
    case 'CHANGE_ALIGNEMENT':
      return {
        ...state,
        menuAlignement: action.newAlignement
      }
    case 'CHANGE_HAMBURGER_VISIBILITY':
      return {
        ...state,
        hamburgerVisibility: action.newHamburgerVisibility
      }
    case 'CHANGE_BRAND_VISIBILITY':
      return {
        ...state,
        brandVisibility: action.newBrandVisibility
      }
    case 'CHANGE_HAMBURGER_ANIMATION':
      return {
        ...state,
        hamburgerAnimation: action.newHamburgerAnimation
      }
    default: 
      return state;
   }
}

var store = createStore(reducer);

function addItem(newItem) {
  return {
    type: 'ADD_ITEM',
    newItem
  }
}

function changeTheme(newTheme) {
  return {
    type: 'CHANGE_THEME',
    newTheme
  }
}

function removeItem(index) {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}


function changeStyle(newStyle) {
  return {
    type: 'CHANGE_STYLE',
    newStyle
  }
}


function changeAlignement(newAlignement) {
  return {
    type: 'CHANGE_ALIGNEMENT',
    newAlignement
  }
}


function changeHamburgerVisibility(newHamburgerVisibility) {
  return {
    type: 'CHANGE_HAMBURGER_VISIBILITY',
    newHamburgerVisibility
  }
}


function changeBrandVisibility(newBrandVisibility) {
  return {
    type: 'CHANGE_BRAND_VISIBILITY',
    newBrandVisibility
  }
}


function changeHamburgerAnimation(newHamburgerAnimation) {
  return {
    type: 'CHANGE_HAMBURGER_ANIMATION',
    newHamburgerAnimation
  }
}

class MenuBuilder extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      items: this.props.items,
      hasInput: false,
      value: ''
    }
  }
  
  removeItem(index) {
    this.props.dispatch(
      removeItem(index)
    );
  }
  
  onSubmit(event) {
    event.preventDefault();
    var newItem = this.refs.itemName.value;
    if(newItem) {
      this.props.dispatch(
        addItem(newItem)
      );
    }
    this.setState({
        hasInput: false
    });
  }

  
  
  addInput() {
    
    this.setState({
      hasInput: true
    })
  }
  
  
  render() {
      const listItems = this.props.items.map((item, index) =>
              <li key={index} onClick={() => this.removeItem(index)} className="luxbar-item luxbar-demo-item" ><a><span className="demo-item-name">{item}</span><i className="fa fa-times" aria-hidden="true"></i></a></li>
              );

      return(
              <div className={this.props.currentTheme}>
              <ul className="luxbar-navigation">
              {listItems}
              {this.state.hasInput &&
                  <li className="luxbar-item active">
                  <form onSubmit={this.onSubmit.bind(this)}>
                      <input onBlur={this.onSubmit.bind(this)} type="text" ref="itemName" autoFocus/>
                      </form>
                      </li>
              }
              {!this.state.hasInput &&
              <li className="luxbar-item " onClick={this.addInput.bind(this)}><a><i className="fa fa-plus" aria-hidden="true"></i></a></li>
              }
              </ul>
              </div>
            )
  }
}

const ConnBuilder = connect(state => state)(MenuBuilder);



ReactDOM.render(<Provider store={store}>
                  <ConnBuilder />
                </Provider>,
                document.getElementById("builder"));







class Display extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  
    render() {
        const listItems = this.props.items.map((item, index) =>
                <li key={index} className={index === 0 ? "luxbar-item active" : "luxbar-item"}><a>{item}</a></li>
                );
                                  
        return(
            <header id="luxbar" className={this.props.navbarStyle}>
                <input type="checkbox" id="luxbar-checkbox" className="luxbar-checkbox"/>
                <div id="luxbar-menu" className={this.props.menuAlignement + " luxbar-menu " + this.props.currentTheme}>
                    <ul className="luxbar-navigation">
                        <li className="luxbar-header">
                        {this.props.brandVisibility &&
                            <a className="luxbar-brand">LUXBAR</a>
                        }
                            <label id="luxbar-hamburger" className={"luxbar-hamburger " + this.props.hamburgerAnimation} htmlFor="luxbar-checkbox"> <span></span> </label>
                        </li>
                        {listItems}
                    </ul>
                </div>
            </header>
        )
  }
}

const ConnDisplay = connect(state => state) (Display);



ReactDOM.render(<Provider store={store}>
                  <ConnDisplay />
                </Provider>,
                document.getElementById("display"));




class Code extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      items: this.props.items
    }
  }
  
  
  render() {
    const listItems = this.props.items.map((item, index) =>
      ReactDOMServer.renderToStaticMarkup(<li key={index} className="luxbar-item"><a href="#">{item}</a></li>)
    );
    const splitItems = listItems.join('\r\n            ');
    const brandItem = this.props.brandVisibility ? '<a href="/luxbar" classN="luxbar-brand">LUXBAR</a>\n                ' : '';

    return(
            <code>
            <pre><div id="htmlCode">
{`<header id="luxbar" classN="luxbar-fixed">
    <input type="checkbox" id="luxbar-checkbox"/>
    <div class="luxbar-menu ${this.props.menuAlignement} ${this.props.currentTheme}">
        <ul class="luxbar-navigation">
            <li class="luxbar-header">
                ${brandItem}<label class="luxbar-hamburger ${this.props.hamburgerAnimation}" 
                id="luxbar-hamburger" for="luxbar-checkbox"> <span></span> </label>
            </li>
            ${splitItems}
        </ul>
    </div>
</header>`}</div><div className="copy-btn" data-clipboard-target="#htmlCode"><span id="copyHint" className="hint--left hint--rounded" aria-label="">COPY</span>
</div>
    </pre> 
    </code>
                    )
  }
}

const ConnCode = connect(state => state)(Code);



ReactDOM.render(<Provider store={store}>
                  <ConnCode />
                </Provider>,
                document.getElementById("code"));

var themeList = [
{
    htmlId: 'radiotheme-dark',
    name: 'Dark',
    luxbarClass: 'luxbar-menu-dark'
},

{
    htmlId: 'radiotheme-light',
    name: 'Light',
    luxbarClass: 'luxbar-menu-light'
},
{
    htmlId: 'radiotheme-red-900',
    name: 'Red',
    luxbarClass: 'luxbar-menu-material-red'
},
{
    htmlId: 'radiotheme-indigo-900',
    name: 'Indigo',
    luxbarClass: 'luxbar-menu-material-indigo'
},
{
    htmlId: 'radiotheme-cyan-900',
    name: 'Cyan',
    luxbarClass: 'luxbar-menu-material-cyan'
},
{
    htmlId: 'radiotheme-green-900',
    name: 'Green',
    luxbarClass: 'luxbar-menu-material-green'
},
{
    htmlId: 'radiotheme-amber-900',
    name: 'Amber',
    luxbarClass: 'luxbar-menu-material-amber'
},
{
    htmlId: 'radiotheme-brown-900',
    name: 'Brown',
    luxbarClass: 'luxbar-menu-material-brown'
},
{
    htmlId: 'radiotheme-bluegrey-900',
    name: 'Blue Grey',
    luxbarClass: 'luxbar-menu-material-bluegrey'
}
]

class ThemeSelector extends React.Component {
  
  constructor(props){
    super(props);
    
    this.state = {
      selectedTheme: this.props.selectedTheme
    }
  }

  onChange(event) {
    var newTheme = (event.currentTarget.value);
    this.props.dispatch(
            changeTheme(newTheme)
            );
  }
  
  
  render() {
    const themes = themeList.map((theme, index) =>
      <div key={index} className="themeHolder">
        <input checked={this.props.currentTheme === theme.luxbarClass} id={theme.htmlId} value={theme.luxbarClass} type="radio" name="radio" onChange={this.onChange.bind(this)}/>
        <label className={"radiotheme " +  theme.htmlId} htmlFor={theme.htmlId}><span className="demo-checkmark"><i className="fa fa-check" aria-hidden="true"></i></span> {theme.name} <i className="fa fa-question-circle" aria-hidden="true"></i></label>
      </div>
    );
                                  
    
    return(
            <div className="demo-option-group">

            <form action="" className="demo-radiomenu" >
            {themes}
            </form>

            <p>
            <i>more themes are coming soon...</i>
            </p>
            </div>

    )
  }
}

const ConnThemeSelector = connect(state => state) (ThemeSelector);



ReactDOM.render(<Provider store={store}>
                  <ConnThemeSelector />
                </Provider>,
                document.getElementById("theme-selector"));






var styleList = [
        {
            htmlId: 'luxbar-default',
            name: 'Default'
        },
        {
            htmlId: 'luxbar-static',
            name: 'Static'
        },
        {
            htmlId: 'luxbar-fixed',
            name: 'Fixed'
        },
        {
            htmlId: 'luxbar-fixed-bottom',
            name: 'Fixed Bottom'
        }
    ]

var alignementList = [
        {
            htmlId: 'luxbar-menu-left',
            name: 'Left'
        },
        {
            htmlId: 'luxbar-menu-right',
            name: 'Right'
        }
    ]
    
var hamburgerVisibilityList = [
        {
            htmlId: 'Always',
            name: 'Default'
        },
        {
            htmlId: 'Under 786px',
            name: 'Fixed'
        },
        {
            htmlId: 'Never',
            name: 'Fixed Bottom'
        }
    ]

var brandVisibilityList = [
        {
            htmlId: 'luxbar-show-brand',
            name: 'Show'
        },
        {
            htmlId: 'luxbar-hide-brand',
            name: 'Hide'
        }    ]

var hamburgerAnimationList = [
        {
            htmlId: 'luxbar-hamburger-spin',
            name: 'Spin'
        },
        {
            htmlId: 'luxbar-hamburger-doublespin',
            name: 'Doublespin'
        }
    ]

class OptionPane extends React.Component {
  
  constructor(props){
    super(props);
  }

  onChangeStyle(event) {
    var newStyle = (event.currentTarget.value);
    if(newStyle === 'luxbar-default' || newStyle === 'luxbar-fixed-bottom') {
        document.body.style.cssText = "padding-top: 0px;";
    } else {
        document.body.style.cssText = "padding-top: 58px;";
    }

    this.props.dispatch(
            changeStyle(newStyle)
            );
  }
  
  onChangeAlignement(event) {
    var newAlignement = (event.currentTarget.value);
    this.props.dispatch(
            changeAlignement(newAlignement)
            );
  }
  
  onChangeHamburgerVisibility(event) {
    var newHamburgerVisibility = (event.currentTarget.value);
    this.props.dispatch(
            changeStyle(newHamburgerVisibility)
            );
  }
  
  onChangeBrandVisibility(event) {
    var newBrandVisibility = event.currentTarget.value === 'Show' ? true : false;
    this.props.dispatch(
            changeBrandVisibility(newBrandVisibility)
            );
  }
  
  onChangeHamburgerAnimation(event) {
    var newHamburgerAnimation = (event.currentTarget.value);
    this.props.dispatch(
            changeHamburgerAnimation(newHamburgerAnimation)
            );
  }
  
  
  render() {
    const styles = styleList.map((style, index) =>
            <div key={index} className="optionHolder">
            <input checked={this.props.navbarStyle === style.htmlId} id={style.htmlId} value={style.htmlId} onChange={this.onChangeStyle.bind(this)} type="radio" name="radio" />
            <label className="control" htmlFor={style.htmlId} ><span className="demo-checkmark"><i className="fa fa-check" aria-hidden="true"></i></span> {style.name} <i className="fa fa-question-circle" aria-hidden="true"></i> </label>
            </div>
    );
    
    const alignements = alignementList.map((alignement, index) =>
            <div key={index} className="optionHolder">
            <input checked={this.props.menuAlignement === alignement.htmlId} id={alignement.htmlId} value={alignement.htmlId} onChange={this.onChangeAlignement.bind(this)} type="radio" name="radio" />
            <label className="control" htmlFor={alignement.htmlId} ><span className="demo-checkmark"><i className="fa fa-check" aria-hidden="true"></i></span> {alignement.name} <i className="fa fa-question-circle" aria-hidden="true"></i> </label>
            </div>
    );
    
    const brandVisibilities = brandVisibilityList.map((brandVisibility, index) =>
            <div key={index} className="optionHolder">
            <input checked={(this.props.brandVisibility && brandVisibility.name === 'Show') || (!this.props.brandVisibility && brandVisibility.name === 'Hide')} id={brandVisibility.htmlId} value={brandVisibility.name} onChange={this.onChangeBrandVisibility.bind(this)} type="radio" name="radio" />
            <label className="control" htmlFor={brandVisibility.htmlId} ><span className="demo-checkmark"><i className="fa fa-check" aria-hidden="true"></i></span> {brandVisibility.name} <i className="fa fa-question-circle" aria-hidden="true"></i> </label>
            </div>
    );
    
    const hamburgerAnimations = hamburgerAnimationList.map((hamburgerAnimation, index) =>
            <div key={index} className="optionHolder" >
            <input checked={this.props.hamburgerAnimation === hamburgerAnimation.htmlId} id={hamburgerAnimation.htmlId} value={hamburgerAnimation.htmlId} onChange={this.onChangeHamburgerAnimation.bind(this)} type="radio" name="radio" />
            <label className="control" htmlFor={hamburgerAnimation.htmlId} ><span className="demo-checkmark"><i className="fa fa-check" aria-hidden="true"></i></span> {hamburgerAnimation.name} <i className="fa fa-question-circle" aria-hidden="true"></i> </label>
            </div>
    );

    const n = this.props.currentTheme.split("-");
    const themeColor =  "optionHolder-" + n[n.length - 1];
    
    
    return(
            <div className={"demo-option-group " + themeColor}>

            <h2>Navbar Style:</h2>
            <form action="" className="demo-radiomenu" >
            {styles}
            </form>

            <h2>Menu Alignement:</h2>
            <form action="" className="demo-radiomenu" >
            {alignements}
            </form>

            <h2>Brand Visibility:</h2>
            <form action="" className="demo-radiomenu" >
            {brandVisibilities}
            </form>

            <h2>Hamburger Animation:</h2>
            <form action="" className="demo-radiomenu" >
            {hamburgerAnimations}
            </form>

            </div>

    )
  }
}

const ConnOptionPane = connect(state => state) (OptionPane);



ReactDOM.render(<Provider store={store}>
                  <ConnOptionPane />
                </Provider>,
                document.getElementById("option-pane"));





class Footer extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    
    return(
        <footer className={this.props.currentTheme}>
            <div className="footnote">
                created by <a href="https://github.com/balzss">balzss</a> <br/>
                licensed under the <a href="https://github.com/balzss/luxbar/blob/master/LICENSE">MIT License</a> <br/>
                2017
            </div>
        </footer>
    )
  }
}

const ConnFooter = connect(state => state) (Footer);



ReactDOM.render(<Provider store={store}>
                  <ConnFooter />
                </Provider>,
                document.getElementById("footer"));

