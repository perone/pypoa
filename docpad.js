module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "PyPOA",
      description: "1o Python Porto Alegre",
      date: "7 de Junho",
      // If your event is free, just comment this line
      // price: "R$ 10",
      venue: "FTEC",
      address: "Av. Assis Brasil, 7765",
      city: "Porto Alegre",
      state: "Rio Grande do Sul"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscrições !",
        link: "http://pypoa.eventbrite.com"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "pypoa",
      url: "http://www.pypoa.org",
      googleanalytics: "UA-4797390-4"
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
      //'partners',
      'contact',
      'faq'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Programação",
      sponsors: "Patrocinadores",
      //partners: "Parceiros",
      contact: "Contato",
      faq: "FAQ"
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
        name: "Mauricio Abreu Antunes",
        photo: "http://www.gravatar.com/avatar/851c5fc71f5542c0a61993b3b0e20ac5?s=200",
        bio: "Programador Python focado no framework Django desenvolvendo soluções na Azion Technologies.",
        company: "Programador Python at Azion Technologies (http://www.azion.com.br/)",
        link: {
          href: "https://github.com/mauricioabreu",
          text: "@mauricioabreu"
        },
        presentation: {
          title: "Introdução ao Django framework",
          description: "Passando por conceitos básicos de um framework até o entendimento básico de modelos de dados, templates e views utilizando Django.",
          time: "10h00"
        }
      },
      { 
        name: "Leonardo Korndorfer",
        photo: "http://www.gravatar.com/avatar/6c3887b22478ea33fffa3bad4e8b1625?s=200",
        bio: "Programador profissional, fotógrafo amador e jogador de sinuca ocasional.",
        company: "",
        link: {
          href: "https://leok.me",
          text: "leok.me"
        },
        presentation: {
          title: "Python + Celery",
          description: "Celery é um framework para troca de mensagens e execução de código em segundo plano. Essa apresentação fala um pouco sobre celery e suas features.",
          time: "10h50"
        }
      },
      {
        name: "Matheus Carvalho",
        photo: "http://www.gravatar.com/avatar/c33a2a82b450a855b19da3200b4a5ad8?s=200",
        bio: "TSPI - Tecnologia em Sistemas para Internet. Certificações Linux",
        company: "Área 31 - Hackerspace",
        link: {
          href: "https://www.facebook.com/go.matheus",
          text: "Facebook"
        },
        presentation: {
          title: "Engenharia Social e Técnicas de Invasão com S.E.T",
          description: "Engenharia Social - Conceito e Como Usa-la na Prática, Técnicas de Invasão e Roubos de Credencial com o uso da Ferramenta S.E.T, Como se proteger.",
          time: "11h40"
        }
      },
      {
        name: "Almoço",
        time: "12h00"
      },
      {
        name: "Leandro Nunes",
        photo: "http://www.gravatar.com/avatar/9b5f5241e0d3348ef223bcc91f681d5e?s=200",
        bio: "Leandro é desenvolvedor de software e palestrante em eventos de software livre.",
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
        bio: "Christian é desenvolvedor Python e também mantenedor open-source.",
        company: "Codefi.sh",
        link: {
          href: "https://github.com/perone",
          text: "@perone"
        },
        presentation: {
          title: "Machine Learning com Python",
          description: "Palestra de introdução à Machine Learning usando Python e Scikit-Learn (sklearn).",
          time: "14h20"
        }
      },
      {
        name: "Relsi Maron",
        photo: "https://www.gravatar.com/avatar/31539ba4707f0bfb36987c0299bbf800?s=200",
        bio: "Sócio fundador e CTO da Startup CodeFreelas. Trabalha com desenvolvimento web há 5 anos. Programador autodidata, ativista de software livre e membro do PyTchê.",
        company: "CodeFreelas.com",
        link: {
          href: "http://facebook.com/relsi",
          text: "facebook.com/relsi"
        },
        presentation: {
          title: "Transformando ideias em realidade com web2py",
          description: "Um dos maiores obstáculos para empreendedores não técnicos é transformar a sua ideia em um MVP de qualidade, em pouco tempo e com baixo investimento. Mas esse obstáculo pode ser vencido facilmente com o framework python para desenvolvimento web, o Web2py, que possibilita uma rápida prototipação, e a implementação de ferramentas funcionais seguras e escaláveis com uma curva de desenvolvimento muito pequena.  ",
          time: "14h50"
        }
      },
      {
        name: "Coffee Break",
        time: "15h40"
      },
      {
        name: "Sérgio H. Berlotto Jr",
        photo: "http://www.gravatar.com/avatar/208e4a03a5e5ac5dda83c6b685d399f5?s=200",
        bio: "Usuário e incentivador Linux, programador desde 1999, atualmente desenvolve com Python e Wordpress no site do gabinetedigital.rs.gov.br do governo do estado.",
        company: "Gabinete Digital",
        link: {
          href: "http://github.com/berlotto",
          text: "github.com/berlotto"
        },
        presentation: {
          title: "Deploy de aplicação Python no OpenShift",
          description: "Aprender como utilizar e como fazer deploy de uma aplicação em Python no ambiente open-source OpenShift, criado pela Red Hat. Saiba como criar sua aplicação, como utilizar o git com ela, como guardar as versões do seu deploy, e algumas outras funções.",
          time: "16h00"
        }
      },
      {
        name: "Volmar Oliveira Junior",
        photo: "http://www.gravatar.com/avatar/16cd035bfdae59284a629fbdca4d864c?s=200",
        bio: "Volmar é desenvolvedor de software na Hewlett-Packard.",
        company: "",
        link: {
          href: "https://www.linkedin.com/in/volmaroliveirajr",
          text: "linkedin.com/in/volmaroliveirajr"
        },
        presentation: {
          title: "Introdução a Automação com Fabric",
          description: "Fabric é uma ferramenta que torna possível administrar e automatizar tarefas em servidores via SSH, neste tutorial será apresentada a biblioteca e alguns exemplos de utilização.",
          time: "16h20"
        }
      },
      {
        name: "Daniel Bastos",
        photo: "http://www.gravatar.com/avatar/7ec7f2e54e1a0f8eadb7e4a23a78a56e?s=200",
        bio: "Desenvolvedor web por paixão, amante do software livre e acadêmico de longa data.",
        company: "Freelancer",
        link: {
          href: "http://daniellbastos.com.br/",
          text: "daniellbastos.com.br"
        },
        presentation: {
          title: "South, o básico para manter uma \"vida saudável\"",
          description: "Uma breve apresentação sobre a biblioteca South, como utiliza-la em projetos django para manter a evolução constantes dos seus models (apps) de uma forma simples e assim manter uma \"vida saudável\"",
          time: "16h50"
        }
      },
      {
        name: "Encerramento",
        time: "17h30"
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "FTEC",
        logo: "themes/pypoa/img/logo_ftec.jpg",
        url: "http://www.ftec.com.br/"
      },
      {
        name: "Azion Technologies",
        logo: "themes/pypoa/img/azion_logo.png",
        url: "http://www.azion.com.br/"
      },
      {
        name: "Think Digital",
        logo: "themes/pypoa/img/think_logo.png",
        url: "http://www.thinkinovacao.com.br/"
      },
      {
        name: "Codefreelas",
        logo: "themes/pypoa/img/codefreelas.png",
        url: "http://www.codefreelas.com/"
      },
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
