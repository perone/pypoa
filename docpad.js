module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "PyPOA",
      description: "1o Python Porto Alegre",
      date: "Junho 7",
      // If your event is free, just comment this line
      // price: "R$ 10",
      venue: "Falta Definir",
      address: "Av. Carlos Gomes, 1000",
      city: "Porto Alegre",
      state: "Rio Grande do Sul"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Registre-se agora!",
        link: "http://eventick.com.br"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "pypoa",
      url: "http://www.pypoa.org",
      googleanalytics: "UA-33600000-0"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Programação",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Recepção",
        time: "9h00"
      },
      {
        name: "Abertura",
        time: "9h30"
      },
      {
        name: "Maurício de Abreu Antunes",
        photo: "http://www.gravatar.com/avatar/851c5fc71f5542c0a61993b3b0e20ac5?s=200",
        bio: "Maurício é um desenvolvedor etc etc etc.",
        company: "PyTchê",
        link: {
          href: "https://twitter.com/maugzoide",
          text: "@maugzoide"
        },
        presentation: {
          title: "Introdução ao framework Django",
          description: "Palestra de introdução ao framework web Django.",
          time: "10h00"
        }
      },
      { 
        name: "Leonardo Korndörfer",
        photo: "http://www.gravatar.com/avatar/6c3887b22478ea33fffa3bad4e8b1625?s=200",
        bio: "Leonardo é um desenvolvedor etc etc etc.",
        company: "PyTchê",
        link: {
          href: "https://twitter.com/leonardork",
          text: "@leonardork"
        },
        presentation: {
          title: "Celery",
          description: "Palestra sobre o Celery, um framework para filas de tarefas.",
          time: "10h50"
        }
      },
      {
        name: "Bruno Peron",
        photo: "http://www.gravatar.com/avatar/2197b55a1488e4fba03c1c6d3d72f155?s=200",
        bio: "Bruno é um desenvolvedor etc etc etc.",
        company: "Hewlett-Packard",
        link: {
          href: "https://plus.google.com/u/0/102688975215539505853",
          text: "Google+"
        },
        presentation: {
          title: "Métodos Mágicos",
          description: "Palestra introdutória sobre métodos mágicos (magic methods).",
          time: "11h40"
        }
      },
      {
        name: "Steve Jobs",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://github.com/stevie",
          text: "@stevie"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};