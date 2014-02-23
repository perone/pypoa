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
        company: "Azion Technologies",
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
        company: "Hewlett-Packard",
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
        name: "Almoço",
        time: "12h20"
      },
      {
        name: "Leandro Nunes",
        photo: "http://www.gravatar.com/avatar/9b5f5241e0d3348ef223bcc91f681d5e?s=200",
        bio: "Leandro é um desenvolvedor etc etc etc.",
        company: "Codefi.sh",
        link: {
          href: "https://twitter.com/nunesleandro",
          text: "@nunesleandro"
        },
        presentation: {
          title: "Web stack com Nginx + Chaussette + Circus + Flask",
          description: "Essa palestra apresenta a configuração de um stack completo para deploy de aplicações WSGI usando Nginx, Chaussette e Circus.",
          time: "14h00"
        }
      },
      {
        name: "Christian S. Perone",
        photo: "http://www.gravatar.com/avatar/7735d49d1b04ba5e18bbe107ad756b0d?s=200",
        bio: "Christian é um desenvolvedor etc etc etc.",
        company: "Hewlett-Packard",
        link: {
          href: "https://github.com/perone",
          text: "@perone"
        },
        presentation: {
          title: "Machine Learning com Python",
          description: "Palestra de introdução à Machine Learning usando Python e Scikit-Learn (sklearn).",
          time: "14h50"
        }
      },
      {
        name: "Coffee Break",
        time: "15h40"
      },
      {
        name: "Sérgio Berlotto",
        photo: "http://www.gravatar.com/avatar/208e4a03a5e5ac5dda83c6b685d399f5?s=200",
        bio: "Sérgio é um desenvolvedor etc etc etc.",
        company: "Gabinete Digital",
        link: {
          href: "https://twitter.com/berlottocdd",
          text: "@berlottocdd"
        },
        presentation: {
          title: "Deploy de aplicação Python no OpenShift",
          description: "Uma palestra sobre o deploy de aplicações Python no OpenShift.",
          time: "16h00"
        }
      },
      {
        name: "Paulo Zucco",
        photo: "http://www.gravatar.com/avatar/3083ce3ffb8786c2fdbde80970b7998b?s=200",
        bio: "Paulo é um desenvolvedor etc etc etc.",
        company: "CWI",
        link: {
          href: "https://plus.google.com/102385293155320837132",
          text: "Google+"
        },
        presentation: {
          title: "PyGame, criando jogos em Python",
          description: "Uma palestra sobre a criação de jogos em Python.",
          time: "16h50"
        }
      },
      {
        name: "Encerramento",
        time: "17h40"
      },

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