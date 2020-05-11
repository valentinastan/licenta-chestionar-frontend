const allQuestions = {
  questionnaire: {
    validated: false,
    questions: {
      1: {
        id: 1,
        text: 'În cadrul cărui interval de vârstă vă situați?',
        variante: {
          1: {
            val: '18-25 ani',
            checked: false,
          },
          2: {
            val: '26-35 ani',
            checked: false,
          },
          3: {
            val: '36-45 ani',
            checked: false,
          },
          4: {
            val: '46-55 ani',
            checked: false,
          },
          5: {
            val: '56-70 ani',
            checked: false,
          },
          6: {
            val: 'Peste 70 de ani',
            checked: false,
          },
        },
      },
      2: {
        id: 2,
        text: 'Cărui sex aparțineți?',
        variante: {
          1: {
            val: 'Feminin',
            checked: false,
          },
          2: {
            val: 'Masculin',
            checked: false,
          },
        },
      },
      3: {
        id: 3,
        text: 'Care este numărul de persoane care locuiesc în gospodăria dumneavoastră?',
        variante: {
          1: {
            val: '1 persoana',
            checked: false,
          },
          2: {
            val: '2 persoane',
            checked: false,
          },
          3: {
            val: '3 persoane',
            checked: false,
          },
          4: {
            val: '4 persoane',
            checked: false,
          },
          5: {
            val: '5 persoane',
            checked: false,
          },
          6: {
            val: 'Mai mult de 5 persoane',
            checked: false,
          },
        },
      },
      4: {
        id: 4,
        text: 'Din care copii sub 18 ani?',
        variante: {
          1: {
            val: 'Nici un copil',
            checked: false,
          },
          2: {
            val: '1 copil',
            checked: false,
          },
          3: {
            val: '2 copii',
            checked: false,
          },
          4: {
            val: 'Mai mult de 2 copii',
            checked: false,
          },
        },
      },
      5: {
        id: 5,
        text: 'Care este starea civilă a dumneavoastra?',
        variante: {
          1: {
            val: 'Casatorit(a)',
            checked: false,
          },
          2: {
            val: 'Necasatorit(a)',
            checked: false,
          },
          3: {
            val: 'Uniune consensuala',
            checked: false,
          },
          4: {
            val: 'Divortat(a)',
            checked: false,
          },
          5: {
            val: 'Vaduv(a)',
            checked: false,
          },
        },
      },
      6: {
        id: 6,
        text: 'Care este ultima formă de educație absolvită?',
        variante: {
          1: {
            val: 'Invatamant primar',
            checked: false,
          },
          2: {
            val: 'Invatamant gimnazial',
            checked: false,
          },
          3: {
            val: 'Invatamant liceal',
            checked: false,
          },
          4: {
            val: 'Invatamant postliceal',
            checked: false,
          },
          5: {
            val: 'Invatamant profesional',
            checked: false,
          },
          6: {
            val: 'Studii universitare de licenta',
            checked: false,
          },
          7: {
            val: 'Studii universitare de masterat',
            checked: false,
          },
          8: {
            val: 'Studii universitare de doctorat',
            checked: false,
          },
          9: {
            val: 'Studii postuniversitare',
            checked: false,
          },
        },
      },
      7: {
        id: 7,
        text: 'Ocupaţia dumneavoastră actuală?',
        variante: {
          1: {
            val: 'Angajat in sectorul public',
            checked: false,
          },
          2: {
            val: 'Angajat in sectorul privat',
            checked: false,
          },
          3: {
            val: 'Student',
            checked: false,
          },
          4: {
            val: 'Detin o afacere',
            checked: false,
          },
          5: {
            val: 'Pensionar',
            checked: false,
          },
          6: {
            val: 'Casnic(a)',
            checked: false,
          },
          7: {
            val: 'Somer',
            checked: false,
          },
        },
      },
      8: {
        id: 8,
        text: 'Care este, cu aproximaţie, venitul lunar net al dumneavoastră?',
        variante: {
          1: {
            val: 'Sub 1999 lei',
            checked: false,
          },
          2: {
            val: 'Intre 2000 si 3999 lei',
            checked: false,
          },
          3: {
            val: 'Intre 4000 si 5999 lei',
            checked: false,
          },
          4: {
            val: 'Intre 6000 si 7999 lei',
            checked: false,
          },
          5: {
            val: 'Intre 8000 si 9999 lei',
            checked: false,
          },
          6: {
            val: '10 000 lei si peste',
            checked: false,
          },
        },
      },
    9: {
      id: 9,
      text: "În general, cu ce frecvenţă consumaţi legume proaspete?",
      variante: {
        1: {
          val: 'Zilnic',
          checked: false,
        },
        2: {
          val: 'De 2-3ori pe saptamana',
          checked: false,
        },
        3: {
          val: 'Saptamanal',
          checked: false,
        },
        4: {
          val: 'De 2-3ori pe luna',
          checked: false,
        },
        5: {
          val: 'Mai rar de o data pe luna',
          checked: false,
        },
      },
    },
    10: {
      id: 10,
      text: 'Cat de des achizitionati legume proaspete?',
      variante: {
        1: {
          val: 'Zilnic',
          checked: false,
        },
        2: {
          val: 'De 2-3ori pe saptamana',
          checked: false,
        },
        3: {
          val: 'Saptamanal',
          checked: false,
        },
        4: {
          val: 'La cateva saptamani',
          checked: false,
        },
      },
    },
    11: {
      id: 11,
      text: 'Ce procent din cantitatea totală de alimente consumate într-o lună este alocat consumului de legume proaspete?',
      variante: {
        1: {
          val: 'Intre 1% - 25%',
          checked: false,
        },
        2: {
          val: 'Intre 26% - 50%',
          checked: false,
        },
        3: {
          val: 'Intre 51% - 75%',
          checked: false,
        },
        4: {
          val: 'Intre 75% - 100%',
          checked: false,
        },
      },
    },
    12: {
      id: 12,
      text: 'Ce produse din categoria legume proaspete aţi consumat în ultima lună?',
      variante: {
        1: {
          val: 'Cartofi',
          checked: false,
        },
        2: {
          val: 'Rosii',
          checked: false,
        },
        3: {
          val: 'Castraveti',
          checked: false,
        },
        4: {
          val: 'Morcovi',
          checked: false,
        },
        5: {
          val: 'Ceapa verde',
          checked: false,
        },
        6: {
          val: 'Ceapa uscata',
          checked: false,
        },
        7: {
          val: 'Usturoi',
          checked: false,
        },
        8: {
          val: 'Vinete',
          checked: false,
        },
        9: {
          val: 'Dovlecel',
          checked: false,
        },
        10: {
          val: 'Sfecla rosie',
          checked: false,
        },
        11: {
          val: 'Ridichii',
          checked: false,
        },
        12: {
          val: 'Varza',
          checked: false,
        },
        13: {
          val: 'Ardei gras',
          checked: false,
        },
        14: {
          val: 'Ardei gogosar',
          checked: false,
        },
        15: {
          val: 'Ardei capia',
          checked: false,
        },
        16: {
          val: 'Ardei iute',
          checked: false,
        },
        17: {
          val: 'Ciuperci',
          checked: false,
        },
        18: {
          val: 'Telina',
          checked: false,
        },
        19: {
          val: 'Patrunjel',
          checked: false,
        },
        20: {
          val: 'Marar',
          checked: false,
        },
        21: {
          val: 'Leustean',
          checked: false,
        },
        22: {
          val: 'Pastarnac',
          checked: false,
        },
        23: {
          val: 'Praz',
          checked: false,
        },
        24: {
          val: 'Fasole',
          checked: false,
        },
        25: {
          val: 'Mazare',
          checked: false,
        },
        26: {
          val: 'Conopida',
          checked: false,
        },
        27: {
          val: 'Broccoli',
          checked: false,
        },
        28: {
          val: 'Altele',
          checked: false,
        },
      },
      type: 'multipleChoices',
    },
    13: {
      id: 13,
      text: 'De unde obişnuiţi să vă procuraţi legumele proaspete?',
      variante: {
        1: {
          val: 'Le cumpar din hipermarket sau supermarket',
          checked: false,
        },
        2: {
          val: 'Magazin specializat pentru legume',
          checked: false,
        },
        3: {
          val: 'Le cumpar din piata',
          checked: false,
        },
        4: {
          val: 'Le primesc de la tara',
          checked: false,
        },
        5: {
          val: 'Le cultiv in propria gospodarie',
          checked: false,
        },
        6: {
          val: 'Magazin specializat pentru legume/fructe online',
          checked: false,
        },
      },
      type: 'multipleChoices',
    },
    14: {
      id: 14,
      text: 'Vă rugăm să menţionaţi, în ordinea importanţei, principalele trei criterii de care ţineţi cont în alegerea legumelor proaspete?',
      variante: {
        1: {
          val: 'Prospeţimea',
          checked: false,
        },
        2: {
          val: 'Aspectul',
          checked: false,
        },
        3: {
          val: 'Originea produselor(locala sau import)   ',
          checked: false,
        },
        4: {
          val: 'Pretul',
          checked: false,
        },
        5: {
          val: 'Caracterul bio',
          checked: false,
        },
      },
      type: 'threeChoices',
    },
    15: {
      id: 15,
      text: 'Referindu-vă la categoriile de legume proaspete cultivate şi în România, care dintre următoarele'+
      ' afirmaţii referitoare la achiziţionarea lor vi se potriveşte cel mai bine?',
      variante: {
        1: {
          val: 'Prefer sa cumpar legume autohtone',
          checked: false,
        },
        2: {
          val: 'Prefer sa cumpar legume din import',
          checked: false,
        },
      },
    },
    16: {
      id: 16,
      text: 'Preferaţi să achizitionaţi legume proaspete în extrasezon?',
      variante: {
        1: {
          val: 'Da',
          checked: false,
        },
        2: {
          val: 'Nu',
          checked: false,
        },
      },
    },
    17: {
      id: 17,
      text: 'Ce legume v-aţi dori să puteţi achiziţiona pe tot parcursul anului, chiar şi în sezonul rece?',
      type: 'inputAnswer',
    },
    18: {
      id: 18,
      text: 'Cu cât aţi fi dispus să plătiţi mai mult pentru un kilogram de legume ecologice comparativ cu un kilogram de legume convenţionale?',
      variante: {
        1: {
          val: '0%',
          checked: false,
        },
        2: {
          val: 'Intre 1%-25%',
          checked: false,
        },
        3: {
          val: 'Intre 26%- 50%',
          checked: false,
        },
        4: {
          val: 'Intre 51%-75%',
          checked: false,
        },
        5: {
          val: 'Intre 76%- 100%',
          checked: false,
        },
      },
    },
    19: {
      id: 19,
      text: 'Cât de mulţumit sunteţi cu privire la legumele proaspete pe care le achiziţionati în momentul actual?',
      variante: {
        1: {
          val: 'Foarte nemultumit',
          checked: false,
        },
        2: {
          val: 'Nemultumit',
          checked: false,
        },
        3: {
          val: 'Indiferent',
          checked: false,
        },
        4: {
          val: 'Multumit',
          checked: false,
        },
        5: {
          val: 'Foarte multumit',
          checked: false,
        },
      },
    },
    20: {
      id: 20,
      text: 'Cât de dificil vă este să vă procuraţi legume proaspete conform aşteptărilor dumneavoastră?',
      variante: {
        1: {
          val: 'Foarte dificil, nu gasesc',
          checked: false,
        },
        2: {
          val: 'Dificil, gasesc greu',
          checked: false,
        },
        3: {
          val: 'Indiferent, nu pot estima',
          checked: false,
        },
        4: {
          val: 'Relativ usor, nu caut foarte mult',
          checked: false,
        },
        5: {
          val: 'Foarte usor, cumpar din prima ceea ce caut',
          checked: false,
        },
      },
    },
    21: {
      id: 21,
      text: 'Cum apreciaţi veniturile dumneavoastră în raport cu necesităţile pe care le aveţi?',
      variante: {
        1: {
          val: 'Nu ne ajung nici pentru strictul necesar',
          checked: false,
        },
        2: {
          val: 'Ne ajung doar pentru strictul necesa',
          checked: false,
        },
        3: {
          val: 'Ne ajung pentru un trai decent, dar nu ne permitem cumpararea unor obiecte mai scumpe',
          checked: false,
        },
        4: {
          val: 'Reusim sa cumparam si obiecte mai scumpe, dar cu eforturi',
          checked: false,
        },
        5: {
          val: 'Reusim sa avem tot ce ne trebuie fara mari eforturi',
          checked: false,
        },
      },
    },
  }
}}

export default allQuestions
