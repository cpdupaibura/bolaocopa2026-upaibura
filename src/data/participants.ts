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
  { id: 'netinho',       name: 'Netinho',             pdfFile: 'netinho.pdf'       },
  { id: 'enio-1',        name: 'Enio Batalha',        label: 'Aposta 1', pdfFile: 'enio-1.pdf' },
  { id: 'enio-2',        name: 'Enio Batalha',        label: 'Aposta 2', pdfFile: 'enio-2.pdf' },
  { id: 'bruno-1',       name: 'Bruno Thomaz',        label: 'Aposta 1', pdfFile: 'bruno-1.pdf' },
  { id: 'bruno-2',       name: 'Bruno Thomaz',        label: 'Aposta 2', pdfFile: 'bruno-2.pdf' },
  { id: 'cleber',        name: 'Cleber',              pdfFile: 'cleber.pdf'        },
  { id: 'diego',         name: 'Diego Rodrigo',       pdfFile: 'diego.pdf'         },
  { id: 'graca',         name: 'Graça Santos',        pdfFile: 'graca.pdf'         },
  { id: 'igor',          name: 'Igor Rafael',         pdfFile: 'igor.pdf'          },
  { id: 'ionaldo-jr',    name: 'Ionaldo Lins',        pdfFile: 'ionaldo-jr.pdf'    },
  { id: 'joao-paulo-1',  name: 'João Paulo',  label: 'Aposta 1', pdfFile: 'joao-paulo-1.pdf' },
  { id: 'joao-paulo-2',  name: 'João Paulo',  label: 'Aposta 2', pdfFile: 'joao-paulo-2.pdf' },
  { id: 'jocelmo',       name: 'Jocelmo',             pdfFile: 'jocelmo.pdf'       },
  { id: 'kamilla',       name: 'Kamilla Ravenna',     pdfFile: 'kamilla.pdf'       },
  { id: 'rebeca',        name: 'Rebeca Montenegro',   pdfFile: 'rebeca.pdf'        },
  { id: 'rosinaldo',        name: 'Rosinaldo Barbosa',  pdfFile: 'rosinaldo.pdf'        },
  { id: 'jorge-edson',     name: 'Jorge Edson',        pdfFile: 'jorge-edson.pdf'      },
  { id: 'jorge-fernandes', name: 'Jorge Fernandes',    pdfFile: 'jorge-fernandes.pdf'  },
];
