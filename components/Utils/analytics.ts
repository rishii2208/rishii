import ReactGA from 'react-ga4';

export const initGA = () => {
  console.log(
    `%c
    CONTACT ME
   ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     || 
                
  Hey There i'm glad you liked the site and what to see whats going on, sure check the repo at https://github.com/rishii_2208 
  
  And dont forget to shoot me an email at rishirajprajapti22@gmail.com if you need me to come do awesome work at your company`,
    'font-family:inherit'
  );
  ReactGA.initialize('UA-128989337-1');
};


export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.event({
      category: 'Exception',
      action: description,
      
    });
  }
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({
      category: category,
      action: action,
    });
  }
};

