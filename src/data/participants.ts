import { Participant } from '../lib/types';

/**
 * Lista de participantes do bolão.
 *
 * Quem tem múltiplas fichas recebe um `label` ("Aposta 1", "Aposta 2")
 * e um id único por ficha.
 *
 * pdfFile → nome do arquivo em /public/pdfs/
 */
export const PARTICIPANTS: Participant[] = [
  { id: 'eduardo-alex',  name: 'Eduardo Alex',       pdfFile: 'eduardo-alex.pdf'  },
  { id: 'joao-paulo',    name: 'João Paulo',          pdfFile: 'joao-paulo.pdf'    },
  { id: 'kamilla',       name: 'Kamilla Ravenna',     pdfFile: 'kamilla.pdf'       },
  { id: 'enio-1',        name: 'Enio Batalha',        label: 'Aposta 1', pdfFile: 'enio-1.pdf' },
  { id: 'enio-2',        name: 'Enio Batalha',        label: 'Aposta 2', pdfFile: 'enio-2.pdf' },
  { id: 'bruno-1',       name: 'Bruno Thomaz',        label: 'Aposta 1', pdfFile: 'bruno-1.pdf' },
  { id: 'bruno-2',       name: 'Bruno Thomaz',        label: 'Aposta 2', pdfFile: 'bruno-2.pdf' },
  { id: 'jocelmo',       name: 'Jocelmo Figueredo',   pdfFile: 'jocelmo.pdf'       },
  { id: 'jorginho',      name: 'Jorginho',            pdfFile: 'jorginho.pdf'      },
  { id: 'diego',         name: 'Diego Rodrigo',       pdfFile: 'diego.pdf'         },
  { id: 'netinho',       name: 'Netinho',             pdfFile: 'netinho.pdf'       },
  { id: 'rebeca',        name: 'Rebeca Montenegro',   pdfFile: 'rebeca.pdf'        },
  { id: 'cleber',        name: 'Cleber Leal',         pdfFile: 'cleber.pdf'        },
  { id: 'jorge-enf',     name: 'Jorge Enfermagem',    pdfFile: 'jorge-enf.pdf'     },
  { id: 'graca',         name: 'Graça',               pdfFile: 'graca.pdf'         },
];
