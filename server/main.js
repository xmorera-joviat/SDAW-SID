// Importació i execució de les publicacions i les seves funcions
import pubExemple from '../imports/api/exemplePaginacio/server/publicacio.js';
pubExemple();


// Importacions de fitxers de mètodes
import '../imports/api/exemplePaginacio/methods.js';
import '../imports/api/rols/methods.js';

// Insercions inicials de la base de dades //
import insercions from '../imports/startup/server/index.js';
insercions();
// Insercions inicials de la base de dades //


//insercio tabular temes
import '../imports/api/temes/temes.js';
	//metode temes
	import '../imports/api/temes/metodes.js';