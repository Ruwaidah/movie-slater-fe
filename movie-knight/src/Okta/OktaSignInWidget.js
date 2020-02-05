// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import OktaSignIn from '@okta/okta-signin-widget';
// import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
// import '@okta/okta-signin-widget/dist/css/okta-theme.css';

// export default class OktaSignInWidget extends Component {
//   componentDidMount() {
//     const el = ReactDOM.findDOMNode(this);
//     this.widget = new OktaSignIn({
//       baseUrl: this.props.baseUrl,
//       authParams: {
//         pkce: true
//       },
//       //added by john
//       features: {
//         idpDiscovery: true
//       },
//       idps: [
//         {type: 'GOOGLE', id: '0oa19swue13lszc7n4x6'},
//         // {type: 'FACEBOOK', id: '0oar25ZnMM5LrpY1O0g3'},
//         // {type: 'LINKEDIN', id: '0oaaix1twko0jyKik0g4'},
//         // {id: '0oabds23xM3ssMjosl0g5', text: 'Login with Joe', className: 'with-joe' }
//       ]
//       //added by john
//     });
//     this.widget.renderEl({el}, this.props.onSuccess, this.props.onError);
//   }

//   componentWillUnmount() {
//     this.widget.remove();
//   }

//   render() {
//     return <div />;
//   }
// };