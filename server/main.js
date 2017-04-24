// Importació i execució de les publicacions i les seves funcions
import pubExemple from '../imports/api/exemplePaginacio/server/publicacio.js';
pubExemple();
import usuaris from '../imports/api/usuaris/server/publicacio.js';
usuaris();
import cursos from '../imports/api/curs/server/publicacio.js';
cursos();
import radiografies from '../imports/api/radiografies/server/publicacio.js';
radiografies();
import respostes from '../imports/api/respostes/server/publication.js';
respostes();


// Importacions de fitxers de mètodes
import '../imports/api/usuaris/tabularUsers.js';
import '../imports/api/exemplePaginacio/methods.js';
import '../imports/api/rols/methods.js';
import '../imports/api/grups/metodes.js';
import '../imports/api/temes/metodes.js';
import '../imports/api/curs/metodes.js';
import '../imports/api/llicons/metodes.js';
import '../imports/api/usuaris/metodes.js';
import '../imports/api/pujarRads/server/methods.js';
import '../imports/api/radiografies/methods.js';
import '../imports/api/respostes/methods.js';


// Insercions inicials de la base de dades //
import insercions from '../imports/startup/server/index.js';
insercions();
